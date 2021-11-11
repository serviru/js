
'use strict';

class A {
    constructor(param1) {
        this.param1 = param1;
    }

    show() {
        alert(this.param1.indexOf('т' ));
    }
}

class B extends A {
    constructor(param1, param2) {
        super(param1);
        this.param2 = param2;
    }

    show2() {
        console.log(this.param2);
    }
}

let bObj = new B('текст1', 'текст2');
bObj.show();
bObj.show2();