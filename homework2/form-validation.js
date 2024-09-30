// Validation for First Name field
function validateFirstName () {
    let firstname = document.forms["patient-form"]["firstname"].value;
    
    if (firstname.length < 1) {
        document.getElementById("firstNameValidator").innerHTML = '<p class="error-message">This field is required!</p>';
        document.getElementById("firstName").style.backgroundColor = "#ffc8c8"
    } else if (firstname.length > 30) {
        document.getElementById("firstNameValidator").innerHTML = '<p class="error-message">Too many characters!</p>';
        document.getElementById("firstName").style.backgroundColor = "#ffc8c8"
    } else {
        document.getElementById("firstNameValidator").innerHTML = '';
        document.getElementById("firstName").style.backgroundColor = ""
    }
    
}

function validateForm () {
    
}