# vlop
Value-Oriented programming utilities for javascript.

## what?
It's just a functional/immutable javascript libraries.

It uses only the native (mutable) objects, but offers a collection of functions to operate the data without mutating

checkout this presentation

https://www.infoq.com/presentations/Value-Values

## examples

Apply a function in a collection of values

```javascript
import * as vlop from "/souenzzo/vlop" // not sure about "qualified" import

const update_winners = (users) => (
    map(user => update(user, "score", fnil(inc, 0)), users) 
)
```

## developing 

```bash
## check if java and npm are available 
java --version
npm --version
## run cards
npm run cards
```
