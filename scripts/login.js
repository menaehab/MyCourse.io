let data = localStorage.userData ? JSON.parse(localStorage.userData) : [];

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginForm = document.getElementById("loginForm");

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

function loginCheck(event) {
  event.preventDefault(); // Prevent form submission

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();
  let valid = true;

  // Validate email
  if (!email) {
    showError(loginEmail, "Email is required");
    valid = false;
  } else {
    clearError(loginEmail);
  }

  // Validate password
  if (!password) {
    showError(loginPassword, "Password is required");
    valid = false;
  } else if (password.length < 8) {
    showError(loginPassword, "Password must be at least 8 characters");
    valid = false;
  } else {
    clearError(loginPassword);
  }

  if (!valid) return;

  // Check user credentials
  if (data.length === 0) {
    showError(loginEmail, "No users found");
    return;
  }

  const user = data.find(
    (user) => user.registerEmail === email && user.registerPassword === password
  );
  if (user) {
    alert("Login successful");
    // Redirect logic goes here
  } else {
    showError(loginEmail, "Invalid email or password");
  }
}

loginForm.addEventListener("submit", loginCheck);
