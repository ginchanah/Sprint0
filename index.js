



// change shirt color

const shirtStraps = document.querySelectorAll('.straps');
const shirtStrap1 = document.querySelector('.straps:first-of-type');
const shirtStrap2 = document.querySelector('.straps:nth-of-type(2)');
const shirt = document.getElementById('shirt');
const shirtQuote = document.querySelector('blockquote');

const learningObjectives = ['My learning objectives', 'Cool JavaScript interactions', 'Amazing CSS animations', 'A pretty and accessible website'];


function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color
};

shirtStraps.forEach((strap) => {
    strap.onclick = () => {
        let calculateLearningObjective = Math.floor(Math.random() * learningObjectives.length);
        let randomLearningObjective = learningObjectives[calculateLearningObjective];

        color = getRandomColor();
        shirt.style.background = `${color}`;
        shirtStrap1.style.background = `${color}`;
        shirtStrap2.style.background = `${color}`;
        shirtQuote.style.color = `contrast-color(${color})`;

        
        shirtQuote.textContent = `${randomLearningObjective}`;

    };
});



// amazing arm animation

// Left arm
const leftArm = document.querySelector('#leftarm');
const leftArmButton = document.querySelector('#leftarm .movearmbutton');
const leftLowerArm = document.querySelector('#leftarm .lowerarm');



leftArmButton.addEventListener('click', () => {
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            moveLeftArm();
            console.log('view transition!');
        });
    } else {
        moveLeftArm();
    }
});

function moveLeftArm() {
    leftArm.classList.toggle('moveLeftArm');
    leftLowerArm.classList.toggle('moveLowerLeftArm');
};


// Right Arm
const rightArm = document.querySelector('#rightarm');
const rightArmButton = document.querySelector('#rightarm .movearmbutton');
const rightLowerArm = document.querySelector('#rightarm .lowerarm');
const rightUpperArm = document.querySelector('#rightarm .upperarm');


rightArmButton.addEventListener('click', () => {
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            moveRightArm();
            console.log('view transition!');
        });
    } else {
        moveRightArm();
    };
});

function moveRightArm() {
    rightArm.classList.toggle('moveRightArm');
    rightLowerArm.classList.toggle('moveLowerRightArm');
    rightUpperArm.classList.toggle('transformUpperRightArm');
}