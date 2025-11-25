gsap.registerPlugin(ScrollTrigger);

// ============= INDEX.HTML ANIMATIONS =============

// Hero Section - Slide Up on Load
// IMPORTANT: Use immediateRender: false so elements stay visible until animation starts
const tl = gsap.timeline();

const revealHero = (selector, config = {}) => {
  const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (!element || typeof gsap === 'undefined') return;

  element.style.opacity = '1';
  element.style.transform = 'none';

  const tween = gsap.from(element, {
    immediateRender: false,
    ...config
  });

  tween.eventCallback('onComplete', () => {
    gsap.set(element, { clearProps: 'opacity,transform' });
  });
};

tl.from('.hero-badge', {
  y: -20,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  immediateRender: false
}, 0)
  .from('.heading', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    immediateRender: false
  }, 0.05)
  .from('.para', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    immediateRender: false
  }, 0.2)
  .from('.btn-1', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    immediateRender: false
  }, 0.3)
  .from('.m2-btn', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    immediateRender: false
  }, 0.3);

// Section 2 - Cards slide up one after another when in viewport
// Use ScrollTrigger.batch for better grouped/staggered reveal of cards
if (gsap && ScrollTrigger) {
  ScrollTrigger.batch('.card-1', {
    interval: 0.1, // time window (in seconds) for batching
    batchMax: 6,   // maximum items to batch
    onEnter: batch => gsap.fromTo(batch, {y: 80, opacity: 0}, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.12
      
    }),
    start: 'top 85%',
     once:true,
    toggleActions: "play none none none"
  });
}

if (gsap && ScrollTrigger) {
  ScrollTrigger.batch('.f1', {
    interval: 0.1, // time window (in seconds) for batching
    batchMax: 6,   // maximum items to batch
    onEnter: batch => gsap.fromTo(batch, {y: 80, opacity: 0}, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.12
      
    }),
    start: 'top 85%',
     once:true,
    toggleActions: "play none none none"
  });
}

// gsap.from('.f1', {
//   y:200,
//   scrollTrigger:{
//     start:"top 80%",
//     opacity: 1,
//       duration: 1,
//       ease: 'power2.out',
//       stagger: 0.12
//   }
// })
// sectioin 3
revealHero('.text-ani', {
  y: 40,
  opacity: 0,
  duration: 0.45,
  ease: "power2.out",
  delay: 0.05
});

// Section 4 - Left column slides in from left
gsap.from(".sec1l ", {
  x: -200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  immediateRender: false,
  scrollTrigger: {
    trigger: ".sec1l",
    start: "top 80%",
    once:true,
    toggleActions: "play none none none"
  }
});

// Section 4 - Right column slides in from right
gsap.from(".sec1r", {
  x: 200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  immediateRender: false,
  scrollTrigger: {
    trigger: ".sec1r",
    start: "top 80%",
    once:true,
    toggleActions: "play none none none"
  }
});

// Section5 - Left column slides in from left
gsap.from(".sec2l ", {
  x: -200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  immediateRender: false,
  scrollTrigger: {
    trigger: ".sec2l",
    start: "top 80%",
    once:true,
    toggleActions: "play none none none"
  }
});

// Section 5 - Right column slides in from right
gsap.from(".sec2r", {
  x: 200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  immediateRender: false,
  scrollTrigger: {
    trigger: ".sec2r",
    start: "top 80%",
    once:true,
    toggleActions: "play none none none"
  }
});

// ============= ABOUT.HTML ANIMATIONS =============

// Hero title slides up
revealHero('.about-hero-title', {
  y: 40,
  opacity: 0,
  duration: 0.45,
  ease: "power2.out",
  delay: 0.05
});

// Subtitle slides up with delay
revealHero('.about-hero-subtitle', {
  y: 35,
  opacity: 0,
  duration: 0.45,
  ease: "power2.out",
  delay: 0.15
});

// Story section title slides up when in viewport
// gsap.from('.bg-\\[\\#ffffff34\\] h1', {
//   y: 60,
//   opacity:1,
//   duration: 0.8,
//   ease: "power2.out",
//   immediateRender: false,
//   scrollTrigger: {
//     trigger: '.bg-\\[\\#ffffff34\\] h1',
//     start: "top 85%",
//     toggleActions: "play none none reverse"
//   }
// });

// Values cards animate one by one
gsap.utils.toArray('.bg-\\[\\#000\\] > .grid > div').forEach((valueCard, index) => {
  gsap.from(valueCard, {
    y: 60,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    delay: index * 0.15,
    immediateRender: false,
    scrollTrigger: {
      trigger: valueCard,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

// Mission section - text from left, image from right
gsap.from('.bg-\\[\\#dfff98\\] > div:first-child', {
  x: -100,
  opacity: 0,
  duration: 0.9,
  ease: "power2.out",
  immediateRender: false,
  scrollTrigger: {
    trigger: '.bg-\\[\\#dfff98\\]',
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from('.bg-\\[\\#dfff98\\] > div:last-child', {
  x: 100,
  opacity: 0,
  duration: 0.9,
  ease: "power2.out",
  immediateRender: false,
  scrollTrigger: {
    trigger: '.bg-\\[\\#dfff98\\]',
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Stats cards slide up one by one
gsap.utils.toArray('.bg-\\[\\#ffffff34\\]').forEach((statCard, index) => {
  if (statCard.querySelector('p')) {
    gsap.from(statCard, {
      y: 60,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: index * 0.12,
      immediateRender: false,
      scrollTrigger: {
        trigger: statCard,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  }
});


// ============= COLLECTIONS.HTML ANIMATIONS =============

// Collections hero text
revealHero('.collections-hero-title', {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.1
});

revealHero('.collections-hero-subtitle', {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.3
});

// Product cards animate with stagger when in viewport
// Target only ACTUAL product card containers to avoid affecting nested content
if (gsap && ScrollTrigger) {
  // Initialize only the product cards (the outer .bg-[#ffffff34] divs that directly contain images and content)
  // Use a more specific selector to target only the grid item cards, not stat cards from other pages
  const productCards = gsap.utils.toArray('.grid > div.bg-\\[\\#ffffff34\\]');
  
  if (productCards.length > 0) {
    gsap.set(productCards, {y: 60, opacity: 0});
    
    ScrollTrigger.batch(productCards, {
      interval: 0.12,
      batchMax: 8,
      onEnter: batch => gsap.to(batch, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        overwrite: true,
        immediateRender: false
      }),
      start: 'top 85%'
    });
  }
}

// ============= CONTACT.HTML ANIMATIONS =============

// Contact hero text
revealHero('.contact-hero-title', {
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.1
});

revealHero('.contact-hero-subtitle', {
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.3
});

// Contact info cards slide up one by one
gsap.utils.toArray('.bg-\\[\\#ffffff15\\] > div').forEach((contactCard, index) => {
  gsap.from(contactCard, {
    y: 60,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    delay: index * 0.15,
    immediateRender: false,
    scrollTrigger: {
      trigger: contactCard,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

// Form slides up when in viewport
gsap.from('form', {
  y: 80,
  opacity: 0,
  duration: 0.9,
  ease: "power2.out",
  immediateRender: false,
  scrollTrigger: {
    trigger: 'form',
    start: "top 85%",
    toggleActions: "play none none none"
  }
});

// Map section title slides up
gsap.utils.toArray('section h1').forEach((title) => {
  const rect = title.getBoundingClientRect();
  if (rect.top > window.innerHeight) {
    gsap.from(title, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  }
});

// Map iframe slides up
gsap.from('iframe', {
  y: 80,
  opacity: 0,
  duration: 0.9,
  ease: "power2.out",
  immediateRender: false,
  scrollTrigger: {
    trigger: 'iframe',
    start: "top 85%",
    toggleActions: "play none none none"
  }
});

// ============= ACCESSIBILITY: Respect reduced motion =============
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.killTweensOf('*');
  document.querySelectorAll('*').forEach(el => {
    el.style.opacity = 1;
    el.style.transform = 'none';
  });
}

// ============= INFINITE TESTIMONIALS CAROUSEL =============
// Auto-scroll testimonials carousel infinitely
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('testimonialsCarousel');
  if (!carousel) return;

  // Clone all cards to create seamless infinite scroll
  const cards = Array.from(carousel.querySelectorAll('.testimonial-card'));
  
  // Clone cards multiple times for smooth infinite scroll
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
  });

  // Optional: Add small animation to testimonials when they enter viewport
  const testimonialCards = carousel.querySelectorAll('.testimonial-card');
  testimonialCards.forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 0.1,
      ease: 'power2.out',
      delay: index * 0.08,
      immediateRender: false,
      scrollTrigger: {
        trigger: carousel,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
});



// to detect current page 
