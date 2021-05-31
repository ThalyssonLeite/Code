onload = function() {
    let h1 = document.getElementsByTagName("h1")[0];
    let choosenOne = localStorage.getItem("choosenOne")
    h1.innerHTML = choosenOne
    let button = document.getElementsByTagName("button")[0];

    let h1Verify = h1.innerText;
    let emptyString = "";

    if (h1Verify > emptyString) {
        button.style = "display: none"
    }
}

let peopleInRaffle = ["Thalysson", "Thayssa", "Junior", "Edilza", "Maya"]

function raffle(button) {

    let numberOfPeopleInRaffle = peopleInRaffle.length;

    let raffledPerson = Math.floor(Math.random() * numberOfPeopleInRaffle);
    console.log(numberOfPeopleInRaffle)

    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = peopleInRaffle[raffledPerson];

    localStorage.setItem("choosenOne", h1.innerHTML)

    button.style = "display: none"
}