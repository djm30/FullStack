const banner = document.getElementById("banner");

const images = document.getElementsByTagName("img")

const squareImages = document.getElementsByClassName("square");

// for(let image of squareImages){
//     image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
// }

const bannerQuery = document.querySelector("#banner");
bannerQuery.style.TextAlign = "center";
const image2 = document.querySelector("img:nth-of-type(2)")

const squareImagesQuery = document.querySelectorAll(".square");

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const h2 = document.querySelector('h2')

h2.classList.add("purple")
h2.classList.add("border")
// h2.classList.remove("border")
h2.classList.toggle("border")

let img = document.createElement("img")
img.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dug-days-trailer-1630070380.jpg?crop=1.00xw:0.951xh;0,0.0486xh&resize=1200:*"
img.classList.add("square")
document.body.appendChild(img)


const newH3 = document.createElement("h3");
newH3.innerText = "I am new!"
document.body.appendChild(newH3)

const p = document.querySelector("p");
p.append("NEW TEXT BAYEE");
const newB = document.createElement("b");
newB.append("hi");

p.prepend(newB)

const h2 = document.createElement("h2")
h2.append("Are adorable chickens")

const h1 = document.querySelector("h1")
h1.insertAdjacentElement("afterend", h2);

let b = document.querySelector("b")
b.parentElement.removeChild(b)

const img = document.querySelector("img")
img.remove()