// تحديد أزرار التنقل وحاوية الخدمات
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const serviceContainer = document.querySelector(".service-container");

// قيمة التمرير (يمكن تعديلها حسب العرض المطلوب)
const scrollAmount = 500; // يمكن تغيير هذه القيمة حسب عرض كل خدمة

// دالة للتمرير إلى اليسار
function prevSlide() {
  serviceContainer.scrollBy({
    left: -scrollAmount, // التمرير إلى اليسار
    behavior: "smooth", // إضافة تأثير سلس
  });

  // التحقق من الوصول إلى البداية
  setTimeout(() => {
    if (serviceContainer.scrollLeft <= 0) {
      serviceContainer.scrollTo({
        left: serviceContainer.scrollWidth, // التمرير إلى النهاية
        behavior: "smooth",
      });
    }
  }, 300); // تأخير للتحقق بعد انتهاء التمرير
}

// دالة للتمرير إلى اليمين
function nextSlide() {
  serviceContainer.scrollBy({
    left: scrollAmount, // التمرير إلى اليمين
    behavior: "smooth", // إضافة تأثير سلس
  });

  // التحقق من الوصول إلى النهاية
  setTimeout(() => {
    if (
      serviceContainer.scrollLeft + serviceContainer.clientWidth >=
      serviceContainer.scrollWidth
    ) {
      serviceContainer.scrollTo({
        left: 0, // العودة إلى البداية
        behavior: "smooth",
      });
    }
  }, 300); // تأخير للتحقق بعد انتهاء التمرير
}

// تعليق الأحداث على الأزرار
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
