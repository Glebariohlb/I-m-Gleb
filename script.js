const greeting = document.getElementById('greeting');
const texts = [
    " Доброй ночи!",
    " Доброе утро!",
    " Добрый день!",
    " Добрый вечер!"
];
const hour = new Date().getHours();
let message;

if (hour < 6) message = texts[0];
else if (hour < 12) message = texts[1];
else if (hour < 17) message = texts[2];
else message = texts[3];

greeting.textContent = '';
let i = 0;

function typeWriter() {
    if (i < message.length) {
        greeting.textContent += message[i];
        i++;
        setTimeout(typeWriter, 100);
    } else {
        greeting.classList.add('typing-done');
    }
}

setTimeout(typeWriter, 500);