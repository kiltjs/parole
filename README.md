
# Parole

[<img src="https://promisesaplus.com/assets/logo-small.png" alt="Promises/A+ logo" title="Promises/A+ 1.0 compliant" align="right" />](https://promisesaplus.com/)

Another ES6 promise implementation ([compliant](https://github.com/promises-aplus/promises-tests) with [Promises/A+](https://github.com/promises-aplus/promises-spec))

[![ᴋɪʟᴛ ᴊs](https://jesus.germade.dev/assets/images/badge-kiltjs.svg)](https://github.com/kiltjs)
[![npm](https://img.shields.io/npm/v/parole.svg)](https://www.npmjs.com/package/parole)
[![Build Status](https://travis-ci.org/kiltjs/parole.svg?branch=master)](https://travis-ci.org/kiltjs/parole)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Installation
```.sh
npm install parole --save

# alternatively you can use bower (minified version by default)
bower install parole --save
```

### ES6 fulfill
> `Parole` implements [ES6 Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) specs

``` js
// parole respects the es6 promise specification
// you can use parole as global polyfill

if( !window.Promise ) {
  window.Promise = Parole;
}
```

### Example
``` js
new Parole(function (resolve, reject) {
        resolve('gogogo!');
    })

    .then(function (result) {
        console.log('checkpoint 1', result);
        throw 'whoops!';
    })

    .then(function (result) {
        console.log('checkpoint 2', result);
    },function (result) {
        console.log('checkpoint 2.1', result);
        return new Parole(function (resolve, reject) {
            setTimeout(function () { resolve('all right!'); }, 400);
        });
    })

    .then(function (result) {
        console.log('checkpoint 3', result);
    }, function (reason) {
        console.log('checkpoint 3.1', reason);
    })
;
```
> output

```.sh
checkpoint 1 gogogo!
checkpoint 2.1 whoops!
# elapsed 400ms
checkpoint 3 all right!
```

### Tests
``` sh
make test
```
