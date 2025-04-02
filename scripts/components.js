let navbar = document.getElementById("navbar");
let footer = document.getElementById("footer");
let newsLetter = document.getElementById("news-letter");

navbar.innerHTML = `
<nav class="navbar d-flex justify-content-between align-items-center">
        <!-- Left -->
        <div class="d-flex align-items-center">
            <a class="navbar-brand" href="#">
                <img src="imgs/Logo.png" alt="">
            </a>
            <div class="dropdown">
                <button class="btn navbar-browse dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Browse
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Page 1</a></li>
                    <li><a class="dropdown-item" href="#">Page 2</a></li>
                </ul>
            </div>
        </div>

        <!-- Search -->
        <div class="search-container  d-none d-md-flex">
            <input type="text" placeholder="Search for course">
            <i class="fas fa-search"></i>
        </div>

        <!-- Right in mid & large screens -->
        <div class="d-flex align-items-center nav-icons  d-none d-sm-flex">
            <i class="fas fa-shopping-cart"></i>
            <i class="fas fa-bell"></i>

            <!-- Avatar Dropdown -->
            <div class="dropdown">
                <img src="imgs/avatar.png" class="profile-img dropdown-toggle" data-bs-toggle="dropdown" alt="User">
                <div class="navbar-profile">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Right in small screens -->
        <div class="d-flex align-items-center nav-icons d-sm-none">
            <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                ☰
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu">
                <div class="offcanvas-header">
                    <div class="d-flex align-items-center gap-3">
                        <div class="offcanvas-profile">
                            <img src="imgs/avatar.png" class="rounded" alt="">
                        </div>
                        <h5 class="offcanvas-title display-4 m-0">Menu</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>

                </div>
                <div class="offcanvas-body">
                    <!-- Search Bar -->
                    <div class="small-search-container mb-4">
                        <input type="text" placeholder="Search for course">
                        <i class="fas fa-search"></i>
                    </div>

                    <!-- Navigation Items -->
                    <div class="navbar-group-list">
                        <div class="navbar-group-item p-2"><a href="#">Cart</a></div>
                        <div class="navbar-group-item p-2"><a href="#">Profile</a></div>
                        <div class="navbar-group-item p-2"><a href="#">Settings</a></div>
                        <div class="navbar-group-item p-2"><a href="#">Logout</a></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>`;
footer.innerHTML = `
 <footer class="text-center text-lg-start footer-color text-muted pt-1 mt-3">
        <!-- Section: Links  -->
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            <img src="./imgs/white-logo.png" alt="">
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolorem reiciendis voluptas
                            officiis quos.
                            Dolore id nobis iusto totam.
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            Courses
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Angular</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">React</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Vue</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Laravel</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            Instructors
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">John Doe</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Mark Smith</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Jane Mike</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Jack Jae</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            info@test.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
        </section>
        <!-- Section: Links  -->

        <!-- Section: Social media -->
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
            <!-- Left -->
            <div class="me-5 d-none d-lg-block">
                <span>Copyright © MyCourse.io 2025. All Rights Reserved</span>
            </div>
            <!-- Left -->

            <!-- Right -->
            <div>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-google"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <!-- Right -->
        </section>
        <!-- Section: Social media -->
    </footer>
`;
newsLetter.innerHTML = `
    <section id="news-letter">
        <div class="container my-4 text-center">
            <div class="row news-container">
                <div class="col-md-7">
                    <h3 class="text-start">Join and het amazing discount</h3>
                    <p class="text-start">Subscribe to our news letter and get 20% off</p>
                </div>
                <div class="col-md-5">
                    <div class="news-form d-flex justify-content-center">
                        <div class="news-input">
                            <input type="text" placeholder="Email Address">
                            <i class="fas fa-search"></i>
                        </div>
                        <button class="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
