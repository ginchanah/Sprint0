//////// calling the API function ////////////
insertAPI();

async function insertAPI() { 
	//get URL data
	const baseURL = 'https://fdnd.directus.app';
    const endpoint = '/items/person/?fields=id,name,github_handle,fav_color,bio&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"CMD Minor Web Dev"}}}},{"squads":{"squad_id":{"cohort":"2526"}}}]}';
	const url = baseURL + endpoint;

	//get the info with fetch
	let response = await fetch(url);

	//transform data into json
	let apiResponse = await response.json();
    apiInfo = apiResponse.data;

    //put data about myself into HTML
    let majaInfo = apiInfo[30];
    let majaQuote = majaInfo.bio;

    let majaQuoteHTML = 
    `<q>${majaQuote}</q>`;

    // get the first name only
    let wholeName = majaInfo.name;
    const nameArray = wholeName.split(' ');
    let firstName = nameArray[0];

    //add HTML with insertAdjacentHTML
    const quote = document.getElementById('quote');
    const h1 = document.querySelector('h1');

    quote.insertAdjacentHTML('beforeend', majaQuoteHTML);
    h1.textContent = `This is ${firstName}!`;





    /////////// Classmate info //////////////
    const petButton = document.getElementById('petbutton');
    const petContainer = document.querySelector('.petcontainer');

    // add viewtransition on button click
    petButton.addEventListener('click', () => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                addRandomClassmate();
                console.log('view transition!');
            });
        } else {
            addRandomClassmate();
        };
    });

    //insert random classmate on page
    function addRandomClassmate() {
        //get random classmate
        const randomClassmateNumber = Math.floor(Math.random() * apiInfo.length);
        const randomClassmate = apiInfo[randomClassmateNumber];

        //get first name
        let wholeName = randomClassmate.name;
        const nameArray = wholeName.split(' ');
        let firstName = nameArray[0];

        //insert classmate
        let classMateHTML = `
            <li class='classmate'>
                <span></span> ${firstName} <span></span>
            </li>        
            `;
        petContainer.insertAdjacentHTML('beforeend', classMateHTML);

        //define last inserted li
        const classmate = document.querySelector('.classmate:last-of-type');

        const favouriteColor = randomClassmate.fav_color;

        //insert favourite background color
        if (randomClassmate.fav_color) {
            classmate.style.background = `${favouriteColor}`;
            classmate.style.color = `contrast-color(${favouriteColor})`;
        } else {
            classmate.style.background = 'var(--pet-color)';
        }


        // get size of inserted classmate
        const petSize = classmate.getBoundingClientRect();
        // get random position within Container bounds
        const bounds = petContainer.getBoundingClientRect();
        const randomX = Math.floor(Math.random() * (bounds.width - petSize.width));
        const randomY = Math.floor(Math.random() * (bounds.height - petSize.height));
        classmate.style.left = `${randomX}px`;
        classmate.style.top = `${randomY}px`;

    }
}

