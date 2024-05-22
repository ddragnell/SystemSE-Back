const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { expect } = require("chai");
const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

let driver;

setDefaultTimeout(20000);

Given("el usuario está en la página {string}", async function (url) {
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
});

When(
  "el usuario llena el campo de correo con {string}",
  async function (email) {
    try {
      const emailInput = await driver.wait(
        until.elementLocated(
          By.xpath('//input[@placeholder="Ingresa tu correo"]', 10000)
        ),
        10000
      );
      await driver.wait(until.elementIsVisible(emailInput), 10000);
      await driver.wait(until.elementIsEnabled(emailInput), 10000);

      // Limpiar el campo antes de llenarlo
      await emailInput.clear();
      await emailInput.sendKeys(email);

      const filledEmail = await emailInput.getAttribute("value");
      expect(filledEmail).to.equal(email);

      console.log("Filled the email field with: ", email);
    } catch (error) {
      console.error("Error filling the email field: ", error);
      throw error;
    }
  }
);

Then(
  "el sistema verifica que el campo de correo sea válido",
  { timeout: 30 * 1000 },
  async function () {
    const emailField = await driver.wait(
      until.elementLocated(By.xpath("//div[@class='v-messages__message']")),
      30000
    );
    const emailMessage = await emailField.getText();
    expect(emailMessage).to.equal("El correo electrónico debe ser válido");
  }
);
