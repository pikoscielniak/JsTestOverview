/*global console*/
var MyClass = function () {

};

MyClass.prototype.Method1 = function () {
    "use strict";

    console.log('inside method1');
    return true;
};

var MySubclass = function () {

};
MySubclass.prototype = new MyClass();

MySubclass.prototype.Method2 = function () {
    "use strict";

    console.log('inside method2');
    return 'something';
};

function SpyOn(classToSpy) {
    "use strict";

    for (var key in classToSpy) {
        classToSpy[key] = CreateSpy(key);
    }
}

function SpyOnPassthrough(classToSpy) {
    "use strict";

    for (var key in classToSpy) {
        classToSpy[key] = CreateSpyPassthrough(key,classToSpy,classToSpy[key]);
    }
}

function CreateSpy(key) {
    "use strict";

    return function () {
        console.log("I am a spy for " + key);
    };
}

function CreateSpyPassthrough(key, context, origfunc) {
    "use strict";

    var passthroughSpy = function () {
        console.log('I am passthrough spy for ' + key);
        return origfunc.apply(context, arguments);
    };
    return passthroughSpy;
}



var mysubclass = new MySubclass();
SpyOn(mysubclass);

mysubclass.Method1();
mysubclass.Method2();


var mysubclass2 = new MySubclass();
SpyOnPassthrough(mysubclass);

mysubclass2.Method1();
mysubclass2.Method2();