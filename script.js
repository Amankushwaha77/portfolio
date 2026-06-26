const text = [
    "Turning Ideas Into Reality Through Code",
    "BCA Student",
    "Web Developer",
    "Programmer"
];

let textIndex = 0;
let charIndex = 0;
let typing = document.getElementById("typing");

function type() {
    if (charIndex < text[textIndex].length) {
        typing.innerHTML += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typing.innerHTML = text[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 40);
    } else {
        textIndex++;
        if (textIndex >= text.length) {
            textIndex = 0;
        }
        setTimeout(type, 300);
    }
}

type();