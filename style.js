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