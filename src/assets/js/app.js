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
      duration: 3,
      rotate: "90deg",
      left: "300%",
    });

    gsap.to(".loading__text, .loading__counter", {
      duration: 1,
      opacity: 0,
    });
    gsap.to("..loading__box", {
      duration: 2,
      height: "500px",
      borderRadius: "50%",
    });
    gsap.to("..loading__svg", {
      duration: 10,
      opacity: 1,
      rotate: "360deg",
    });

    gsap.to("..loading__box", {
      delay: 2,
      border: none,
      rotate: "360deg",
    });

    gsap.to("..loading", {
     delay:2,
     duration:2,
     background:"transparent",
     opacity:0.5
    });
  }
}, 20);
