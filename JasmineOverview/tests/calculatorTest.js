/*global describe, beforeEach, it,expect, Calculator*/
describe('Calculator', function () {
    "use strict";

    var calc;
    beforeEach(function () {
        calc = new Calculator();

        this.addMatchers({
            toBeBetween: function (a, b) {
                return this.actual >= a && this.actual <= b;
            }
        });
    });

    it('should be able to add 1 and 1', function () {
        expect(calc.add(1, 1)).toBe(2);
    });

    it('should be able to add 2 and 1', function () {
        var calc = new Calculator();
        expect(calc.add(2, 1)).toBe(3);
    });

    it('should be able to divide 6 and 2', function () {
        expect(calc.divide(6, 2)).toBe(3);
    });

    it('should be able to divide 6 and 3', function () {
        expect(calc.divide(6, 3)).toBe(2);
    });

    it('should be able to divide a rational number', function () {
        expect(calc.divide(1, 3)).toBeBetween(0.33333,0.333334);
    });
});