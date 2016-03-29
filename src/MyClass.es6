'use strict'

// this is a stupid example, but it works to explain the approach

// unexported class for private methods
class _MyClass {

    constructor(instance) {

        // set a property for the instance of the public class
        this.instance = instance

        // set a private property
        this.secret = 0.1847563
    }

    getPrivate() {

        // assign the public instance to a local variable
        let this_ = this.instance

        // returns a value which uses a public property (salt)
        // and a private property (secret)
        return (this_.salt * this.secret * Math.random())
    }

}

// the global var which we use to instantiate the private class
let _this

// public class
class MyClass {

    constructor(salt) {

        // initialize the private class, passing itself as a parameter
        _this = new _MyClass(this)

        // set a public property
        this.salt = salt
    }

    get() {
        // returns the output of a private method
        return _this.getPrivate()
    }
}

module.exports = MyClass
