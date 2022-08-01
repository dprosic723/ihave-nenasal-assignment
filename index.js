//IMAGES SWITCH
const buttons = document.querySelectorAll(".header__hero-item");
const heroImg = document.querySelector(".header__hero-visual img");
const heroVisual = document.querySelector(".header__hero-visual");
buttons.forEach((el) => {
  el.addEventListener("click", () => {
    heroVisual.classList.remove("active");
    setTimeout(() => {
      heroImg.src = el.dataset.src;
      heroVisual.classList.add("active");
    }, 200);
  });
});

//SLIDER
const tabsContainer = document.querySelector(".info__tabs");
const tabsStyles = window.getComputedStyle(tabsContainer, null);
let tabsContainerPadding = parseInt(
  tabsStyles.getPropertyValue("padding-inline")
);
const tabsContainerGap = parseInt(tabsStyles.getPropertyValue("gap"));

const slides = document.querySelectorAll(".info__slide");
const slidesBox = document.querySelector(".info__slides");

const tabs = document.querySelectorAll(".info__tab");
const firstTab = tabs[0];

const barHandle = document.querySelector(".info__bar-handle");

let barHandleWidth;

if (barHandle) {
  barHandle.style.width = `${
    firstTab.offsetWidth + tabsContainerPadding * 2
  }px`;
}

tabs.forEach((el) => {
  tabsContainerPadding = parseInt(
    tabsStyles.getPropertyValue("padding-inline")
  );
  el.addEventListener("click", () => {
    barHandleWidth = el.offsetWidth + tabsContainerPadding * 2;
    barHandle.style.width = `${barHandleWidth}px`;

    if (el.hasAttribute("data-first")) {
      slidesBox.classList.toggle("active");
      barHandle.style.left = "0px";
      barHandle.style.transform = "translateX(0)";

      setTimeout(() => {
        slides[0].classList.add("active");
        slides[1].classList.remove("active");
        slides[2].classList.remove("active");
        slidesBox.classList.toggle("active");
      }, 200);
    } else if (el.hasAttribute("data-second")) {
      barHandle.style.left = "50%";
      barHandle.style.transform = "translateX(-58%)";

      slidesBox.classList.toggle("active");

      setTimeout(() => {
        slides[1].classList.add("active");
        slides[0].classList.remove("active");
        slides[2].classList.remove("active");
        slidesBox.classList.toggle("active");
      }, 200);
    } else if (el.hasAttribute("data-third")) {
      barHandle.style.left = "100%";
      barHandle.style.transform = "translateX(-100%)";

      slidesBox.classList.toggle("active");

      setTimeout(() => {
        slides[2].classList.add("active");
        slides[1].classList.remove("active");
        slides[0].classList.remove("active");
        slidesBox.classList.toggle("active");
      }, 300);
    }
  });
});
//QUANTITY AND PRICE

const btnMinus = document.querySelector(".btn-minus");
const btnPlus = document.querySelector(".btn-plus");
const valueBox = document.querySelector(".header__order-number");
let value;
const priceBox = document.querySelector(".header__order-price");
const itemPrice = 49.99;

btnMinus.addEventListener("click", () => {
  value = parseInt(valueBox.textContent);
  if (value > 1) {
    value -= 1;
    valueBox.textContent = value;
  }
  priceBox.textContent = (itemPrice * value).toFixed(2) + " KM";
});
btnPlus.addEventListener("click", () => {
  value = parseInt(valueBox.textContent);
  if (value < 10) {
    {
      value += 1;
      valueBox.textContent = value;
    }
    priceBox.textContent = (itemPrice * value).toFixed(2) + " KM";
  }
});

valueBox.addEventListener("focusout", () => {
  value = parseInt(valueBox.textContent);
  if (value > 10) value = 10;
  if (value < 1) value = 1;
  if (Number.isNaN(value)) value = 1;
  valueBox.textContent = value;
  priceBox.textContent = (itemPrice * value).toFixed(2) + " KM";
});
//MOBILE NAVIGATION

const navMobile = document.querySelector(".nav__mobile");
const menuBtn = document.querySelector(".nav__menu-btn");
const links = document.querySelectorAll(".nav__mobile-link");
menuBtn.addEventListener("click", () => {
  navMobile.classList.toggle("active");
});

links.forEach((el) =>
  el.addEventListener("click", () => {
    navMobile.classList.remove("active");
  })
);

//NAVBAR BACKGROUND ON SCROLL

window.addEventListener("scroll", () => {
  let navBar = document.querySelector(".nav");
  if (window.scrollY > 50) navBar.classList.add("active");
  if (window.scrollY <= 50) navBar.classList.remove("active");
});
