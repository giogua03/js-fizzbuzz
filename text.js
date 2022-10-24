const eleSquares = document.querySelector('.squares');
let i

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0  ) {
        eleSquares.innerHTML += `<div class="sq4">${"FizzBuzz"}</div>`
    }if (i % 3 == 0 && i % 5 != 0  ) {
            eleSquares.innerHTML += `<div class="sq2">${"Fizz"}</div>`
    }if (i % 3 != 0 && i % 5 == 0  ) {
            eleSquares.innerHTML += `<div class="sq3">${"Buzz"}</div>`
    }else if (i % 3 != 0 && i % 5 != 0  ) {
            eleSquares.innerHTML += `<div class="sq">${i}</div>`
    }
}
