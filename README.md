# vlop

> Value-Oriented programming utilities for javascript.

## what?
It's just a functional/immutable javascript libraries.

It uses only the native (mutable) objects, but offers a collection of functions to operate the data without mutating

checkout this presentation: [Value-Values](https://www.infoq.com/presentations/Value-Values)

## examples

Apply a function in a collection of values

```javascript
import * as vlop from "@souenzzo/vlop"

const update_winners = (users) => (
    vlop.map(user => vlop.update(user, "score", vlop.fnil(inc, 0)), users) 
)
```

```javascript
> update_winners([{name: "Alice", score: 42}, {name: "Bob"}])
[ { name: 'Alice', score: 42 }, { name: 'Bob', score: 1 } ]
```

## developing

### Testing 

```shell
## Install deps
npm ci
## Run tests
npm test
```
