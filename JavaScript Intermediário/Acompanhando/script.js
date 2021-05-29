function changeH1(userInput) {
    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerText = userInput.value
}

function hideH1() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style = "display: none;"
}