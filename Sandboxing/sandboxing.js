var myXhrWrapper = {
    get: function () {
        console.log('--get function')
    },
    save: function () {
        console.log('--save function');
    }
};

describe("sandbox", function () {

    afterEach(function () {
        console.log('sandbox restored');
        myXhrWrapper.get();
        myXhrWrapper.save();
    });

    it('should be able to sandbox', function () {
        console.log('in sandbox test');
        var sandbox = sinon.sandbox.create();
        sandbox.stub(myXhrWrapper);
        myXhrWrapper.get();
        myXhrWrapper.save();

        sandbox.restore();
    });

    it('should be able to sandbox 2', sinon.test(function () {
        console.log('in sandbox test');
        this.stub(myXhrWrapper);
        myXhrWrapper.get();
        myXhrWrapper.save();
    }));
});