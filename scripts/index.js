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
    rating: 3,
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

const trendingData = [
  {
    id: 1,
    name: "Python for Data Science",
    instructor: "Angela Yu",
    image: "./imgs/courses/course-5.png",
    description:
      "Get started with Python and learn how to use it for data science and machine learning.",
    rating: 4.8,
    price: 50.99,
    discounted_price: 40.99,
    reviewers: 2.5
  },
  {
    id: 2,
    name: "Mastering JavaScript",
    instructor: "David Wilson",
    image: "./imgs/courses/course-6.png",
    description:
      "Deep dive into JavaScript and master the language with real-world projects.",
    rating: 3.3,
    price: 39.99,
    discounted_price: 29.99,
    reviewers: 1.7
  },
  {
    id: 3,
    name: "Graphic Design Essentials",
    instructor: "Emily Carter",
    image: "./imgs/courses/course-7.png",
    description:
      "Learn the core principles of graphic design and create stunning visuals.",
    rating: 5,
    price: 35.99,
    discounted_price: 27.99,
    reviewers: 2.1
  },
  {
    id: 4,
    name: "AI & Machine Learning",
    instructor: "Andrew Ng",
    image: "./imgs/courses/course-8.png",
    description:
      "Explore the world of AI and Machine Learning with hands-on projects and real-world applications.",
    rating: 4,
    price: 59.99,
    discounted_price: 45.99,
    reviewers: 3.2
  },
  {
    id: 5,
    name: "Cyber Security Basics",
    instructor: "Ethan Hunt",
    image: "./imgs/courses/course-9.png",
    description:
      "Learn the fundamentals of cybersecurity and how to protect your digital assets.",
    rating: 4.2,
    price: 44.99,
    discounted_price: 34.99,
    reviewers: 1.5
  },
  {
    id: 6,
    name: "Digital Marketing Strategies",
    instructor: "Sophia Miller",
    image: "./imgs/courses/course-10.png",
    description:
      "Discover effective digital marketing techniques to grow your business online.",
    rating: 2.7,
    price: 38.99,
    discounted_price: 29.99,
    reviewers: 2.3
  },
  {
    id: 7,
    name: "Game Development with Unity",
    instructor: "James Anderson",
    image: "./imgs/courses/course-11.png",
    description:
      "Start your journey in game development and create interactive games using Unity.",
    rating: 3,
    price: 49.99,
    discounted_price: 39.99,
    reviewers: 1.9
  },
  {
    id: 8,
    name: "Full-Stack Web Development",
    instructor: "Olivia Brown",
    image: "./imgs/courses/course-12.png",
    description:
      "Master front-end and back-end technologies to become a full-stack web developer.",
    rating: 3.8,
    price: 55.99,
    discounted_price: 42.99,
    reviewers: 3
  }
];

const instructorsData = [
  {
    id: 1,
    name: "John Doe",
    job: "Film Maker",
    image: "./imgs/instructor/Instructor-1.png"
  },
  {
    id: 2,
    name: "Jane Smith",
    job: "Graphic Designer",
    image: "./imgs/instructor/instructor-2.png"
  },
  {
    id: 3,
    name: "Bob Johnson",
    job: "Web Developer",
    image: "./imgs/instructor/instructor-3.png"
  },
  {
    id: 4,
    name: "Emily Davis",
    job: "Photographer",
    image: "./imgs/instructor/instructor-4.png"
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
          <h4 class="mt-2 card-title">${course.name}</h4>
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

  const trendingCoursesContainer = document.querySelector(
    ".recommended-container"
  );

  trendingData.forEach((course) => {
    const trendingCard = `
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card p-3">
          <div class="card-img">
            <a href="#" class="card-btn">Show More</a>
            <img src="${course.image}" class="rounded-4 w-100" alt="${
      course.name
    }">
          </div>
          <h4 class="mt-2 card-title">${course.name}</h4>
          <h6 class="card-instructor"><i class="fa-solid fa-user"></i> 
          <span>${course.instructor}</span></h6>
          <p class="text-muted">${truncate(course.description, 60)}</p>
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
    trendingCoursesContainer.innerHTML += trendingCard;
  });

  const InstructorContainer = document.querySelector(".instructor-container");

  instructorsData.forEach((instructor) => {
    const InstructorCard = `
    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div class="instructor-card">
            <div class="image-container">
              <img src="${instructor.image}" alt="${instructor.name}">
              <div class="instructor-info">
                <h5>${instructor.name}</h5>
                <p>${instructor.job}</p>
              </div>
            </div>
          </div>
        </div>
  `;
    InstructorContainer.innerHTML += InstructorCard;
  });
});
