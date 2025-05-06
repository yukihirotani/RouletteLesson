// ウパーの歩行アニメーション
const upaa = document.getElementById("upaa");
const images = ["upaa1.png", "upaa2.png", "upaa3.png"];
let imgIndex = 0;

setInterval(() => {
  imgIndex = (imgIndex + 1) % images.length;
  upaa.src = images[imgIndex];
}, 300);

// Now Loading テキストアニメーション
const textElement = document.getElementById("loading-text");
const loadingText = "Now Loading...";
let textIndex = 0;

function showNextChar() {
  if (textIndex < loadingText.length) {
    textElement.textContent += loadingText[textIndex];
    textIndex++;
    setTimeout(showNextChar, 150);
  }
}

showNextChar();
