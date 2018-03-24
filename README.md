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
const { update, map, inc, fnil } = require("./vlop/core") //in the future: import * from "./vlop/core"


const update_winners = (users) => (
    map(user => update(user, "score", fnil(inc, 0)), users) 
)

```