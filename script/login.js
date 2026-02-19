document.getElementById("login-btn").addEventListener("click",function(){

const numberInput=document.getElementById("input-number");
const contactNumber=numberInput.value;

const inputPin=document.getElementById("input-pin");
const pin=inputPin.value;
console.log(pin);
if(contactNumber=="01782738446" && pin==1234){
    alert("log-in successful");
    window.location.assign("/home.html")
  }

else{
    alert("login failed")
    return;
}
});