'use strict';

function A(param1) {
    this.param1 = param1;
}

A.prototype.show = function() {
    alert(this.param1.indexOf('t' ));
};

function B(param1, param2) {
    A.call(this, param1);
    this.param2 = param2;
}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

B.prototype.show2 = function() {
    console.log(this.param2);
};

let bObj = new B('text1', 'text2');
bObj.show();
bObj.show2();