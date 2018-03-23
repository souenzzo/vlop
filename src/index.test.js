const {
  assoc, map, identity, hashMap, vals, keys,
  is_empty, not, add, reduce, apply, comp, inc, update
} = require("./index.js")

const trim = s => s.strim()

test("assoc",
    () => {
      expect(assoc({}, "foo", "bar")).toEqual({foo: "bar"})
      expect(is_empty([])).toEqual(true)
      expect(is_empty([[]])).toEqual(false)
      expect(is_empty([0])).toEqual(false)
      expect(is_empty([false])).toEqual(false)
      expect(is_empty({})).toEqual(true)
      expect(is_empty({0: false})).toEqual(false)
      expect(map(identity, [1, 2, 3])).toEqual([1, 2, 3])
      expect(not([])).toEqual(false)
      expect(reduce(add, 0, [1, 2, 3]))
      expect(hashMap("a", "b", "c", "d")).toEqual({a: "b", c: "d"})
      expect(map(identity, {a: 33, b: 22})).toEqual([["a", 33], ["b", 22]])
      expect(vals({a: 1, b: 2})).toEqual([1, 2])
      expect(keys({a: 1, b: 2})).toEqual(["a", "b"])
      expect(apply(hashMap, ["a", "b"])).toEqual({a: "b"})
      expect(comp(inc, inc, inc)(0)).toEqual(3)
      expect(map(user => update(user, "score", inc), [{name: "joe", score: 1}])).toEqual([{name: "joe", score: 2}])
    }
)
