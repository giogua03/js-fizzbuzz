const eleSquares = document.querySelector('.squares');

for (let i = 0; i <= 100; i++) {
    eleSquares.innerHTML += `<div class="sq">${i}</div>`
}
if (i % 3 == 0 ) {
     eleSquares.innerHTML += `<div class="sq">${"fizz"}</div>`
}else {
        eleSquares.innerHTML += `<div class="sq">${i}</div>`
    }
