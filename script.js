const hamburgerButton = document.querySelector(".hamburger-container");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerButton.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});
