let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let img = new Image();
img.src = "./assets/images/thumbsUp.png";

img.onload = () => context.drawImage(img, 50, 50, img.naturalWidth/2, img.naturalHeight/2);
