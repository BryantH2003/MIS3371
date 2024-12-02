function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

function clearForm() {
  document.getElementById("userForm").reset();
  deleteCookie("firstName");
  document.location.reload();
}

function saveUserData(event) {
  event.preventDefault();
  const firstName = document.forms["patient-form"]["firstName"].value;
  const rememberMe = document.forms["patient-form"]["rememberMe"].checked;

  if (rememberMe && firstName) {
    setCookie("firstName", firstName, 2);
  } else {
    deleteCookie("firstName");
  }
}
