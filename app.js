gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const section1Timeline = gsap.timeline()

section1Timeline.from('.content div h1 span:first-child', {
  x: '-50vw'
}).from('.content div h1 span:last-child', {
  x: '100vw'
}, '<').from('.content div p', {
  rotation: 90,
  transformOrigin: "top left",
  opacity: 0
}).from('.content img', {
  y: '100vh'
});

const section2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top top",
    scrub: true,
    pin: true
  }
})
section2Timeline.from('.section2 div h2 span', {
  y: '-100vh',
  stagger: 0.2,
}).from('.section2 div p', {
  scaleX: 0,
  opacity: 0
})

const horizontalSections = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    scrub: true,
    pin: true
  }
})

const offset = window.innerWidth + 80;

horizontalSections.from('.section3 div h2', {
  x: '-100vw',
  scale: 18,
  opacity: 0,
}).fromTo('.section3 div p span', {
  y: '100vh',
}, {
  y:0,
  backgroundColor: 'white',
  color: 'black',
  stagger: 0.2,
}).to('.horizontal-sections', {
  x: `-${offset}px`,
}).from('.section4 div .portfolio-item', {
  x: '100vw',
  opacity: 0,
  stagger: 0.2,
}, '<')

const section5Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top top",
    scrub: true,
    pin: true
  }
})

const h2 = document.querySelector(".section5 div h2");
h2.innerHTML = h2.textContent
  .split("")
  .map(char => `<span>${char === " " ? "&nbsp;" : char}</span>`)
  .join("");

section5Timeline.from('.section5 div h2 span', {
  y: '-100vh',
  opacity: 0,
  stagger: 0.2,
}).from('.section5 div p', {
  y: '10vh',
  opacity: 0,
}).from('.section5 div button', {
  scale: 0
}).from('.section5', {
  backgroundPositionX: 'calc(100% + 300px)'
}).to('.section5', {
  backgroundColor: 'black'
}, '<')