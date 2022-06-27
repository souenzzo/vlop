# vlop
> Value-Oriented programming utilities for javascript.

## what?
It's just a functional/immutable javascript libraries.

It uses only the native (mutable) objects, but offers a collection of functions to operate the data without mutating

checkout this presentation: [Value-Values](https://www.infoq.com/presentations/Value-Values)

## examples

Apply a function in a collection of values

```javascript
import * as vlop from "@vlop/core"

const update_winners = (users) => (
    vlop.map(user => vlop.update(user, "score", vlop.fnil(inc, 0)), users) 
)
```

## developing

### Testing 

```shell
npm install 
node --test
```
