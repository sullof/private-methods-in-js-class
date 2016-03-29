
var assert = require('chai').assert;

var MyClass = require('../src/MyClass');

describe('MyClass', function() {

    it('doubles a number', function() {
        assert.equal(MyModule.double(2), 4);
    });

    it('doubles lots of numbers', function() {
        for (var i = 0; i < 1000; i++) {
            assert.equal(MyModule.double(i), i * 2);
        }
    })
})