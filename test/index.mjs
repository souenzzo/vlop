import { assoc, range, partition, isEmpty } from '@vlop/core'
import { deepEqual } from 'node:assert'
import { test, suite } from 'node:test'

test('assoc', () => {
  deepEqual(
    assoc({}, 'foo', 'bar'),
    { foo: 'bar' }
  )
})
test('range', () => {
  deepEqual(
    range(10),
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  )
})
test('partition', () => {
  deepEqual(
    partition(range(10), 3),
    [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]
  )
})

suite('isEmpty', () => {
  test('with an empty array')
  deepEqual(
    isEmpty([]),
    true
  )

  test('with an array with the value zero', () => {
    deepEqual(
      isEmpty([0]),
      false
    )
  })
})

/*
let x = () => {
    expect(assoc({}, "foo", "bar")).toEqual({foo: "bar"})
    expect(partition(range(10), 3)).toEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]])
    expect(isEmpty([])).toEqual(true)
    expect(isNil([[]])).toEqual(false)
    expect(isEmpty([[]])).toEqual(false)
    expect(isEmpty([0])).toEqual(false)
    expect(isEmpty([false])).toEqual(false)
    expect(isEmpty({})).toEqual(true)
    expect(isEmpty({0: false})).toEqual(false)
    expect(map(identity, [1, 2, 3])).toEqual([1, 2, 3])
    expect(add()).toEqual(0)
    expect(add(1)).toEqual(1)
    expect(add(1, 2)).toEqual(3)
    expect(add(1, 2, 3)).toEqual(6)
    expect(isEmpty(null)).toEqual(true)
    expect(isColl(null)).toEqual(false)
    expect(isMap(null)).toEqual(false)
    expect(isEmpty(map(identity, null))).toEqual(true)
    expect(not([])).toEqual(false)
    expect(reduce(add, 0, [1, 2, 3]))
    expect(hashMap("a", "b", "c", "d")).toEqual({a: "b", c: "d"})
    expect(map(identity, {a: 33, b: 22})).toEqual([["a", 33], ["b", 22]])
    expect(vals({a: 1, b: 2})).toEqual([1, 2])
    expect(keys({a: 1, b: 2})).toEqual(["a", "b"])
    expect(apply(hashMap, ["a", "b"])).toEqual({a: "b"})
    expect(comp(inc, inc, inc)(0)).toEqual(3)
    expect(map(user => update(user, "score", inc), [{name: "joe", score: 1}])).toEqual([{name: "joe", score: 2}])
    expect(map(fnil(inc, 9), [null, 1])).toEqual([10, 2])
    expect(dissoc({a: 1, b: 2}, "a")).toEqual({b: 2})
}
 */
