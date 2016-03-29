# Private methods in Javascript class

There are tons of discussion about how to better handle private methods in classes. I think that EcmaScript should allow some good way to do this, but for now anyone tries to found a good-enough approach. This is mine.

Take a look at the simple example in [`src/MyClass.es6`](src/MyClass.es6).

To verify that it works, after calling

```
npm install
```
you can test the ES6 file calling
```
npm run test-es6
```
or, if you prefer, compile the ES6 code to ES5 and run the test on the js files calling
```
npm run build && npm run test
```
