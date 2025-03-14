// languageToggle.js
const toggleLanguageButton = document.getElementById("toggleLanguage");

function toggleLanguage() {
  const currentLang = toggleLanguageButton.textContent;
  const newLang = currentLang === "EN" ? "AR" : "EN"; // تأكد من أن اللغة هي EN أو AR
  toggleLanguageButton.textContent = newLang;
  updateTexts(newLang.toLowerCase()); // تحويل اللغة إلى أحرف صغيرة (en أو ar)
  updateDirection(newLang.toLowerCase()); // تحديث الاتجاه بناءً على اللغة
}

function updateTexts(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      // تحديث النص النائب إذا كان العنصر من نوع input أو textarea
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    } else {
      console.error(
        `Translation not found for key: ${key} in language: ${lang}`
      );
    }
  });

  // أعد تشغيل تأثير الكتابة بعد الترجمة
  if (typeof startTypingEffect === "function") {
    startTypingEffect();
  } else {
    console.error("startTypingEffect is not defined!");
  }
}

function updateDirection(lang) {
  const heroContent = document.getElementById("heroContent");

  // التحقق من عرض الشاشة
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    if (lang === "ar") {
      heroContent.style.flexDirection = "column"; // تكديس العناصر عموديًا
      heroContent.style.textAlign = "center"; // توسيط النص
      heroContent.style.alignItems = "center"; // توسيط العناصر
      heroContent.setAttribute("dir", "rtl"); // تعيين اتجاه النص إلى RTL
    } else {
      heroContent.style.flexDirection = "column"; // تكديس العناصر عموديًا
      heroContent.style.textAlign = "center"; // توسيط النص
      heroContent.style.alignItems = "center"; // توسيط العناصر
      heroContent.setAttribute("dir", "ltr"); // تعيين اتجاه النص إلى LTR
    }
  } else {
    // إعادة تعيين التنسيقات إذا لم تكن الشاشة موبايل
    heroContent.style.flexDirection = ""; // إزالة التعديلات
    heroContent.style.textAlign = ""; // إزالة توسيط النص
    heroContent.style.alignItems = ""; // إزالة توسيط العناصر
    heroContent.setAttribute("dir", ""); // إزالة سمة dir
  }
}

// مثال على استدعاء الدالة
updateDirection("ar"); // تغيير اللغة إلى العربية
updateDirection("en"); // تغيير اللغة إلى الإنجليزية

toggleLanguageButton.addEventListener("click", toggleLanguage);
