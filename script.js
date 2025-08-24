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

findElement("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const bank = findElement("bank").value;
  const accountNumber = getValue("account-number");
  const pinNumber = getValue("pin-number");
  const addedAmount = getValue("add-amount");
  let currentAmountElement = findElement("current-amount");
  
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
  currentAmountElement.classList.add("font-extrabold text-lg");
  findElement("add-money-form").reset();
});

document.getElementById("log-out").addEventListener("click", () => {
  window.location.href = "./index.html";
});
