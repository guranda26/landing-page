function toggleBar() {
  const burgerMenu = document.getElementById("burger-menu");
  const mobileNav = document.getElementById("mobile-nav");
  if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      console.log("hello");
    });
  }
}

toggleBar();
