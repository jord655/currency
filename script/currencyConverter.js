import convertToDollar from "./converToDollars.js";
import convertToEuro from "./convertToEuros.js";
import convertToPounds from "./convertToPounds.js";
import converToYen from "./convertToYen.js";
import converToghc from "./ghc.js";
  
 let selectCurrency= document.getElementById("select-currency")
 let currencyInput= document.getElementById("currencyInput")
let changeCurrencyBtn= document.getElementById("changeCurrencyBtn")
let outputDiv = document.getElementById("output")
let naira;

changeCurrencyBtn.addEventListener("click",() =>{
  
 let selectedCurrency = selectCurrency.value;
 let currency= currencyInput.value;
 if(selectedCurrency === "usd"){
   naira =convertToDollar(currency)
   outputDiv.innerHTML = `$${currency} = ₦${naira}`
 } else if(selectedCurrency=== "euro"){
   naira = convertToEuro(currency)
   outputDiv.innerHTML=`;€${currency} =₦${naira}`

 }else if (selectedCurrency==="pounds"){
    naira= convertToPounds(currency)
    outputDiv.innerHTML=`£${currency} =₦${naira}`
 } else if (selectedCurrency==="yen"){
  naira=converToYen(currency)
  outputDiv.innerHTML=`¥${currency} =₦${naira}`
 } else if (selectedCurrency==="ghc"){
  naira=converToghc(currency)
  outputDiv.innerHTML=`¢${currency} =₦${naira}`
 }

})




