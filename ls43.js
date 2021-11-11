'use strict';

class A {
    constructor(param1) {
        this.param1 = param1;
    }

    show() {
        alert(this.param1.indexOf('x' ));
    }
}

let obj2 = new A('text');
obj2.show();
