let image = document.getElementById("like");
image.addEventListener("click", changeImage);

function changeImage() {
    let firstImage = image.getAttribute("src");
    image.setAttribute("src", "./imagens/thumbsDown.png"); 

    console.log(firstImage)
}