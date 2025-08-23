const pin = "1234";
const account = "12345678910";

document.getElementById("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const bank = document.getElementById("bank");
  const accountNumber = document.getElementById("account-number");
  const addedAmount = document.getElementById("add-amount");
  const pinNumber = document.getElementById("pin-number");
  let currentAmount = document.getElementById("current-amount");
  if(bank.value==="Select Bank")
  {
    alert("Please select a bank");
  }
  if (accountNumber.value!==account) {
    alert("Invalid account number");
    return;
  }
  if (pinNumber.value !== "1234") {
    alert("Invalid pin number");
    return;
  }
  if(isNaN(parseInt(addedAmount.value)))
  {
    alert("you haven't entered any amount");
    return;
  }
  
  currentAmount.innerText = parseInt(currentAmount.innerText) + parseInt(addedAmount.value);
  bank.value="Select Bank";
  accountNumber.value="";
  addedAmount.value="";
  pinNumber.value="";
});

document.getElementById('log-out').addEventListener('click',()=>{
    window.location.href="./index.html";
})
