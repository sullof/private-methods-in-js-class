# Private methods in Javascript class

There are tons of discussion about how to better handle private methods in classes. 
This approach tries to keep things easy without loosing the advantage of having actual properties for the class.

Take a look at the simple example in [`src/MyClass.es6`](src/MyClass.es6). 

The advantage of this approach is that the public class (MyClass) and the private class (_MyClass) are interconnected and in any moment you can refer to one from the other. At the same time anything is defined in the private class is not accessible from outside.

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

