// If the user did not fill out the box, prompt ('Oops! Please add your email!')
// Check the format of the email once the user is clicking on the Request Access button
// If email not correct : prompt ('Oops! Please check your email!')
// Use regular expression ?

function checkEmailFormat(e) {
  e.preventDefault();
  let inputEmail = document.getElementById("email");
  let email = inputEmail.value;
  let errorMessage = document.getElementById("message-error");
  let emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Values initiatlization to 0 or empty
  errorMessage.textContent = "";
  inputEmail.value = "";

  if (!email) {
    errorMessage.textContent = "Oops! Please add your email";
  } else if (!email.match(emailRegExp)) {
    errorMessage.textContent = "Oops! Please check your email";
  }
}

//innerHTML : if you have HTML in the string

const button = document.getElementById("submission");
button.addEventListener("click", checkEmailFormat);
