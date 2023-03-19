const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".navigation");

openNav.addEventListener("click", function () {
  nav.style.display = "block";
});

closeNav.addEventListener("click", function () {
  nav.style.display = "none";
});

// Q&a
const questions = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));
questions.forEach((q) => {
  q.addEventListener("click", function () {
    for (let i = 0; i < questions.length; i++) {
      questions[i].classList.remove("active");
      answers[i].classList.add("hide");
    }
    this.classList.add("active");
    this.nextElementSibling.classList.remove("hide");
  });
});

// reviews
const bullets = Array.from(document.querySelectorAll(".bullet"));
const reviews = Array.from(document.querySelectorAll(".review"));
bullets.forEach((b) => {
  b.addEventListener("click", function () {
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove("active");
    }
    reviews.forEach((review) => {
      if (this.id == review.dataset.id) {
        review.classList.remove("hide");
      } else {
        review.classList.add("hide");
      }
    });
    this.classList.add("active");
  });
});

// portfolio
const categories = Array.from(document.querySelectorAll(".categories span"));
const projects = Array.from(document.querySelectorAll(".project"));
categories.forEach((btn) => {
  btn.addEventListener("click", function () {
    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.remove("active");
    }
    projects.forEach((project) => {
      if (this.id == project.dataset.id && this.id != "all") {
        project.classList.remove("hide");
      } else if (this.id == "all") {
        project.classList.remove("hide");
      } else {
        project.classList.add("hide");
      }
    });
    this.classList.add("active");
  });
});

// go uo
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function () {
  if (this.scrollY < 300) {
    goUp.style.opacity = "0";
  } else if (this.scrollY >= 300) {
    goUp.style.opacity = "1";
  }
});
