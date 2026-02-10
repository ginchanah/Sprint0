// shirt straps

console.log("I try colors");

const shirtStraps = document.querySelectorAll(".straps")
const shirtStrap1 = document.querySelector(".straps:first-of-type")
const shirtStrap2 = document.querySelector(".straps:nth-of-type(2)")
const shirt = document.getElementById("shirt")

const shirtQuote = document.querySelector("blockquote");

let learningObjectives = ["My learning objectives", "Cool JavaScript interactions", "Amazing CSS animations", "A pretty and accessible website"]

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




shirtStraps.forEach((strap) => {
    strap.onclick = () => {
        color = getRandomColor();
        shirt.style.background = `${color}`;
        shirtStrap1.style.background = `${color}`;
        shirtStrap2.style.background = `${color}`;

        shirtQuote.style.color = `contrast-color(${color})`

        const calculateLearningObjective = Math.floor(Math.random() * learningObjectives.length);
        const randomLearningObjective = learningObjectives[calculateLearningObjective]
        shirtQuote.textContent = `${randomLearningObjective}`

    }
});



/////////// amazing arm animation //////////////

    const leftArm = document.getElementById("leftarm")
    const leftLowerArm = document.querySelector("#leftarm .lowerarm")
    const rightArm = document.getElementById("rightarm")


    // left arm
    leftArm.addEventListener("click", () => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                moveLeftArm();
                console.log("view transition!")
            });
        } else {
            moveLeftArm();
        }
    });

    function moveLeftArm() {
        leftArm.classList.toggle("moveLeftArm")
        leftLowerArm.classList.toggle("moveLowerLeftArm")
    }