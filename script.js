
const images = document.querySelectorAll(".images img");

const imageViewer = document.getElementById("imageViewer");
const largeImage = document.getElementById("largeImage");

const backBtn = document.getElementById("backBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


// Store the current image index
let currentIndex = 0;


// Open selected image
function showImage(index) {

    currentIndex = index;

    largeImage.src = images[currentIndex].src;

    largeImage.alt = images[currentIndex].alt;

    imageViewer.style.display = "flex";
}


// Click on gallery images
images.forEach(function (image, index) {

    image.addEventListener("click", function () {

        showImage(index);

    });

});


// Previous button
prevBtn.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage(currentIndex);

});


// Next button
nextBtn.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage(currentIndex);

});


// Back button
backBtn.addEventListener("click", function () {

    imageViewer.style.display = "none";

});

