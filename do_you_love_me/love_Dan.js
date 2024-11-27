const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const message = document.getElementById("message");
const heart = document.getElementById("heart");

yesButton.onclick = function () {
    alert("Dan love you too ❤️");
    const heartShape = `
    
       ******      ******
       ********    ********
      *********** ***********
      *************************
      ***************************
      ***********************
      *******************
      *************
      *********
      *****
      *
        `;
    heart.textContent = heartShape;
    heart.style.display = "block";
    yesButton.style.display = "none";
};

noButton.onmouseover = function () {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const randomLeft = Math.random() * (containerWidth - noButton.offsetWidth);
    const randomTop = Math.random() * (containerHeight - noButton.offsetHeight);

    noButton.style.left = `${randomLeft}px`;
    noButton.style.top = `${randomTop}px`;
};