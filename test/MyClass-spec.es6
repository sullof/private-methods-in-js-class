const assert = require('chai').assert;

let MyClass = require('../src/MyClass');

describe('MyClass', function() {

    before(function(done) {
        this.myClass = new MyClass(5)
        done()
    })

    it('returns a number when calling .get()', function() {
        assert.equal(typeof this.myClass.get(), 'number')
    });

    it('throws an exception calling .getPrivate()', function() {
        let self = this
        assert.throws(function() {
            self.myClass.getPrivate()
        })
    });

    it('returns 15 when calling myClass.get()', function() {
        assert.equal(this.myClass.get(), 15)

        this.myClass2 = new MyClass(4)
    });

    it('returns 12 when calling myClass2.get()', function() {
        assert.equal(this.myClass2.get(), 12)
    });

    it('still returns 15 when calling myClass.get()', function() {
        assert.equal(this.myClass.get(), 15)
    });



})