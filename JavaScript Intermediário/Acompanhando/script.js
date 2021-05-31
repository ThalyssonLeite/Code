onload = function() {
    let h1 = document.getElementsByTagName("h1")[0];
    let name = localStorage.getItem("name");

    h1.innerHTML = name
}

function update() {
    let h1 = document.getElementsByTagName("h1")[0]
    let input = document.getElementsByTagName("input")[0]
    let userInput = input.value

    h1.innerHTML = userInput

    localStorage.setItem("name", userInput)
    
}