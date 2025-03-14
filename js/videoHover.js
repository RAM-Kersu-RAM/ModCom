// videoHover.js
document.querySelectorAll(".video-item").forEach((videoItem) => {
  videoItem.addEventListener("mouseenter", () => {
    videoItem.style.flex = "3"; // توسيع الفيديو
  });

  videoItem.addEventListener("mouseleave", () => {
    videoItem.style.flex = "1"; // إعادة الفيديو إلى حجمه الطبيعي
  });
});
