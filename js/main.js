(() => {
  const hanmburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = document.querySelector(".close-nav-menu");

  hanmburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click", hideNavMenu);
  function showNavMenu() {
    navMenu.classList.toggle("open");
    // bodyScrollingToggle();
  }
  function hideNavMenu() {
    navMenu.classList.remove("open");
    fadeOutEffect();
    // bodyScrollingToggle();
  }

  function fadeOutEffect() {
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() => {
      document.querySelector(".fade-out-effect").classList.remove("active");
    }, 300);
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item")) {
      // console.log(e.target.hash);
      if (e.target.hash !== "") {
        e.preventDefault();
        const hash = e.target.hash;
        document.querySelector(".section.active").classList.add("hide");
        document.querySelector(".section.active").classList.remove("active");

        document.querySelector(hash).classList.add("active");
        document.querySelector(hash).classList.remove("hide");

        navMenu
          .querySelector(".active")
          .classList.add("outer-shadow", "hover-in-shadow");

        navMenu
          .querySelector(".active")
          .classList.remove("active", "inner-shadow");
        e.target.classList.add("active", "inner-shadow");
        e.target.classList.remove("outer-shadow", "hover-in-shadow");
        hideNavMenu();
      }
    } else {
      // console.log("not contains");
    }
  });
})();
// (() => {
//   const aboutSection = document.querySelector(".about-section"),
//     tabsContainer = document.querySelector(".about-tabs");

//   tabsContainer.addEventListener("click", (e) => {
//     if (
//       e.target.classList.contains("tab-item") &&
//       !e.target.classList.contains("active")
//     ) {
//       const target = e.target.getAttribute("data-target");
//       tabsContainer
//         .querySelector(".active")
//         .classList.remove("outer-shadow", "active");
//       e.target.classList.add("active", "outer-shadow");
//       aboutSection
//         .querySelector(".tab-content.active")
//         .classList.remove("active");
//       aboutSection.querySelector(target).classList.add("active");
//     }
//   });
// })();

// Portfolio Popup

// (() => {
//   const filterContainer = document.querySelector(".portfolio-filter"),
//     portfolioItemsContainer = document.querySelector(".portfolio-items"),
//     portfolioItems = document.querySelectorAll(".portfolio-item"),
//     popup = document.querySelector(".portfolio-popup"),
//     prevBtn = popup.querySelector(".pp-prev"),
//     nextBtn = popup.querySelector(".pp-next"),
//     closeBtn = popup.querySelector(".pp-close"),
//     projectDetailsContainer = popup.querySelector(".pp-details"),
//     projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

//   let itemIndex, slideIndex, screenshots;

//   filterContainer.addEventListener("click", (e) => {
//     if (
//       e.target.classList.contains("filter-item") &&
//       !e.target.classList.contains("active")
//     ) {
//       filterContainer
//         .querySelector(".active")
//         .classList.remove("outer-shadow", "active");
//       e.target.classList.add("active", "outer-shadow");
//       const target = e.target.getAttribute("data-target");
//     }
//   });

//   portfolioItemsContainer.addEventListener("click", (e) => {
//     if (e.target.closest(".portfolio-item-inner")) {
//       const portfolioItem = e.target.closest(
//         ".portfolio-item-inner"
//       ).parentElement;

//       itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(
//         portfolioItem
//       );
//       console.log(itemIndex);
//       screenshots = portfolioItems[itemIndex]
//         .querySelector(".portfolio-item-img img")
//         .getAttribute("data-screenshots");
//       console.log(screenshots);
//       screenshots = screenshots.split(",");
//       slideIndex = 0;
//       popupToggle();
//       popupSlideshow();
//     }
//   });

//   closeBtn.addEventListener("click", () => {
//     popupToggle();
//   });
//   function popupToggle() {
//     popup.classList.toggle("open");
//   }
//   function popupSlideshow() {
//     const imgSrc = screenshots[slideIndex];
//     const popupImg = popup.querySelector(".pp-img");
//     popup.querySelector(".pp-loader").classList.add("active");
//     popupImg.src = imgSrc;

//     popupImg.onload = () => {
//       popup.querySelector(".pp-loader").classList.remove("active");
//     };
//     popup.querySelector(".pp-counter").innerHTML =
//       slideIndex + 1 + " of " + screenshots.length;
//   }
// })();

// typingEffect
var position = document.querySelector(".designation");

var typewriter = new Typewriter(position, {
  loop: true,
});

typewriter
  .typeString('<strong style="font-weight: bold;">Software Engineer</strong>')
  .pauseFor(2500)
  .deleteAll()
  .typeString('<strong style="font-weight: bold;">Java Developer</strong>')
  .pauseFor(2500)
  .deleteAll()
  .typeString('<strong style="font-weight: bold;">Software/Web Developer</strong>')
  .pauseFor(2500)
  .start();
