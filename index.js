// // // window.addEventListener("scroll", function () {
// // //   const nav = document.getElementById("nav");
// // //   if (window.scrollY > 20) {
// // //     nav.classList.add("scrolled");
// // //   } else {
// // //     nav.classList.remove("scrolled");
// // //   }
// // // });

// // // function toggleMobileMenu() {
// // //   const mobileNav = document.getElementById("mobileNav");
// // //   mobileNav.classList.toggle("open");

// // //   const button = document.querySelector(".mobile-menu-button");
// // //   if (mobileNav.classList.contains("open")) {
// // //     button.innerHTML = '<i class="fas fa-times"></i>';
// // //   } else {
// // //     button.innerHTML = '<i class="fas fa-bars"></i>';
// // //   }
// // // }

// // // document.addEventListener("DOMContentLoaded", function () {
// // //   const animatedElements = document.querySelectorAll(
// // //     ".hero-content, .hero-image-container, .hero-stats"
// // //   );
// // //   animatedElements.forEach((el) => {
// // //     el.style.opacity = "1";
// // //     el.style.transform = "translateY(0)";
// // //   });
// // // });

// // // document.getElementById("contactForm").addEventListener("submit", function (e) {
// // //   e.preventDefault();

// // //   const submitBtn = document.getElementById("submitBtn");
// // //   const buttonText = document.getElementById("buttonText");

// // //   submitBtn.classList.add("loading");
// // //   submitBtn.disabled = true;

// // //   setTimeout(function () {
// // //     document.getElementById("contactForm").reset();

// // //     alert(
// // //       "Your message has been sent successfully! We will get back to you soon."
// // //     );

// // //     submitBtn.classList.remove("loading");
// // //     submitBtn.disabled = false;
// // //   }, 1500);
// // // });

// // const Navigation = (() => {
// //   const nav = document.getElementById("nav");
// //   const mobileNav = document.getElementById("mobile-nav");
// //   const mobileToggle = document.querySelector(".nav__mobile-toggle");
// //   const mobileIcon = mobileToggle.querySelector("i");

// //   const toggleMobileMenu = () => {
// //     const isOpen = mobileNav.classList.toggle("nav__mobile--open");
// //     mobileIcon.className = isOpen ? "fas fa-times" : "fas fa-bars";
// //     mobileToggle.setAttribute("aria-expanded", isOpen);
// //   };

// //   const handleScroll = () => {
// //     nav.classList.toggle("nav--scrolled", window.scrollY > 20);
// //   };

// //   return { toggleMobileMenu, handleScroll };
// // })();

// // // Scroll Module
// // const Scroll = (() => {
// //   const scrollToSection = (selector) => {
// //     try {
// //       const element = document.querySelector(selector);
// //       if (element) {
// //         element.scrollIntoView({ behavior: "smooth" });
// //         Navigation.toggleMobileMenu();
// //       }
// //     } catch (error) {
// //       console.error("Scroll error:", error);
// //     }
// //   };

// //   return { scrollToSection };
// // })();

// // // Animation Module
// // const Animation = (() => {
// //   const init = () => {
// //     const animatedElements = document.querySelectorAll(".animate-fade-in");
// //     animatedElements.forEach((el) => {
// //       el.style.opacity = "1";
// //       el.style.transform = "translateY(0)";
// //     });
// //   };

// //   return { init };
// // })();

// // // Form Module
// // const Form = (() => {
// //   const form = document.getElementById("contact-form");
// //   const submitBtn = form.querySelector(".contact__form-submit");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     submitBtn.classList.add("contact__form-submit--loading");
// //     submitBtn.disabled = true;

// //     try {
// //       // Simulate form submission
// //       await new Promise((resolve) => setTimeout(resolve, 1500));
// //       form.reset();
// //       alert(
// //         "Your message has been sent successfully! We will get back to you soon."
// //       );
// //     } catch (error) {
// //       console.error("Form submission error:", error);
// //       alert("An error occurred. Please try again later.");
// //     } finally {
// //       submitBtn.classList.remove("contact__form-submit--loading");
// //       submitBtn.disabled = false;
// //     }
// //   };

// //   return { handleSubmit };
// // })();

// // // Footer Module
// // const Footer = (() => {
// //   const init = () => {
// //     document.getElementById("current-year").textContent =
// //       new Date().getFullYear();
// //   };

// //   return { init };
// // })();

// // // Event Listeners
// // document.addEventListener("DOMContentLoaded", () => {
// //   Animation.init();
// //   Footer.init();
// // });

// // window.addEventListener("scroll", Navigation.handleScroll);

// // document.addEventListener("click", (e) => {
// //   const scrollTarget = e.target.closest("[data-scroll-to]");
// //   if (scrollTarget) {
// //     Scroll.scrollToSection(scrollTarget.dataset.scrollTo);
// //   }

// //   if (e.target.closest('[data-toggle="mobile-nav"]')) {
// //     Navigation.toggleMobileMenu();
// //   }
// // });

// // document
// //   .getElementById("contact-form")
// //   .addEventListener("submit", Form.handleSubmit);

// const Navigation = (() => {
//   const nav = document.getElementById("nav");
//   const mobileNav = document.getElementById("mobile-nav");
//   const mobileToggle = document.querySelector(".nav__mobile-toggle");
//   const mobileIcon = mobileToggle.querySelector("i");

//   const toggleMobileMenu = () => {
//     const isOpen = mobileNav.classList.toggle("nav__mobile--open");
//     mobileIcon.className = isOpen ? "fas fa-times" : "fas fa-bars";
//     mobileToggle.setAttribute("aria-expanded", isOpen);
//   };

//   const handleScroll = () => {
//     nav.classList.toggle("nav--scrolled", window.scrollY > 20);
//   };

//   return { toggleMobileMenu, handleScroll };
// })();

// // Scroll Module
// const Scroll = (() => {
//   const scrollToSection = (selector, isMobileLink) => {
//     try {
//       const element = document.querySelector(selector);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//         // Only toggle mobile menu if the link is a mobile link and the menu is open
//         if (
//           isMobileLink &&
//           document.querySelector(".nav__mobile.nav__mobile--open")
//         ) {
//           Navigation.toggleMobileMenu();
//         }
//       }
//     } catch (error) {
//       console.error("Scroll error:", error);
//     }
//   };

//   return { scrollToSection };
// })();

// // Animation Module
// const Animation = (() => {
//   const init = () => {
//     const animatedElements = document.querySelectorAll(".animate-fade-in");
//     animatedElements.forEach((el) => {
//       el.style.opacity = "1";
//       el.style.transform = "translateY(0)";
//     });
//   };

//   return { init };
// })();

// // Form Module
// const Form = (() => {
//   const form = document.getElementById("contact-form");
//   const submitBtn = form.querySelector(".contact__form-submit");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     submitBtn.classList.add("contact__form-submit--loading");
//     submitBtn.disabled = true;

//     try {
//       // Simulate form submission
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       form.reset();
//       alert(
//         "Your message has been sent successfully! We will get back to you soon."
//       );
//     } catch (error) {
//       console.error("Form submission error:", error);
//       alert("An error occurred. Please try again later.");
//     } finally {
//       submitBtn.classList.remove("contact__form-submit--loading");
//       submitBtn.disabled = false;
//     }
//   };

//   return { handleSubmit };
// })();

// // Footer Module
// const Footer = (() => {
//   const init = () => {
//     document.getElementById("current-year").textContent =
//       new Date().getFullYear();
//   };

//   return { init };
// })();

// // Event Listeners
// document.addEventListener("DOMContentLoaded", () => {
//   Animation.init();
//   Footer.init();
// });

// window.addEventListener("scroll", Navigation.handleScroll);

// document.addEventListener("click", (e) => {
//   const scrollTarget = e.target.closest("[data-scroll-to]");
//   if (scrollTarget) {
//     const isMobileLink =
//       scrollTarget.classList.contains("nav__mobile-item") ||
//       scrollTarget.classList.contains("nav__mobile-button");
//     Scroll.scrollToSection(scrollTarget.dataset.scrollTo, isMobileLink);
//   }

//   if (e.target.closest('[data-toggle="mobile-nav"]')) {
//     Navigation.toggleMobileMenu();
//   }
// });

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", Form.handleSubmit);





const Navigation = (() => {
  const nav = document.getElementById("nav");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileToggle = document.querySelector(".nav__mobile-toggle");
  const mobileIcon = mobileToggle.querySelector("i");

  const toggleMobileMenu = () => {
    const isOpen = mobileNav.classList.toggle("nav__mobile--open");
    mobileIcon.className = isOpen ? "fas fa-times" : "fas fa-bars";
    mobileToggle.setAttribute("aria-expanded", isOpen);

    // Animate mobile menu with GSAP
    if (isOpen) {
      gsap.fromTo(
        mobileNav,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(
        ".nav__mobile-item, .nav__mobile-button",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      );
    } else {
      gsap.to(mobileNav, { y: "-100%", opacity: 0, duration: 0.5, ease: "power2.in" });
    }
  };

  const handleScroll = () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 20);
  };

  return { toggleMobileMenu, handleScroll };
})();

// Scroll Module
const Scroll = (() => {
  const scrollToSection = (selector, isMobileLink) => {
    try {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Only toggle mobile menu if the link is a mobile link and the menu is open
        if (
          isMobileLink &&
          document.querySelector(".nav__mobile.nav__mobile--open")
        ) {
          Navigation.toggleMobileMenu();
        }
      }
    } catch (error) {
      console.error("Scroll error:", error);
    }
  };

  return { scrollToSection };
})();

// Animation Module
const Animation = (() => {
  const init = () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    gsap.fromTo(
      ".hero__content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".hero__image-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
    gsap.fromTo(
      ".hero__floating-card--top",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.4 }
    );
    gsap.fromTo(
      ".hero__floating-card--bottom",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.6 }
    );
    gsap.fromTo(
      ".hero__stat",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.8 }
    );

    // About Section Animations
    gsap.fromTo(
      ".about__content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__content",
          start: "top 80%",
        }
      }
    );
    gsap.fromTo(
      ".about__image-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__image-container",
          start: "top 80%",
        }
      }
    );
    gsap.fromTo(
      ".about__value-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about__values",
          start: "top 80%",
        }
      }
    );

    // Services Section Animations
    gsap.fromTo(
      ".services__header",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services__header",
          start: "top 80%",
        }
      }
    );
    gsap.fromTo(
      ".service__card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services__grid",
          start: "top 80%",
        }
      }
    );
    gsap.fromTo(
      ".services__cta",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services__cta",
          start: "top 80%",
        }
      }
    );

    // Contact Section Animations
    gsap.fromTo(
      ".contact__header",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__header",
          start: "top 80%",
        }
      }
    );
    gsap.fromTo(
      ".contact__info",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__info",
          start: "top 80%",
        }
      }
    );
    gsap.fromTo(
      ".contact__form",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__form",
          start: "top 80%",
        }
      }
    );
  };

  return { init };
})();

// Form Module
const Form = (() => {
  const form = document.getElementById("contact-form");
  const submitBtn = form.querySelector(".contact__form-submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitBtn.classList.add("contact__form-submit--loading");
    submitBtn.disabled = true;

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      form.reset();
      alert(
        "Your message has been sent successfully! We will get back to you soon."
      );
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      submitBtn.classList.remove("contact__form-submit--loading");
      submitBtn.disabled = false;
    }
  };

  return { handleSubmit };
})();

// Footer Module
const Footer = (() => {
  const init = () => {
    document.getElementById("current-year").textContent =
      new Date().getFullYear();
  };

  return { init };
})();

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  Animation.init();
  Footer.init();
});

window.addEventListener("scroll", Navigation.handleScroll);

document.addEventListener("click", (e) => {
  const scrollTarget = e.target.closest("[data-scroll-to]");
  if (scrollTarget) {
    const isMobileLink =
      scrollTarget.classList.contains("nav__mobile-item") ||
      scrollTarget.classList.contains("nav__mobile-button");
    Scroll.scrollToSection(scrollTarget.dataset.scrollTo, isMobileLink);
  }

  if (e.target.closest('[data-toggle="mobile-nav"]')) {
    Navigation.toggleMobileMenu();
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", Form.handleSubmit);