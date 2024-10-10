const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (a) {
  if (!menu.contains(e.target) & !navbarNav.contains(a.target)) {
    navbarNav.classList.remove("active");
  }
});
