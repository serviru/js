'use strict';

function A(param1) {
    this.param1 = param1;
}

A.prototype.show = function() {
    alert((this.param1 * 2) ** 56);
};

let obj1 = new A(+(prompt('Введи число:  ')));

obj1.show();
// текст это скучно