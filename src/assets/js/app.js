import gsap from "gsap";

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
      duration: 2,
      background: "transparent",
      opacity: 0.5,
      zIndex:1
    });
    gsap.to(".loading__svg", {
      delay: 2,
      duration: 100,
      rotate: "360deg",
    });
  }
}, 20);
