// slideshow.js
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slidesContainer = document.querySelector(".slides");
const slidesToShow = 3; // عدد الصور التي تريد عرضها في نفس الوقت

function showSlide(index) {
  const offset = -index * (100 / slidesToShow); // حساب الإزاحة بناءً على عدد الصور المعروضة
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % (totalSlides - slidesToShow + 1);
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + (totalSlides - slidesToShow + 1)) %
    (totalSlides - slidesToShow + 1);
  showSlide(currentSlide);
}

// التمرير التلقائي كل 4 ثوانٍ
setInterval(nextSlide, 3000);

// وظائف النافذة المنبثقة
function openPopup(imageSrc) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
