const mod = (a, b) => a % b

const div = (a, b) => a / b

const add = (a, b) => a + b

const count = n => Object.entries(n).length

const inc = n => add(n, 1)

const range = n => [...Array(n).keys()]

const is_array = x => Array.isArray(x)

const is_coll = x => (typeof(x) === "object")

const and = (a, b) => a && b

const or = (a, b) => a || b

const not = a => !a

const is_map = x => and(is_coll(x), not(is_array(x)))

const first = ([x]) => x

const second = ([_, x]) => x

const map = (f, coll) => (is_array(coll) ? coll : Object.entries(coll)).map(f)

const is_zero = n => n === 0

const is_empty = coll => is_zero(count(coll))

const identity = n => n

const concat = (...colls) => colls.reduce((acc, el) => acc.concat(el), [])

const partition = (coll, n) => is_empty(coll) ? [] : concat([coll.splice(0, n)], partition(coll, n))

const contains = (m, k) => k in m

const get = (m, k, d) => contains(m, k) ? m[k] : d

const assoc = (m, k, v, ...vs) => (is_empty(vs) ? k ? {...m, ...{[k]: v}} : {...m} : assoc({...m, ...{[k]: v}}, ...vs))

const apply = (f, args) => f.apply(null, args)

const hashMap = (...kvs) => apply(assoc, concat([{}], kvs))

const reduce = (f, val, coll) => coll.reduce(f, val)

const vals = coll => map(second, coll)

const keys = coll => map(first, coll)

const comp = (...fs) => (...args) => first(reduce((v, f) => [apply(f, v)], args, fs))

module.exports = {
  assoc, map, keys, apply, reduce, vals, add, hashMap, inc, is_empty, identity, not,
  comp
}
