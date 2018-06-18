const {
  assoc, map, identity, hashMap, vals, keys, fnil, dissoc, is_coll,
  is_empty, not, add, reduce, apply, comp, inc, update, is_map, is_nil
} = require("./index.js")

test("assoc",
    () => {
      expect(assoc({}, "foo", "bar")).toEqual({ foo: "bar" })
      expect(is_empty([])).toEqual(true)
      expect(is_nil([[]])).toEqual(false)
      expect(is_empty([[]])).toEqual(false)
      expect(is_empty([0])).toEqual(false)
      expect(is_empty([false])).toEqual(false)
      expect(is_empty({})).toEqual(true)
      expect(is_empty({ 0: false })).toEqual(false)
      expect(map(identity, [1, 2, 3])).toEqual([1, 2, 3])
      expect(add()).toEqual(0)
      expect(add(1)).toEqual(1)
      expect(add(1, 2)).toEqual(3)
      expect(add(1, 2, 3)).toEqual(6)
      expect(is_empty(null)).toEqual(true)
      expect(is_coll(null)).toEqual(false)
      expect(is_map(null)).toEqual(false)
      expect(is_empty(map(identity, null))).toEqual(true)
      expect(not([])).toEqual(false)
      expect(reduce(add, 0, [1, 2, 3]))
      expect(hashMap("a", "b", "c", "d")).toEqual({ a: "b", c: "d" })
      expect(map(identity, { a: 33, b: 22 })).toEqual([["a", 33], ["b", 22]])
      expect(vals({ a: 1, b: 2 })).toEqual([1, 2])
      expect(keys({ a: 1, b: 2 })).toEqual(["a", "b"])
      expect(apply(hashMap, ["a", "b"])).toEqual({ a: "b" })
      expect(comp(inc, inc, inc)(0)).toEqual(3)
      expect(map(user => update(user, "score", inc), [{ name: "joe", score: 1 }])).toEqual([{ name: "joe", score: 2 }])
      expect(map(fnil(inc, 9), [null, 1])).toEqual([10, 2])
      expect(dissoc({ a: 1, b: 2 }, "a")).toEqual({ b: 2 })
    }
)
