// popup.js
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
