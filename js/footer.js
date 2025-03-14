document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((button) => {
    button.addEventListener("click", function () {
      const submenu = this.nextElementSibling;

      // إغلاق جميع القوائم المفتوحة قبل فتح الجديدة
      document.querySelectorAll(".submenu").forEach((menu) => {
        if (menu !== submenu) {
          menu.style.display = "none";
          menu.previousElementSibling.classList.remove("active");
        }
      });

      // تبديل الحالة (فتح/إغلاق)
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
        this.classList.remove("active");
      } else {
        submenu.style.display = "block";
        this.classList.add("active");
      }
    });
  });
});
