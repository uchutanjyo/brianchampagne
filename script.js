// Gallery

const img = document.querySelector("#pic");
const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const images = ["me1", "me2", "me3"];
let count = 0;


// container.style.backgroundImage = `url(${images[0]}.jpeg)`;

// Next button
function nextPic() {
    rightButton.addEventListener("click", function() {
    count++;
    img.src = `${images[count]}.jpeg`;
    console.log(img.src);
    if (count > images.length - 2) {
    count = -1;
    }})}; 

    // Prev button
 function prevPic() {
   leftButton.addEventListener("click", function() {
    count--;
    if (count < 0) {
        count = (images.length - 1);
    }
    img.src = `${images[count]}.jpeg`
    })}; 


// On load
nextPic();
prevPic();