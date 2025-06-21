const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  
  const dolarToday = 5.80;
  const euroToday = 6.15;
  const libraToday = 7.25;
  const bitcoinToday = 130000;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue);

  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value === "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value === "bitcoin") {
    currencyValueConverted.innerHTML = (inputCurrencyValue / bitcoinToday).toFixed(6) + " BTC";
  }
}

function changecurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "https://flagcdn.com/w320/us.png";
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/Euro.png";
  }

  if (currencySelect.value === "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "./assets/libra 1.png";
  }

  if (currencySelect.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin 1.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changecurrency);
convertButton.addEventListener("click", convertValues);
