const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileHeader = document.querySelector(".header-mobile");
const hero = document.querySelector(".hero");
const header = document.querySelector(".header");
const message = document.querySelector(".message");

menuIcon.onclick = () => mobileHeaderFun();
closeIcon.onclick = () => mobileHeaderFun();

function mobileHeaderFun() {
  mobileHeader.classList.toggle("active");
}

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  console.log(window.scrollY);
  if (scrollY >= 66) {
    header.classList.add("active");
    hero.classList.add("active");
    message.classList.add("active");
  } else if (scrollY < 66) {
    header.classList.remove("active");
    hero.classList.remove("active");
    message.classList.remove("active");
  }
});
