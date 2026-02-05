// docs: https://www.bobsburgersapi.com/documentation

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

    //info dynamisch invullen in html

    let majaQuote = majaInfo[83].bio

    console.log(majaQuote)

    let majaQuoteHTML = 
    `<q>${majaQuote}</q>`

    //de html toevoegen met insertAdjacentHTML

    h1Div.insertAdjacentHTML("afterend", majaQuoteHTML)
        
}