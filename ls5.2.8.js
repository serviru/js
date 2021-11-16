'use strict';
let bElems = document.querySelectorAll('b');
bElems.forEach(function (b) {
    if (!b.classList.contains('sign')) {
        b.classList.add('sign');
    }
});

