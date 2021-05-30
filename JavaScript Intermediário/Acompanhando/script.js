function onOver(element) {
    element.style = "background: aliceblue; color: cornflowerblue"
}

function mouseOut(element) {
    element.style = "background: cornflowerblue; color: aliceblue"
}

function hideImage() {
    let image = document.getElementsByTagName("img")[0];
    image.style = "display: none";
}