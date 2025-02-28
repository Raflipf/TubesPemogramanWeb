document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  function showSlide(n) {
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
  }

  nextButton.addEventListener("click", () => {
    index++;
    showSlide(index);
  });

  prevButton.addEventListener("click", () => {
    index--;
    showSlide(index);
  });
  showSlide(index);
});
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("closed");
}
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
