let temperature = prompt("Digite sua temperatura em graus seguido de 'F' para fahrenheit ou 'C' para celsius").toUpperCase().replace(",", ".");

function  transformDegree(temperature) {
    const isItCelsius = temperature.includes("C");
    const isItFahrenheit = temperature.includes("F");

    function celsiusToFahrenheit(temperature) {
        let fahrenheit = temperature * 9/5 +32;
       return fahrenheit;
    }

    function fahrenheitToCelsius(temperature) {
        let celsius = (temperature - 32) * 5/9;
        return celsius.toFixed(2) + 0;
    }

    let degree = Number(temperature.replace("F", "").replace("C", ""));

    function validation() {
        
        if (isItCelsius) {
            alert(`Seu temperatura foi convertida de ${temperature} para: ${celsiusToFahrenheit(degree)}F.`);
        } else if (isItFahrenheit) {
            alert(`Sua temperatura foi convertida de ${temperature} para: ${fahrenheitToCelsius(degree)}C.`);
        } else {
            alert("Por favor, coloque apenas os graus seguido de 'F' para fahrenheit ou 'C' para celsius. Exemplo: '15c' ou '50f'.");
        }
    }

    validation()
}

transformDegree(temperature)