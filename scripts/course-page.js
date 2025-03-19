function toggleSection(sectionId, element) {
    const section = document.getElementById(sectionId);
    const arrow = element.querySelector('.arrow');
    const allSections = document.querySelectorAll('.curriculum-list');
    const allArrows = document.querySelectorAll('.arrow');

    // Collapse all sections except the one being toggled
    allSections.forEach((sec, index) => {
        if (sec !== section) {
            sec.style.maxHeight = null;
            allArrows[index].textContent = '▶';
        }
    });

    // Toggle the selected section
    if (section.style.maxHeight) {
        section.style.maxHeight = null;
        arrow.textContent = '▶';
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
        arrow.textContent = '▼';
    }
}

// Initialize all sections to be collapsed
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.curriculum-list').forEach(section => {
        section.style.maxHeight = null;
    });
});

// load more reviews

document.getElementById('loadMoreReviews').addEventListener('click', function(event) {
    event.preventDefault();
    const reviewsContainer = document.querySelector('#reviews .row');
    const newReviews = generateRandomReviews(3); // Generate 3 random reviews
    newReviews.forEach(review => {
        reviewsContainer.appendChild(review);
    });
});

function generateRandomReviews(count) {
    const names = ["Abdelrahman Yahia","Mohamed","Adham", "Ali", "Ahmed","John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis", "David Wilson", "Ella Martinez", "Frank Garcia", "Grace Rodriguez", "Henry Lopez", "Isabella Perez", "Jack Adams", "Katie Scott", "Liam Green", "Mia Evans", "Noah King", "Olivia Baker", "Peter Hill", "Quinn Young", "Rose Lee", "Samuel Reed", "Tina Hall", "Umar Morris", "Victoria Rivera", "William Ward", "Xavier Cooper", "Yara Morgan", "Zoe Cox"];
    const dates = ["May 10, 2023", "June 15, 2023", "July 20, 2023", "August 25, 2023", "September 30, 2023", "October 5, 2023", "November 10, 2023", "December 15, 2023", "Today", "Yesterday", "2 days ago", "3 days ago", "4 days ago", "5 days ago", "6 days ago", "1 week ago", "2 weeks ago", "3 weeks ago", "1 month ago", "2 months ago", "3 months ago", "4 months ago", "5 months ago", "6 months ago", "1 year ago", "2 years ago", "3 years ago", "4 years ago", "5 years ago", "6 years ago"];
    const texts = [
        "This course was very informative and well-structured.",
        "I learned a lot from this course. Highly recommend!",
        "The instructor was very knowledgeable and engaging.",
        "Great course! I feel much more confident in my skills now.",
        "The content was clear and easy to follow. Excellent course!",
        "The course was well-organized and easy to navigate.",
        "I enjoyed the interactive sessions and practical examples.",
        "The course provided valuable insights and real-world applications.",
        "The instructor's explanations were clear and concise.",
        "The course was well-organized and easy to navigate."
    ];
    const avatars = ["imgs/profile-pics/avatar.jpg", "imgs/profile-pics/avatar1.jpg", "imgs/profile-pics/avatar2.jpg", "imgs/profile-pics/avatar3.jpg", "imgs/profile-pics/avatar4.jpg", "imgs/profile-pics/avatar5.jpg", "imgs/profile-pics/avatar6.jpg", "imgs/profile-pics/avatar7.png", "imgs/profile-pics/avatar8.jpg", "imgs/profile-pics/avatar9.jpg", "imgs/profile-pics/avatar10.jpg", "imgs/profile-pics/avatar11.jpg", "imgs/profile-pics/avatar12.jpg", "imgs/profile-pics/avatar13.jpg", "imgs/profile-pics/avatar14.png", "imgs/profile-pics/avatar15.png", "imgs/profile-pics/Mask-1.jpg", "imgs/profile-pics/Mask-2.jpg", "imgs/profile-pics/Mask.png", "imgs/profile-pics/Square.jpg"];

    const reviews = [];
    for (let i = 0; i < count; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const date = dates[Math.floor(Math.random() * dates.length)];
        const text = texts[Math.floor(Math.random() * texts.length)];
        const avatar = avatars[Math.floor(Math.random() * avatars.length)];

        const reviewCard = document.createElement('div');
        reviewCard.className = 'col-md-12';
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