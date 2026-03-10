const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
   const inputcurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //Valor em Real
      const currencyValueToConverted = document.querySelector(".currency-value")  //Outras moedas
      const imagem = document.getElementById("logoUSA")
      const currencyName = document.getElementById("currency-name")



   const dolarToday = 5.24
   const euroToday = 6.08
   const libraToday = 7.03
   const bitcoinToday = 353045.72

    if(currencySelect.value == "dolar"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
   }).format(inputcurrencyValue / dolarToday)

   currencyName.innerHTML = "Dólar americano"
   imagem.src = "./assets/USA-dolar.png"

    }

      if(currencySelect.value == "euro"){
        imagem.src = "assets/Euro.png"
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
   }).format(inputcurrencyValue / euroToday)
   
      currencyName.innerHTML = "Euro"
   imagem.src = "./assets/Euro.png"
    }

      if(currencySelect.value == "bitcoin"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("BTC", {
    style: "currency",
    currency: "BTC"
   }).format(inputcurrencyValue /  bitcoinToday )

      currencyName.innerHTML = "Bitcoin"
   imagem.src = "./assets/Bitcoin.png"
    }

      if(currencySelect.value == "libra"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
   }).format(inputcurrencyValue /  libraToday )

      currencyName.innerHTML = "Libra esterlina"
   imagem.src = "./assets/libra.png"
    }

         if(currencySelect.value == "real"){
         imagem.src = "./assets/Brasil-real.png"
         }


   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
   }).format(inputcurrencyValue)






   
/*    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", { Deixar pra depois arrumar!!!!!!
    style: "currency",
    currency: "USD"
   }).format(inputcurrencyValue)
   */

   


}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", convertValues)