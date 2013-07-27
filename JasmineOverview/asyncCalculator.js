/* global $, setTimeout*/
var AsyncCalculator = function (displayElement) {
    "use strict";

    this.$el = $(displayElement);
};

AsyncCalculator.prototype.hideResult = function (cb) {
    "use strict";

    this.$el.fadeOut(1000, cb);
};

AsyncCalculator.prototype.pauseBeforeHiding = function (cb) {
    "use strict";

    setTimeout(cb, 2000);
};