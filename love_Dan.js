const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
// const message = document.getElementById("message");
// const heart = document.getElementById("heart");

yesButton.onclick = function () {
    alert("Dan love you too ❤️");

    for (let i = 3; i <= 9; i += 2) {
        for (let j = 9; j > i; j -= 2) {
            document.write("&nbsp;&nbsp;");
        }
        for (let k = 1; k <= i; k++) {
            document.write("<span style='color: red;'>*</span>");
        }
        for (let j = 9; j > i; j -= 2) {
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        for (let k = 1; k <= i; k++) {
            document.write("<span style='color: red;'>*</span>");
        }
        document.write("<br/>");
    }
    for (let i = 16; i >= 1; i -= 2) {
        for (let j = 16; j >= i; j -= 2) {
            document.write("&nbsp;&nbsp;");
        }
        for (let k = 1; k <= i; k++) {
            document.write("<span style='color: red;'>*</span>");
        }
        document.write("<br/>");
    }

    for (let i = 1; i <= 18; i++) {
        if (i === 18) {
            document.write("<span style='color: red;'>*</span>");
        } else {
            document.write("&nbsp;");
        }
    }
    document.write("<br/>");

    document.write("<span style='color: red;'>Thank for love Dan and Dan love u too ❤️</span>");

    document.write("<br/>");

    document.write("<span >DM me on Instagram: <a href='https://www.instagram.com/dev_dan_tronggdatt/'>Click here</a></span>");

    document.write("<p style=' text-align: center; position: fixed; bottom: 0; width: 100%;'>This product is developed by Dan 🦊</p>")
};

noButton.onmouseover = function () {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const randomLeft = Math.random() * (containerWidth - noButton.offsetWidth);
    const randomTop = Math.random() * (containerHeight - noButton.offsetHeight);

    noButton.style.left = `${randomLeft}px`;
    noButton.style.top = `${randomTop}px`;
};