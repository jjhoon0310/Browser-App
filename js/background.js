const images = ["0.jpeg", "1.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);
