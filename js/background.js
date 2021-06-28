const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg"
]

const chosedImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("img");
bgImage.src = `img/${chosedImage}`;

document.body.appendChild(bgImage);
