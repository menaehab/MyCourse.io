function toggleSection(sectionId, element) {
  const section = document.getElementById(sectionId);
  const arrow = element.querySelector(".arrow");
  const allSections = document.querySelectorAll(".curriculum-list");
  const allArrows = document.querySelectorAll(".arrow");

  // Collapse all sections except the one being toggled
  allSections.forEach((sec, index) => {
    if (sec !== section) {
      sec.style.maxHeight = null;
      allArrows[index].classList.remove("fa-chevron-down");
      allArrows[index].classList.add("fa-chevron-right");
    }
  });

  // Toggle the selected section
  if (section.style.maxHeight) {
    section.style.maxHeight = null;
    arrow.classList.remove("fa-chevron-down");
    arrow.classList.add("fa-chevron-right");
  } else {
    section.style.maxHeight = section.scrollHeight + "px";
    arrow.classList.remove("fa-chevron-right");
    arrow.classList.add("fa-chevron-down");
  }
}

// Initialize all sections to be collapsed
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".curriculum-list").forEach((section) => {
    section.style.maxHeight = null;
  });

  document.querySelectorAll(".arrow").forEach((arrow) => {
    arrow.classList.add("fa-chevron-right");
  });
});

// load more reviews
document
  .getElementById("loadMoreReviews")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const reviewsContainer = document.querySelector("#reviews .row");
    const button = event.target;

    if (button.dataset.expanded === "true") {
      document
        .querySelectorAll(".extra-reviews-group")
        .forEach((group) => group.remove());

      button.textContent = "Show more";
      button.dataset.expanded = "false";
    } else {
      const newReviewsGroup = document.createElement("div");
      newReviewsGroup.classList.add("extra-reviews-group");

      const newReviews = generateRandomReviews(3);
      newReviews.forEach((review) => {
        newReviewsGroup.appendChild(review);
      });

      reviewsContainer.appendChild(newReviewsGroup);

      button.textContent = "Show less";
      button.dataset.expanded = "true";
    }
  });

function generateRandomReviews(count) {
  const names = [
    "Liam",
    "Noah",
    "Ethan",
    "Olivia",
    "Emma",
    "Logan",
    "Ava",
    "Alice",
    "Natalie"
  ];
  const dates = [
    "May 10, 2023",
    "June 15, 2023",
    "Today",
    "Yesterday",
    "1 week ago"
  ];
  const texts = [
    "This course was very informative and well-structured.",
    "I learned a lot from this course. Highly recommend!",
    "Great course! I feel much more confident in my skills now.",
    "The instructor is very knowledgeable and explains concepts well.",
    "I would recommend this course to anyone who wants to learn about the topic."
  ];
  const avatars = [
    "imgs/profile-pics/avatar.jpg",
    "imgs/profile-pics/avatar1.jpg",
    "imgs/profile-pics/avatar2.jpg",
    "imgs/profile-pics/avatar3.jpg",
    "imgs/profile-pics/avatar4.jpg",
    "imgs/profile-pics/avatar5.jpg",
    "imgs/profile-pics/avatar6.jpg"
  ];

  const reviews = [];
  for (let i = 0; i < count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const date = dates[Math.floor(Math.random() * dates.length)];
    const text = texts[Math.floor(Math.random() * texts.length)];
    const avatar = avatars[Math.floor(Math.random() * avatars.length)];

    const reviewCard = document.createElement("div");
    reviewCard.className = "col-md-12";
    reviewCard.innerHTML = `
              <div class="review-card d-flex align-items-start p-3">
                  <img src="${avatar}" alt="User Profile" class="review-avatar">
                  <div class="review-content ms-3">
                      <h4>${name}</h4>
                      <p class="review-date">${date}</p>
                      <p>${text}</p>
                  </div>
              </div>
          `;
    reviews.push(reviewCard);
  }
  return reviews;
}
