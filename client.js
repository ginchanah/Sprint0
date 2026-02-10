// de functie aanroepen die informatie over Maja gaat ophalen
insertAPI()

async function insertAPI() { 
	//de url data verzamelen
	const baseURL = 'https://fdnd.directus.app'
	const endpoint = '/items/person/?page=3'

	const url = baseURL + endpoint

	//de info opvragen met fetch

	let response = await fetch(url)

	//de info die is teruggekregen omzetten naar json met .json()

	let apiResponse = await response.json()

    console.log(apiResponse)
    apiInfo = apiResponse.data

	console.log(apiInfo)

    console.log(apiInfo[80])

    //info dynamisch invullen in html

    let majaQuote = apiInfo[80].bio;

    console.log(majaQuote)

    let majaQuoteHTML = 
    `<q>${majaQuote}</q>`

    // get the first name only
    let wholeName = apiInfo[80].name;
    const nameArray = wholeName.split(" ");
    let firstName = nameArray[0];

    //de html toevoegen met insertAdjacentHTML
    const quote = document.getElementById("quote");
    const h1 = document.querySelector("h1")

    quote.insertAdjacentHTML("beforeend", majaQuoteHTML)
    h1.textContent = `This is ${firstName}!`





    /////////// Classmate info //////////////

    const petButton = document.getElementById("petbutton")
    const petContainer = document.querySelector(".petcontainer")


    petButton.addEventListener("click", () => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                addRandomClassmate();
                console.log("view transition!")
            });
        } else {
            addRandomClassmate();
        }
    });

    // petButton.addEventListener("click", addRandomClassmate)

    function addRandomClassmate() {
        //get random classmate
        const randomClassmateNumber = Math.floor(Math.random() * apiInfo.length);
        const randomClassmate = apiInfo[randomClassmateNumber]

        //get first name
        let wholeName = randomClassmate.name;
        const nameArray = wholeName.split(" ");
        let firstName = nameArray[0];

        //insert classmate
        let classMateHTML = `
            <li class="classmate">
               <span></span> ${firstName} <span></span>
            </li>        
            `
        petContainer.insertAdjacentHTML("beforeend", classMateHTML)

        //define last inserted li
        let classmate = document.querySelector(".classmate:last-of-type")

        const favouriteColor = randomClassmate.fav_color;

        //insert favourite background color
        if (randomClassmate.fav_color) {
            classmate.style.background = `${favouriteColor}`
            classmate.style.color = `contrast-color(${favouriteColor})`
        } else {
            classmate.style.background = "var(--pet-color)"
        }

        

        const petSize = classmate.getBoundingClientRect();
        console.log(petSize)
        // get random position within Container bounds
        const bounds = petContainer.getBoundingClientRect();
        const randomX = Math.floor(Math.random() * (bounds.width - petSize.width));
        const randomY = Math.floor(Math.random() * (bounds.height - petSize.height));
        classmate.style.left = `${randomX}px`;
        classmate.style.top = `${randomY}px`;

        
	
    }





}

