// Variables
let currentSlide = 0;
let startX;

// Query DOM elements
const imgContainerElem = document.querySelector(".slider");
console.log(imgContainerElem);
const firstImageElem = document.querySelector("img");
console.log(firstImageElem);
const leftElement = document.querySelector(".prev");
const rightElement = document.querySelector(".next");
console.log(leftElement);
console.log(rightElement);
const allImages = document.querySelectorAll(".image_container");
console.log(allImages);
const slidesCount = allImages.length;
console.log(slidesCount);

// Events
leftElement.addEventListener("click", onLeftClick);
rightElement.addEventListener("click", onRightClick);
document.addEventListener("keydown", onKeyPress);
imgContainerElem.addEventListener("touchstart", onTouchStart);
imgContainerElem.addEventListener("touchend", onTouchEnd);

// Listeners
function onLeftClick() {
    currentSlide--;

    if(currentSlide < 0) {
        currentSlide = slidesCount - 1;
    }

    imgContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;
}

function onRightClick() {
    currentSlide++;

    if(currentSlide === slidesCount) {
        currentSlide = 0;
    }

    imgContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;
}

function onKeyPress(event) {
   // console.log(event);

    if (event.key === "ArrowLeft") {
        onLeftClick();
    } else if (event.key === "ArrowRight") {
        onRightClick();
    }
}

function onTouchStart(event) {
    console.log(event);
    startX = event.touches[0].clientX;
    console.log(startX);
}

function onTouchEnd(event) {
    console.log(event);
    let endX = event.changedTouches[0].clientX;
    console.log(endX);

    let swipeThreshold = 50;

    if (startX - endX > swipeThreshold) {
        onRightClick();
    } else if (endX - startX > swipeThreshold) {
        onLeftClick();
    }
}





