const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { expect } = require("chai");
const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

let driver;

setDefaultTimeout(20000);

Given(
  "el usuario se encuentra en la página {string}",
  { timeout: 20000 },
  async function (url) {
    try {
      const options = new chrome.Options();
      options.addArguments("--incognito");
      options.addArguments(
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
      );

      driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();
      await driver.get(url);
      await driver.wait(until.urlIs(url), 10000);
    } catch (error) {
      console.error("Error loading the page: ", error);
      throw error;
    }
  }
);

When(
  "el usuario deja el campo nombre del registro sin completar",
  async function () {
    try {
      // Localizar los campos de entrada
      const emailInput = await driver.wait(
        until.elementLocated(
          By.xpath('//input[@placeholder="Ingresa tu correo"]')
        ),
        10000
      );

      const nameInput = await driver.wait(
        until.elementLocated(
          By.xpath('//input[@placeholder="Ingresa tu nombre"]')
        ),
        10000
      );

      // Esperar a que los campos sean visibles y habilitados antes de interactuar
      await driver.wait(until.elementIsVisible(emailInput), 10000);
      await driver.wait(until.elementIsVisible(nameInput), 10000);
      await driver.wait(until.elementIsEnabled(emailInput), 10000);
      await driver.wait(until.elementIsEnabled(nameInput), 10000);

      // Hacer clic en el campo de email
      await emailInput.click();
      // Hacer clic en el campo de nombre
      await nameInput.click();

      // Localizar y hacer clic en el botón
      const button = await driver.wait(
        until.elementLocated(By.xpath("//button")),
        10000
      );

      await driver.wait(until.elementIsVisible(button), 10000);
      await driver.wait(until.elementIsEnabled(button), 10000);
      await button.click();
    } catch (error) {
      console.error("Error during form interaction: ", error);
      throw error;
    }
  }
);

Then(
  "se muestra un cuadro de texto de ingreso obligatorio para el campo nombre",
  { timeout: 30000 },
  async function () {
    try {
        const nameField = await driver.wait(
          until.elementLocated(By.xpath("//div[contains(text(), 'El campo es obligatorio')]")),
          30000
        );
      const emailField = await driver.wait(
        until.elementLocated(
          By.xpath(
            "//div[contains(text(), 'El correo electrónico es requerido')]"
          )
        ),
        30000
      );

        const emailMessage = await emailField.getText();
      const nameMessage = await nameField.getText();

      expect(nameMessage).to.equal("El campo es obligatorio");
        expect(emailMessage).to.equal("El correo electrónico es requerido");
    } catch (error) {
      console.error("Error during validation: ", error);
      throw error;
    }
  }
);
