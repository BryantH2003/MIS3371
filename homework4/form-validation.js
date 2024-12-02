// Validation for Name Fields if empty
function validateName(fieldName) {
  let firstname = document.forms["patient-form"][fieldName].value;
  let valildator = fieldName + "Validator";

  if (firstname.length < 1) {
    document.getElementById(valildator).innerHTML =
      '<p class="error-message">This field is required!</p>';
    document.getElementById(fieldName).style.backgroundColor = "#ffc8c8";
    return false;
  } else {
    document.getElementById(valildator).innerHTML = "";
    document.getElementById(fieldName).style.backgroundColor = "";
  }

  return true;
}

// Validation for Emmail fields if empty
function validateEmail(fieldName) {
  let email = document.forms["patient-form"][fieldName].value;
  document.forms["patient-form"][fieldName].value = email.toLowerCase();
  let valildator = fieldName + "Validator";

  if (email.length < 1) {
    document.getElementById(valildator).innerHTML =
      '<p class="error-message">This field is required!</p>';
    document.getElementById(fieldName).style.backgroundColor = "#ffc8c8";
    return false;
  } else {
    document.getElementById(valildator).innerHTML = "";
    document.getElementById(fieldName).style.backgroundColor = "";
  }

  return true;
}

// Validation for User ID field
function validateUserID() {
  let userID = document.forms["patient-form"]["userID"].value;
  let specialCharTest = /[^a-zA-Z0-9_-]/;

  if (userID.length < 1) {
    document.getElementById("userIDValidator").innerHTML =
      '<p class="error-message">This field is required!</p>';
    document.getElementById("userID").style.backgroundColor = "#ffc8c8";
    return false;
  } else {
    if (checkNumeric(userID[0])) {
      document.getElementById("userIDValidator").innerHTML =
        '<p class="error-message">The first character can not be a number!</p>';
      document.getElementById("userID").style.backgroundColor = "#ffc8c8";
      return false;
    } else if (userID.includes(" ")) {
      document.getElementById("userIDValidator").innerHTML =
        '<p class="error-message">User ID can not include spaces!</p>';
      document.getElementById("userID").style.backgroundColor = "#ffc8c8";
      return false;
    } else if (specialCharTest.test(userID)) {
      document.getElementById("userIDValidator").innerHTML =
        '<p class="error-message">Only dashes and underscores can be used!</p>';
      document.getElementById("userID").style.backgroundColor = "#ffc8c8";
      return false;
    } else {
      document.getElementById("userIDValidator").innerHTML = "";
      document.getElementById("userID").style.backgroundColor = "";
      return true;
    }
  }
}

// Validation for Date fields
function validateDate() {
  let today = new Date();
  let selectedDate = new Date(
    document.forms["patient-form"]["birthDate"].value
  );

  if (today.getFullYear() - selectedDate.getFullYear() > 120) {
    document.getElementById("birthDateValidator").innerHTML =
      '<p class="error-message">Your birthday can not be past 120 years!</p>';
    document.getElementById("birthDate").style.backgroundColor = "#ffc8c8";
    return false;
  } else if (selectedDate > today) {
    document.getElementById("birthDateValidator").innerHTML =
      '<p class="error-message">You can not select a date in the future!</p>';
    document.getElementById("birthDate").style.backgroundColor = "#ffc8c8";
    return false;
  } else {
    document.getElementById("birthDateValidator").innerHTML = "";
    document.getElementById("birthDate").style.backgroundColor = "";
    return true;
  }
}

// Validation for first password field
function validatePassword() {
  let password = document.forms["patient-form"]["password"].value;
  let userID = document.forms["patient-form"]["userID"].value;
  let firstName = document.forms["patient-form"]["firstName"].value;
  let uppercaseCheck = /[A-Z]/;
  let numberCheck = /[0-9]/;
  let specialCheck = /[$&+,:;=?@#|'<>.^*()%!-]/;

  if (password.length < 1) {
    document.getElementById("passwordValidator").innerHTML =
      '<p class="error-message">This field is required!</p>';
    document.getElementById("password").style.backgroundColor = "#ffc8c8";
    return false;
  } else if (!uppercaseCheck.test(password)) {
    document.getElementById("passwordValidator").innerHTML =
      '<p class="error-message">Your password requires an uppercase letter!</p>';
    document.getElementById("password").style.backgroundColor = "#ffc8c8";
    return false;
  } else if (!numberCheck.test(password)) {
    document.getElementById("passwordValidator").innerHTML =
      '<p class="error-message">Your password requires a number!</p>';
    document.getElementById("password").style.backgroundColor = "#ffc8c8";
    return false;
  } else if (!specialCheck.test(password)) {
    document.getElementById("passwordValidator").innerHTML =
      '<p class="error-message">Your password requires a special character!</p>';
    document.getElementById("password").style.backgroundColor = "#ffc8c8";
    return false;
  } else if (password == userID) {
    document.getElementById("passwordValidator").innerHTML =
      '<p class="error-message">Your password can not be the same as your User ID!</p>';
    document.getElementById("password").style.backgroundColor = "#ffc8c8";
    return false;
  } else if (password.includes(firstName)) {
    document.getElementById("passwordValidator").innerHTML =
      '<p class="error-message">Your password can not contain your name!</p>';
    document.getElementById("password").style.backgroundColor = "#ffc8c8";
    return false;
  } else {
    document.getElementById("passwordValidator").innerHTML = "";
    document.getElementById("password").style.backgroundColor = "";
    return true;
  }
}

// Validation for confirmation of password
function validateConfirmPassword() {
  let confirmPassword = document.forms["patient-form"]["confirmPassword"].value;
  let password = document.forms["patient-form"]["password"].value;

  if (confirmPassword.length < 1) {
    document.getElementById("confirmPasswordValidator").innerHTML =
      '<p class="error-message">This field is required!</p>';
    document.getElementById("confirmPassword").style.backgroundColor =
      "#ffc8c8";
    return false;
  } else if (password != confirmPassword) {
    document.getElementById("confirmPasswordValidator").innerHTML =
      '<p class="error-message">This your passwords must match!</p>';
    document.getElementById("confirmPassword").style.backgroundColor =
      "#ffc8c8";
    return false;
  } else {
    document.getElementById("confirmPasswordValidator").innerHTML = "";
    document.getElementById("confirmPassword").style.backgroundColor = "";
    return true;
  }
}

// Validation for state field
function validateState() {
  let state = document.forms["patient-form"]["state"].value;

  if (state.length < 1) {
    document.getElementById("stateValidator").innerHTML =
      '<p class="error-message">This field is required!</p>';
    document.getElementById("state").style.backgroundColor = "#ffc8c8";
    return false;
  } else {
    document.getElementById("stateValidator").innerHTML = "";
    document.getElementById("state").style.backgroundColor = "";
    return true;
  }
}

// Validation for city field if empty
function validateCity() {
  let city = document.forms["patient-form"]["city"].value;

  if (city.length < 1) {
    document.getElementById("cityValidator").innerHTML =
      '<p class="error-message">This field is required!</p>';
    document.getElementById("city").style.backgroundColor = "#ffc8c8";
    return false;
  } else {
    document.getElementById("cityValidator").innerHTML = "";
    document.getElementById("city").style.backgroundColor = "";
    return true;
  }
}

function validateZip() {
  let zipCode = document.forms["patient-form"]["zipCode"].value;

  if (zipCode.length < 1) {
    document.getElementById("zipCodeValidator").innerHTML =
      '<p class="error-message">This field is required!</p>';
    document.getElementById("zipCode").style.backgroundColor = "#ffc8c8";
    return false;
  } else {
    document.getElementById("zipCodeValidator").innerHTML = "";
    document.getElementById("zipCode").style.backgroundColor = "";
    return true;
  }
}

// Display slider input
function displayInput() {
  let sliderInput = document.forms["patient-form"]["healthSlider"].value;

  document.getElementById("sliderValue").innerHTML = sliderInput;
}

// Helper function to check if a character is a number or not
function checkNumeric(character) {
  if (character >= "0" && character <= "9") {
    return true;
  } else {
    return false;
  }
}

function validateForm(event) {
  if (
    validateName("firstName") &&
    validateName("lastName") &&
    validateEmail("email") &&
    validateUserID("userID") &&
    validatePassword("password") &&
    validateConfirmPassword("confirmPassword") &&
    validateDate("birthDate") &&
    validateZip("zipCode")
  ) {
    saveUserData(event);
    // window.location.href = "thank-you.html";
  } else {
    alert("Please correct your fields before submitting.");
  }
}
