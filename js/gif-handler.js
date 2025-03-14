const gifs = [
  { src: "image/1.gif", link: "#section1", className: "gif-1" },
  { src: "image/2.gif", link: "#section2", className: "gif-2" },
  { src: "image/3.gif", link: "#section3", className: "gif-3" },
  { src: "image/4.gif", link: "#section4", className: "gif-4" },
  { src: "image/5.gif", link: "#section5", className: "gif-5" },
  { src: "image/6.gif", link: "#section6", className: "gif-6" },
  { src: "image/7.gif", link: "#section7", className: "gif-7" },
];

function generateGifs() {
  gifs.forEach(({ src, link, className }) => {
    let gifElement = document.createElement("a");
    gifElement.href = link;
    gifElement.classList.add("gif-container", className);

    let imgElement = document.createElement("img");
    imgElement.src = src;
    gifElement.appendChild(imgElement);

    document.body.appendChild(gifElement);
  });
}

window.onload = generateGifs;
