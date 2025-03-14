// whatsappWidget.js
function toggleWhatsAppWidget() {
  const widget = document.getElementById("whatsappWidget");
  if (widget.style.display === "none" || widget.style.display === "") {
    widget.style.display = "block";
    // إضافة حدث النقر خارج الصندوق
    document.addEventListener("click", closeWidgetOnClickOutside);
  } else {
    widget.style.display = "none";
    // إزالة حدث النقر خارج الصندوق
    document.removeEventListener("click", closeWidgetOnClickOutside);
  }
}

function closeWidgetOnClickOutside(event) {
  const widget = document.getElementById("whatsappWidget");
  const whatsappFloat = document.querySelector(".whatsapp-float");

  // التحقق من النقر خارج الصندوق
  if (!widget.contains(event.target) && !whatsappFloat.contains(event.target)) {
    widget.style.display = "none";
    // إزالة الحدث بعد إغلاق الصندوق
    document.removeEventListener("click", closeWidgetOnClickOutside);
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  if (message) {
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML += `<div class="message">You: ${message}</div>`;
    input.value = "";

    // إرسال الرسالة عبر واتساب
    const phoneNumber = "963937172041"; // استبدل برقم الهاتف
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // محاولة فتح تطبيق واتساب
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      setTimeout(() => {
        // إذا لم يتم فتح التطبيق، يتم توجيه المستخدم إلى واتساب ويب
        window.open(url, "_blank");
      }, 4000); // انتظر 4 ثواني قبل فتح واتساب ويب
    } else {
      // إذا كان المستخدم على جهاز كمبيوتر، يتم فتح واتساب ويب مباشرة
      window.open(url, "_blank");
    }
  }
}
