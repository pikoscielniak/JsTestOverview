/*global describe, it, jasmine, expect, console*/
(function () {
    "use strict";

    function callMyCallback(cb) {
        cb();
    }

    describe("Spies", function () {
        it("should create a spy obejct", function () {
            var spy = jasmine.createSpyObj('mySpy', ['getName', 'save']);
            spy.getName.andReturn('bob');
            spy.save.andCallFake(function () {
                console.log('save called');
            });
            expect(spy.getName()).toEqual('bob');
            spy.save();
            expect(spy.save).toHaveBeenCalled();
        });
    });

}());