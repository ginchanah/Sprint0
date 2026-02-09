// shirt straps

const shirtStraps = document.querySelectorAll(".straps")
const shirt = document.getElementById("shirt")
const wholeShirt = shirt + shirtStraps

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
        wholeShirt.css("background-color", getRandomColor());
    }
});