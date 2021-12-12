gsap.from(".navbar", {
  y: "-100%",
  opacity: 0,
  duration: 1.2,
  ease: "bounce",
});
gsap.from(".img-thumbnail", {
  rotateY: 360,
  opacity: 0,
  duration: 1.5,
  delay: 1,
});
gsap.from(".display-4", {
  x: -50,
  opacity: 0,
  duration: 2,
  delay: 1.5,
  ease: "elastic",
});
gsap.to(".lead", {
  duration: 3.5,
  delay: 1.5,
  text: "Government Employees | Programmer",
});

AOS.init();
