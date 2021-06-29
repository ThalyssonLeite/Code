let url = "https://economia.awesomeapi.com.br/last/USD-BRL";


function convert() {

fetch(url).then(function(response) {
    return response.json()
}).then(function(data) {
    
    let BRL = data.USDBRL.ask;

    let input = document.getElementById("BRL");
    let USD = input.value;

    let h2 = document.getElementsByTagName("h2")[0];
    
    let result = USD * BRL;
    
    h2.innerHTML = `US$ ${USD} = R$ ${result.toFixed(2)}`;
})

}