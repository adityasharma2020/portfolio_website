import gsap from "gsap";
import Swiper,{pagination} from "swiper";
import { reviews } from "./data";

const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");
let c = 0;

let barInterval = setInterval(() => {
  bar.style.width = c + "%";
  counter_num.innerText = c + "%";
  c++;
  if (c === 101) {
    clearInterval(barInterval);

    gsap.to(".loading__bar", {
      duration: 1.5,
      rotate: "90deg",
      left: "300%",
    });

    gsap.to(".loading__text, .loading__counter", {
      duration: 1,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1.4,
      height: "57vh",
      borderRadius: "50%",
    });
    gsap.to(".loading__svg", {
      duration: 10,
      opacity: 1,
      rotate: "360deg",
    });

    gsap.to(".loading__box", {
      delay: 1.5,
      border: "none",
    });
    gsap.to(".loading", {
      delay: 1.5,
      zIndex: 1,
    });

    gsap.to(".loading", {
      delay: 1.5,
      duration: 2,
      opacity: 0.5,
      background: "transparent",
    });
    gsap.to(".loading__svg", {
      delay: 2,
      duration: 100,
      rotate: "360deg",
    });
  }
}, 20);

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints:{
    850:{
      slidesPerView:2,
    },
    1400:{
      slidesPerView:3
    },
    1900:{
      slidesPerView:4
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper_container = document.querySelector(".swiper-wrapper");
reviews.map((review) => {
  //this html is basically what we first hard coded , but now we are doing it with js and , finally we minify our html to look more cleaner.
  let template = `<div class="swiper-slide"><div class="review"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path><path d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path></g></svg><div class="review__card"><div class="review__topborder"></div><div class="review__text"><span>${review.review.substring(
    0,
    1
  )}</span>${review.review.substring(1, review.review.length)}</div><img src="${
    review.image
  }" alt="" class="review__img"><div class="review__profile"><span>${
    review.name
  }</span><span>${review.position}</span></div></div></div></div>`;

  //adding  the new reviews to swiper_container
  swiper_container.innerHTML += template;
});
