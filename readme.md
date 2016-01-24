## faux-jax-econnreset [FIXED]
A bug with faux-jax causing ECONNRESET.

Track issue on [faux-jax#11](https://github.com/algolia/faux-jax/issues/11).

## Behavior
Socket hangs up as I run the test (`{ [Error: socket hang up] code: 'ECONNRESET' }`)

## Running
```
npm install
npm test
```
