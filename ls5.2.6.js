'use strict';
let cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    if (card.classList.contains('hidden')) {
        card.classList.remove('hidden');
    }
});

