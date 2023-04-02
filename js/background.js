const images = ["0.jpeg", "1.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const link = document.querySelector("#link");

const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;

if (chosenImage == "0.jpeg") {
    link.href = "styleDark.css";
} else {
    link.href = "style.css";
}

document.body.appendChild(bgImage);
