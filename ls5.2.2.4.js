'use strict';
let product = document.querySelector('.product');
product.addEventListener('click', function (event) {
    event.target.innerHTML = "<div>Другой товар</div><div>Другое описание</div>";
});