(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("tab-item") &&
      !e.target.classList.contains("active")
    ) {
      const target = e.target.getAttribute("data-target");
      tabsContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      e.target.classList.add("active", "outer-shadow");
    }
  });
})();
