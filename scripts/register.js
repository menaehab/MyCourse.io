let data = localStorage.userData ? JSON.parse(localStorage.userData) : [];

const registerForm = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("registerEmail");
const passwordInput = document.getElementById("registerPassword");

function showError(input, message) {
  input.classList.add("error");
  let errorMsg = input.nextElementSibling;
  if (!errorMsg || !errorMsg.classList.contains("error-message")) {
    errorMsg = document.createElement("p");
    errorMsg.classList.add("error-message");
    input.after(errorMsg);
  }
  errorMsg.textContent = message;
}

function clearError(input) {
  input.classList.remove("error");
  let errorMsg = input.nextElementSibling;
  if (errorMsg && errorMsg.classList.contains("error-message")) {
    errorMsg.remove();
  }
}

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = nameInput.value.trim();
  const registerEmail = emailInput.value.trim();
  const registerPassword = passwordInput.value.trim();
  let valid = true;

  // Name validation
  if (!username) {
    showError(nameInput, "Name is required");
    valid = false;
  } else {
    clearError(nameInput);
  }

  // Email validation
  if (!registerEmail) {
    showError(emailInput, "Email is required");
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(registerEmail)) {
    showError(emailInput, "Enter a valid email");
    valid = false;
  } else {
    clearError(emailInput);
  }

  // Password validation
  if (!registerPassword) {
    showError(passwordInput, "Password is required");
    valid = false;
  } else if (registerPassword.length < 8) {
    showError(passwordInput, "Password must be at least 8 characters");
    valid = false;
  } else {
    clearError(passwordInput);
  }

  // Check if email already exists
  if (data.some((user) => user.registerEmail === registerEmail)) {
    showError(emailInput, "Email is already registered");
    valid = false;
  }

  if (!valid) return;

  // Store user data
  const userData = { username, registerEmail, registerPassword };
  data.push(userData);
  localStorage.setItem("userData", JSON.stringify(data));

  alert(`Welcome to our website, ${username}`);
  window.location.href = "./loginpage/login.html";
});
