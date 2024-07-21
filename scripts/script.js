const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navigation__links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
