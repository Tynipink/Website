const message = document.getElementById('welcome-message');
const messages = [
    "Leila Anita Rabben",
    "Tony Andre Venvik",
];

let i = 0;
setInterval(() => {
    message.textContent = messages[i];
    i = (i + 1) % messages.length;
}, 2500); 
