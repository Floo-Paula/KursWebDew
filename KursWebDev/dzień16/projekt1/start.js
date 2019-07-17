//1. pobieramy wszystkie potrzebne elementy z DOM
let btnIncrease = document.querySelector('.bigger');
let btnDecrease = document.querySelector('.smaller');
let text = document.querySelector('p');

// 1b. określamy potrzebne dane
let textSize = 16;

text.style.fontSize = textSize + 'px';


// 3. określenie akcji - napisanie funkcji
function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + 'px';
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + 'px';
};

// 2. ustawienie nasłuchiwania na przyciskach na kliknięcie
btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);