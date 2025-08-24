const pin = 1234;
const account = 12345678910;

function findElement(id) {
  return document.getElementById(id);
}
function getValue(id) {
  return parseInt(document.getElementById(id).value);
}
function getInnerText(id) {
  return document.getElementById(id).innerText;
}
function display(vissibleSection)
{
    findElement("add-money-section").classList.add("hidden");
    findElement("cash-out-section").classList.add("hidden");
    findElement("transfer-money-section").classList.add("hidden");
    findElement("bonus-section").classList.add("hidden");
    findElement("pay-bill-section").classList.add("hidden");
    findElement("transaction-section").classList.add("hidden");
    findElement(vissibleSection).classList.remove("hidden");
    findElement(vissibleSection).classList.add("block");

}
// add money features
findElement("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const bank = findElement("bank").value;
  const accountNumber = getValue("account-number");
  const pinNumber = getValue("pin-number");
  const addedAmount = getValue("add-amount");
  const currentAmountElement = findElement("current-amount");

  if (bank === "Select Bank") {
    alert("Please select a bank");
    return;
  }
  if (accountNumber !== account) {
    alert("Invalid account number");
    return;
  }
  if (pinNumber !== 1234) {
    alert("Invalid pin number");
    return;
  }
  if (isNaN(addedAmount)) {
    alert("You haven't entered any amount");
    return;
  }

  currentAmountElement.innerText = parseInt(getInnerText("current-amount")) + addedAmount;
  findElement("add-money-form").reset();
});


findElement("add-money-btn").addEventListener("touchstart", (e) => {
  e.preventDefault();
  const bank = findElement("bank").value;
  const accountNumber = getValue("account-number");
  const pinNumber = getValue("pin-number");
  const addedAmount = getValue("add-amount");
  const currentAmountElement = findElement("current-amount");

  if (bank === "Select Bank") {
    alert("Please select a bank");
    return;
  }
  if (accountNumber !== account) {
    alert("Invalid account number");
    return;
  }
  if (pinNumber !== 1234) {
    alert("Invalid pin number");
    return;
  }
  if (isNaN(addedAmount)) {
    alert("You haven't entered any amount");
    return;
  }

  currentAmountElement.innerText = parseInt(getInnerText("current-amount")) + addedAmount;
  findElement("add-money-form").reset();
});



// cash out features
findElement("withdraw-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const agentNumber = String(getValue("agent-number"));
  const pin = getValue("pin");
  const outAmount = getValue("out-amount");
  const currentAmountElement = findElement("current-amount");
  if (agentNumber.length !== 11) {
    alert("Invalid agent number");
    return;
  }
  if (pin !== 1234) {
    alert("Invalid pin number");
    return;
  }
  if (isNaN(outAmount)) {
    alert("You haven't entered any amount");
    return;
  }
  currentAmountElement.innerText = parseInt(getInnerText("current-amount")) - outAmount;
  findElement("cash-out-form").reset();
});



// toggle effect
findElement("addMoney-card-btn").addEventListener("click",()=>{
    display("add-money-section");
})
findElement("cashout-card-btn").addEventListener("click",()=>{
    display("cash-out-section");
})
findElement("transfer-card-btn").addEventListener("click",()=>{
    display("transfer-money-section");
})
findElement("bonus-card-btn").addEventListener("click",()=>{
    display("bonus-section");
})
findElement("payBill-card-btn").addEventListener("click",()=>{
    display("pay-bill-section");
})
findElement("transaction-card-btn").addEventListener("click",()=>{
    display("transaction-section");
})

document.getElementById("log-out").addEventListener("click", () => {
  window.location.href = "./index.html";
});
