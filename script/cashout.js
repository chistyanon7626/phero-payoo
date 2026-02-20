document.getElementById("cashout").addEventListener("click",function(){
    const cashoutNumberInput = document.getElementById("Agent-number");
    const cashoutNumber = cashoutNumberInput.value;
    if(cashoutNumber.length != 11){
        alert("Invalid Number");
        return;
    }

 const cashoutAmountInput = document.getElementById("amount",);
 const cashoutAmount = cashoutAmountInput.value;   
 
 const balanceElement = document.getElementById("balance");
 const balance = balanceElement.innerText;
 
 const newBalance = Number(balance) - Number(cashoutAmount);
 if(newBalance < 0){
    alert("Invalid Amount");
    return;
 }
 const cashoutPinInput = document.getElementById("input-pin");
 const pin = cashoutPinInput.value;
 if ( pin === "1234"){
    alert("Cashout successful")
    balanceElement.innerText=newBalance;


 }
 else{
    alert("Invalid pin");
    return;
 }
})