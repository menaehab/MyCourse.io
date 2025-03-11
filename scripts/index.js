const recommendedData = [
  {
    id: 1,
    name: "Vue js Scratch Course",
    instructor: "Mosh Hamedani",
    image: "./imgs/courses/course-1.png",
    description:
      "More than 8yr Experience as Illustrator. Learn how to become a professional Illustrator Now...",
    rating: 3.7,
    price: 32.99,
    discounted_price: 24.99,
    reviewers: 1.2
  },
  {
    id: 2,
    name: "UI Design For Beginners",
    instructor: "John Smith",
    image: "./imgs/courses/course-2.png",
    description: "Learn how to make web applications with Vue.js Framework.",
    rating: 4.5,
    price: 42.99,
    discounted_price: 30.99,
    reviewers: 1.8
  },
  {
    id: 3,
    name: "Mobile Dev React Native",
    instructor: "Mark Ross",
    image: "./imgs/courses/course-3.png",
    description:
      "More than 8yr Experience as Illustrator. Learn how to become a professional Illustrator Now...",
    rating: 2.5,
    price: 20.5,
    discounted_price: 15.99,
    reviewers: 0.9
  },
  {
    id: 4,
    name: "Website Dev From Zero",
    instructor: "Mike Tyson",
    image: "./imgs/courses/course-4.png",
    description:
      "More than 8yr Experience as Illustrator. Learn how to become a professional Illustrator Now...",
    rating: 4.5,
    price: 25.22,
    discounted_price: 20.99,
    reviewers: 1.9
  }
];

const stars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    '<i class="fa-solid fa-star text-warning"></i>'.repeat(fullStars) +
    '<i class="fa-solid fa-star-half-alt text-warning"></i>'.repeat(halfStar) +
    '<i class="fa-regular fa-star text-warning"></i>'.repeat(emptyStars)
  );
};

const truncate = (text, length) => {
  return text.length > length ? text.substring(0, length - 3) + "..." : text;
};

document.addEventListener("DOMContentLoaded", () => {
  const categoriesSwiper = new Swiper(".categories-swiper", {
    loop: true,
    spaceBetween: 15,
    breakpoints: {
      320: { slidesPerView: 3 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
      1440: { slidesPerView: 8 }
    }
  });

  const recommendedWrapper = document.querySelector(
    ".recommended-swiper .swiper-wrapper"
  );

  recommendedData.forEach((course) => {
    const recommendedCard = `
      <div class="swiper-slide">
        <div class="card p-3">
        <div class="card-img">
        <a href="#" class="card-btn">Show More</a>
        <img src="${course.image}" class="rounded-4 w-100" alt="${course.name}">
          </div>
          <h4 class="mt-2">${course.name}</h4>
          <h6 class="card-instructor"><i class="fa-solid fa-user"></i> 
          <span>${course.instructor}</span></h6>
          <p class="text-muted">${truncate(course.description, 80)}</p>
          <div class="d-flex align-items-center">
            <div class="card-stars">${stars(course.rating)}</div>
            <span class="ms-2 text-muted">(${course.reviewers}K)</span>
          </div>
          <div class="mt-2">
            <span class="discounted-price fw-bold">$${
              course.discounted_price
            }</span>
            <span class="original-price text-decoration-line-through text-muted">$${
              course.price
            }</span>
          </div>
        </div>
      </div>
    `;
    recommendedWrapper.innerHTML += recommendedCard;
  });

  new Swiper(".recommended-swiper", {
    loop: true,
    spaceBetween: 15,
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1440: { slidesPerView: 4 }
    }
  });
});
