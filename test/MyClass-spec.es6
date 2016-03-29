const assert = require('chai').assert;

let MyClass = require('../src/MyClass');

describe('MyClass', function() {

    before(function(done) {
        this.salt = 2837465
        this.myClass = new MyClass(this.salt)
        done()
    })

    it('returns a number when calling .get()', function() {
        assert.equal(typeof this.myClass.get(), 'number');
    });

    it('throws an exception calling .getPrivate()', function() {
        let self = this
        assert.throws(function() {
            self.myClass.getPrivate()
        })
    });

})