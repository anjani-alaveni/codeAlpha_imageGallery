
const images = document.querySelectorAll(".images img");

const imageViewer = document.getElementById("imageViewer");

const largeImage = document.getElementById("largeImage");

const backBtn = document.getElementById("backBtn");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");


let currentIndex = 0;


/* =========================
   OPEN IMAGE
   ========================= */

images.forEach(function (image, index) {

    image.addEventListener("click", function () {

        currentIndex = index;

        showImage();

        imageViewer.style.display = "flex";

    });

});


/* =========================
   SHOW IMAGE
   ========================= */

function showImage() {

    largeImage.src = images[currentIndex].src;

    largeImage.alt = images[currentIndex].alt;

}


/* =========================
   NEXT IMAGE
   ========================= */

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage();
}


/* =========================
   PREVIOUS IMAGE
   ========================= */

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage();
}


/* =========================
   NEXT BUTTON
   ========================= */

nextBtn.addEventListener("click", function () {

    nextImage();

});


/* =========================
   PREVIOUS BUTTON
   ========================= */

prevBtn.addEventListener("click", function () {

    previousImage();

});


/* =========================
   BACK BUTTON
   ========================= */

backBtn.addEventListener("click", function () {

    imageViewer.style.display = "none";

});


/* =========================
   KEYBOARD SUPPORT
   ========================= */

document.addEventListener("keydown", function (event) {

    /* Do nothing if lightbox is closed */

    if (imageViewer.style.display !== "flex") {

        return;

    }


    /* Right arrow */

    if (event.key === "ArrowRight") {

        nextImage();

    }


    /* Left arrow */

    if (event.key === "ArrowLeft") {

        previousImage();

    }


    /* Escape */

    if (event.key === "Escape") {

        imageViewer.style.display = "none";

    }

});
