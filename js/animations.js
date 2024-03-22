console.clear();

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  scroller: "[data-scroll-container]",
  markers: false,
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,

  mobile: {
    breakpoint: 0,
    smooth: true,
  },
  tablet: {
    breakpoint: 0,
    smooth: true,
  },
});

