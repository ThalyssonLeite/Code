let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let img = document.getElementsByTagName("img")[0];

context.drawImage(img, 20, 20);
