/* global $*/
function DomCalculator(element) {
    "use strict";
    this.el = element;
}

DomCalculator.prototype.add = function (a, b) {
    "use strict";
    $(this.el).html(a + b);
};

DomCalculator.prototype.divide = function (a, b) {
    "use strict";
    $(this.el).html(a / b);
};