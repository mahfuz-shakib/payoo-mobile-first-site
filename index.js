// login button functionality
document.querySelector("#login").addEventListener("click", (e) => {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;
  const NumberValue = document.getElementById('mobile-number').value;
  const pinValue = document.getElementById('pin-number').value;
const mobileNumberValue = parseInt(NumberValue);
const pinNumberValue=parseInt(pinValue);
  if (mobileNumber === mobileNumberValue && pinNumber === pinNumberValue) {
    console.log('Successfully Login');
    window.location.href="./home.html";
  }else console.log('Login Failed - Invalid credential');
});
