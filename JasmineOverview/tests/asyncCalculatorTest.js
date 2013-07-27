/*global describe, beforeEach, it,expect, AsyncCalculator,$, afterEach, runs, waitsFor, jasmine*/

describe('AsyncCalculator', function () {
    "use strict";

    var calc;

    describe('FX Tests', function () {
        var el;

        beforeEach(function () {
            el = $('<div>some contents</div>');
            $('#container').append(el);
            calc = new AsyncCalculator(el);
        });

        afterEach(function () {
            el.remove();
        });

        it('should work with a visual effect', function () {
            var flag = false;
            var callback = function () {
                flag = true;
            };


            runs(function () {
                calc.hideResult(callback);
            });

            waitsFor(function () {
                return flag;
            }, 'falt to be true', 1100);

            runs(function () {
                expect(el.css('display')).toBe('none');
            });

        });

        it('should work with a visual effect - async', function (done) {
            var callback = function () {
                expect(el.css('display')).toBe('none');
                done();
            };

            calc.hideResult(callback);

        });
    });

    describe('pause before hiding', function () {
        var el;

        beforeEach(function () {
            el = $('<div>some contents</div>');
            $('#container').append(el);
            calc = new AsyncCalculator(el);
        });

        afterEach(function () {
            el.remove();
        });

        it('should call my callback function after two second', function () {
            var flag = false;
            var callback = function () {
                flag = true;
            };


            runs(function () {
                calc.pauseBeforeHiding(callback);
                expect(flag).toBeFalsy();
            });

            waitsFor(function () {
                return flag;
            }, 'pauseBeforeHiding to return', 2100);

            runs(function () {
                expect(flag).toBeTruthy();
            });
        });
    });

    describe('mock clock', function () {
        var el;

        beforeEach(function () {
            el = $('<div>some contents</div>');
            $('#container').append(el);
            calc = new AsyncCalculator(el);
            jasmine.Clock.useMock();
        });

        afterEach(function () {
            el.remove();
        });

        it('should call my callback function after two second - mock clock', function () {
            var flag = false;
            var callback = function () {
                flag = true;
            };

            calc.pauseBeforeHiding(callback);
            jasmine.Clock.tick(1901);
            expect(flag).toBeFalsy();

            jasmine.Clock.tick(2001);
            expect(flag).toBeTruthy();
        });
    });

});