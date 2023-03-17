const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const span = document.createElement('span');

window.addEventListener('keydown', function(e) {
    const key = document.createElement('span');
    key.textContent = e.key;
    key.className= 'accent-text';
    h1.textContent = `You pressed `;
    h1.appendChild(key);
    span.textContent = e.keyCode;
    span.className= 'accent-text';
    container.appendChild(span);
});

