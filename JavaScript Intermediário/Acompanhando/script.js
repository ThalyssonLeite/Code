window.onload = function () {
    let pi = Math.PI;
    let squareRoot = Math.sqrt(16);
    let power = Math.pow(2, 3);
    let randomNumberFromOneToTen = Math.random() * 10;
    let roundAFloatNumber = Math.round(Math.random() * 10) //Math.round(5.5) -> 6
    let putThatNumberToTheFloor = Math.floor(5.99);
    let putThatNumberToTheCeil = Math.ceil(5.000001);

    console.log(pi);
    console.log(squareRoot);
    console.log(power);
    console.log(randomNumberFromOneToTen);
    console.log(roundAFloatNumber);
    console.log(putThatNumberToTheFloor);
    console.log(putThatNumberToTheCeil);
}