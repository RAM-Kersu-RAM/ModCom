// scrollToTop.js
const scrollToTopButton = document.getElementById("scrollToTop");

// إظهار الزر عند التمرير لأسفل
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("visible");
  } else {
    scrollToTopButton.classList.remove("visible");
  }
});

// التمرير إلى الأعلى بسلاسة عند النقر على الزر
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
