'use strict'

/**
 * Created by sullof <sullof@gmail.com>
 */

// unexported class for private methods
class _MyClass {

    constructor(instance) {

        // set a property for the public class
        this.instance = instance
        this.doneAt = Date.now()
    }

    getSomethingPrivate() {
        let this_ = this.instance
        if (!this_.something || Date.now() - this.doneAt > 10000) {
            this.doneAt = Date.now()
            this_.something = new Math.Random()
        }
        return this_.something
    }

}

// the global var which we use to instantiate the private class
let _this

// public class
class MyClass {

    constructor(options = {}) {

        // initialize the private class, passing itself as a parameter
        _this = new _MyClass(this)

    }

    get() {
        // calls a method in the private class which sets this.something
        _this.refresh()
        return this.something
    }
}

module.exports = MyClass
