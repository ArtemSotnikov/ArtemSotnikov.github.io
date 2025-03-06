import {Slider} from "./Slider.js";

const slider = new Slider({ });

// Variables
let isOngoing = false;
const slideTime = 2; //in seconds
let animation;

// Query DOM elements
const allBullets = document.querySelectorAll(".bullet");
console.log(allBullets);
const startStopElem = document.querySelector(".start_stop");
console.log(startStopElem);



// Events

//Navigation button
allBullets.forEach(bullet => bullet.addEventListener("click", onBulletClick));
startStopElem.addEventListener("click", onStartStop);


// Listeners

//Scroll slides with navigation bullets
function  onBulletClick(event) {
    //   console.log(event);

    const index = Array.from(allBullets).indexOf(event.target);
    if (index !== -1) {
        //Update index of current slide
        currentSlide = index;
        imgContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;
    }
    updateActiveBullet();
}

//Change active (by color) bullet when slide is scrolled by any method
function updateActiveBullet() {
    //console.log("I am here")

    allBullets.forEach(bullet => { bullet.style.color = "darkblue";});
    allBullets.item(currentSlide).style.color = "red";
}

//Start stop automatic scrolling of slides
function onStartStop(event) {
    if (!isOngoing) {
        //console.log("Start animation");
        isOngoing = true;

        animation = setInterval(onRightClick, slideTime * 1000);
        //console.log(animation);
    } else {
        //console.log("Stop animation");
        isOngoing = false;

        clearInterval(animation);
    }
}