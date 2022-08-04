const submitButton = document.querySelector("#submitButton");
const emailInput = document.querySelector("#emailInput");
const displayText = document.querySelector(".displayText");
var emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
submitButton.addEventListener("click", submit);

function submit(event) {
  event.preventDefault();
  if (emailInput.value.match(emailTest)) {
    emailInput.classList.add("red");
    displayText.textContent = "Check your email please";
  } else if (emailInput.value == "") {
    displayText.textContent = "Please put in an email address";
    emailInput.placeholder = "@email.example.com";
  } else {
    displayText.textContent = "Please put in a valid email address";
    emailInput.placeholder = "@email.example.com";
  }
}
