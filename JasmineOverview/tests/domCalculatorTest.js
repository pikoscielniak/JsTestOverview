/*global describe, beforeEach, it,expect, DomCalculator,$, afterEach */

describe('DomCalculator', function () {
    "use strict";

    var calc,
        OutputId = "#calc-fixture";

    beforeEach(function () {
        $('body').append($('#template-wrapper').html().replace('-template', ""));
        calc = new DomCalculator($(OutputId));
    });

    afterEach(function () {
        $(OutputId).remove();
    });

    it('should be able to add 1 to 1', function () {
        calc.add(1, 1);
        expect($(OutputId).text()).toBe('2');
    });
});