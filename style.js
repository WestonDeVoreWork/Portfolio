let baseURL = 'https://catfact.ninja/fact'
const button = document.getElementById("APIbutton")


button.addEventListener('click', fastFact)

    async function fastFact(e) {
        e.preventDefault();
        const response = await fetch(baseURL)
        const json = await response.json();
        giveFact(json);  
    };

let giveFact = data => {
            const randomFact = JSON.stringify(data.fact);
            document.getElementById("factDisplay").innerHTML = randomFact;

};

// ------------------------------------------------------

// API 2:

let apiKey = "6e8fafc70aed6fa377e61b09";

const baseCurrency = document.querySelector("#baseCurrency");
const targetCurrency = document.querySelector("#targetCurrency");

let API2baseURL = `https://v6.exchangerate-api.com/v6/${apiKey}/`;

const searchTerm = document.querySelector("#baseCurrency")
// const button = document.getElementById("APIsubmit");

// button.addEventListener('click', fetchSearchResults);

function fetchSearchResults() {
    const baseCurrencyValue = baseCurrency.value;
    const targetCurrencyValue = targetCurrency.value;
    console.log(baseCurrencyValue);
    console.log(targetCurrencyValue);
    url = API2baseURL + "pair/" + baseCurrencyValue + '/' + targetCurrencyValue; // replace USD to ${baseCurrencyValue}


    fetch(url)
        .then(res => res.json())
        .then(data => displayResults(data))
        .catch(err => console.log(err))
}

let displayResults = data => {
    console.log(data);
    const searchTermData = (data);
    console.log(searchTermData);
    targetCurrencyValue = targetCurrency.value;
    console.log(targetCurrencyValue)
    const converstionRate = (searchTermData.conversion_rate);
    console.log(converstionRate);
    const jsonConverstionRate = JSON.stringify(converstionRate);
    document.getElementById("resultDisplay").innerHTML = `${jsonConverstionRate}`;
}