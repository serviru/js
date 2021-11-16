'use strict';
let button = document.querySelector('button');
button.addEventListener('click', function (event) {
    console.log(event.target.id, event.target.className, event.target.innerText);
});

