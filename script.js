
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

nextBtn.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

});


/* =========================
   PREVIOUS IMAGE
   ========================= */

prevBtn.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();

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

    if (imageViewer.style.display !== "flex") {
        return;
    }


    /* Right arrow → next */

    if (event.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showImage();

    }


    /* Left arrow → previous */

    if (event.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        showImage();

    }


    /* Escape → close */

    if (event.key === "Escape") {

        imageViewer.style.display = "none";

    }

});

