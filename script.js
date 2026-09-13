const images = document.querySelectorAll(".images img");

const imageViewer = document.getElementById("imageViewer");
const largeImage = document.getElementById("largeImage");
const backBtn = document.getElementById("backBtn");

images.forEach(function (image) {

 image.addEventListener("click", function () {

  largeImage.src = image.src;

  imageViewer.style.display = "flex";

 });

});

backBtn.addEventListener("click", function () {

 imageViewer.style.display = "none";

});