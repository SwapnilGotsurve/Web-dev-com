gsap.registerPlugin(ScrollTrigger);

  // Optional: set initial CSS so things don't "flash"


  // Left column
  gsap.from(".sec1l", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    immediateRender: false,      // <--- prevents render on load
    scrollTrigger: {
      trigger: ".sec1l",
      start: "top 80%",          // adjust to taste
      toggleActions: "play none none reverse",
      // markers: true,          // enable for debugging
    }
  });

  // Right column
  gsap.from(".sec1r", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    immediateRender: false,      // important for from()
    scrollTrigger: {
      trigger: ".sec1r",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.killTweensOf('.sec1l, .sec1r');
    document.querySelectorAll('.sec1l, .sec1r').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }
