document.addEventListener("DOMContentLoaded", function () {

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const headlineInput = document.getElementById("headline");
    const languageSelect = document.getElementById("language");
    const linkInput = document.getElementById("link");
    const saveButton = document.querySelector(".save-btn");
    const profilePic = document.querySelector(".profile-pic-big");

    firstNameInput.value = localStorage.getItem("firstName") || "";
    lastNameInput.value = localStorage.getItem("lastName") || "";
    headlineInput.value = localStorage.getItem("headline") || "";
    languageSelect.value = localStorage.getItem("language") || "English";
    linkInput.value = localStorage.getItem("link") || "";

    saveButton.addEventListener("click", function (event) {
        event.preventDefault()

        localStorage.setItem("firstName", firstNameInput.value);
        localStorage.setItem("lastName", lastNameInput.value);
        localStorage.setItem("headline", headlineInput.value);
        localStorage.setItem("language", languageSelect.value);
        localStorage.setItem("link", linkInput.value);

        alert("✅ Data saved successfully!");
    });

    profilePic.addEventListener("click", function () {
        const newPic = prompt("Enter the URL of your new profile picture:");
        if (newPic) {
            profilePic.src = newPic;
            localStorage.setItem("profilePic", newPic);
        }
    });

    profilePic.src = localStorage.getItem("profilePic") || "images/profile.jpg";
});
