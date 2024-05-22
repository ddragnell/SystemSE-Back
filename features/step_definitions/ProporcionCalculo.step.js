const {
  Given,
  When,
  Then,
} = require("@cucumber/cucumber");
const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

let driver;

Given(
  "el usuario está en la página {string} para calcular la proporcion",
  { timeout: 20000 },
  async function (url) {
    try {
        driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments("--incognito")).build();

      await driver.get(url);
      await driver.wait(until.urlIs(url), 10000);
    } catch (error) {
      console.error("Error loading the page: ", error);
      throw error;
    }
  }
);

When(
  'el usuario elige 95% en la confianza, {string} en la proporción muestral y {string} en el tamaño de la muestra',
  { timeout: 20000 },
  async function (proporcion, tamano) {
    try {
    //   const confianzaInput = await driver.wait(
    //     until.elementLocated(By.xpath('//input[@inputmode="none"]')),
    //     10000
    //   );
    //   await driver.wait(until.elementIsVisible(confianzaInput), 10000);
    //   await confianzaInput.sendKeys(confianza);

      const proporcionInput = await driver.wait(
        until.elementLocated(
          By.xpath('//input[@placeholder="Valor de la proporción muestral"]')
        ),
        10000
      );
      await driver.wait(until.elementIsVisible(proporcionInput), 10000);
      await proporcionInput.sendKeys(proporcion);

      const tamanoInput = await driver.wait(
        until.elementLocated(
          By.xpath('//input[@placeholder="Tamaño de la muestra"]')
        ),
        10000
      );
      await driver.wait(until.elementIsVisible(tamanoInput), 10000);
      await tamanoInput.sendKeys(tamano);

      console.log("Filled the fields with: ", confianza, proporcion, tamano);
    } catch (error) {
      console.error("Error filling the fields: ", error);
      throw error;
    }
  }
);

Then(
  "el usuario da click en el botón calcular",
  { timeout: 20000 },
  async function () {
    try {
      const calcularButton = await driver.wait(
        until.elementLocated(By.xpath('//button[contains(., "Calcular")]')),
        10000
      );
      await driver.wait(until.elementIsVisible(calcularButton), 10000);
      await calcularButton.click();
      console.log("Clicked the calculate button");
    } catch (error) {
      console.error("Error clicking the calculate button: ", error);
      throw error;
    }
  }
);

Then(
  "se muestra el resultado del cálculo del intervalo en pantalla",
  { timeout: 20000 },
  async function () {
    try {
      const resultadoElements = await driver.findElements(
        By.xpath('//div[@aria-labelledby="swal2-title"]')
      );
      if (resultadoElements.length > 0) {
        console.log(
          "El resultado del cálculo del intervalo está presente en la pantalla."
        );
      } else {
        console.log(
          "El resultado del cálculo del intervalo no está presente en la pantalla."
        );
      }
    } catch (error) {
      console.error("Error al verificar la presencia del resultado: ", error);
      throw error;
    }
  }
);
