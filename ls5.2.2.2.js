'use strict';
let p = document.querySelector('p');
p.addEventListener('click', function (event) {
     console.log(event.target.classList);
     event.target.classList.forEach(function (klass) {
         console.log(klass);
     });
 });
