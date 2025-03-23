document.addEventListener("DOMContentLoaded", function () {
  const savedData = JSON.parse(localStorage.getItem("userData"));
  if (savedData) {
    document.getElementById("firstName").value = savedData.firstName || "";
    document.getElementById("lastName").value = savedData.lastName || "";
    document.getElementById("headline").value = savedData.headline || "";
    document.getElementById("language").value = savedData.language || "English";
    document.getElementById("link").value = savedData.link || "";
  }
});

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const headline = document.getElementById("headline").value.trim();
    const language = document.getElementById("language").value;
    const link = document.getElementById("link").value.trim();

    if (!firstName) {
      document.getElementById("firstNameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("firstNameError").style.display = "none";
    }

    if (!lastName) {
      document.getElementById("lastNameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("lastNameError").style.display = "none";
    }

    if (!headline) {
      document.getElementById("headlineError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("headlineError").style.display = "none";
    }

    if (isValid) {
      const userData = {
        firstName,
        lastName,
        headline,
        language,
        link
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      const successAlert = document.getElementById("successAlert");
      successAlert.style.display = "block";

      setTimeout(() => {
        successAlert.style.display = "none";
      }, 3000);
    }
  });
