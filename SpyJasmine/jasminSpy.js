/*global describe, it, jasmine, expect*/
(function () {
    "use strict";

    function callMyCallback(cb) {
        cb();
    }

    describe("Spies", function () {
        it("should spy on a callback", function () {
            var spyCb = jasmine.createSpy('myspy');
            callMyCallback(spyCb);
            expect(spyCb).toHaveBeenCalled();
        });
    });

}());