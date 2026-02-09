// de functie aanroepen die informatie over Maja gaat ophalen
insertMaja()

async function insertMaja() { 
	//de url data verzamelen
	const baseURL = 'https://fdnd.directus.app'
	const endpoint = '/items/person/?page=3'

	const url = baseURL + endpoint

	//de info opvragen met fetch

	let response = await fetch(url)

	//de info die is teruggekregen omzetten naar json met .json()

	let majaResponse = await response.json()

    console.log(majaResponse)
    majaInfo = majaResponse.data

	console.log(majaInfo)

    console.log(majaInfo[80])

    //info dynamisch invullen in html

    let majaQuote = majaInfo[80].bio;

    console.log(majaQuote)

    let majaQuoteHTML = 
    `<q>${majaQuote}</q>`

    // get the first name only
    let wholeName = majaInfo[80].name;
    const nameArray = wholeName.split(" ");
    let firstName = nameArray[0];

    //de html toevoegen met insertAdjacentHTML
    const quote = document.getElementById("quote");
    const h1 = document.querySelector("h1")

    quote.insertAdjacentHTML("beforeend", majaQuoteHTML)
    h1.textContent = `This is ${firstName}!`
    
        
}