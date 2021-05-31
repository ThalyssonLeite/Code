onload = function() {
    let h1 = document.getElementsByTagName("h1")[0];
    let name = localStorage.getItem("name");

    h1.innerHTML = name
}

function update(element) {
    let h1 = document.getElementsByTagName("h1")[0]
    let userInput = element.value

    h1.innerHTML = userInput

    localStorage.setItem("name", userInput)
    
}