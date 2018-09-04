const is = require("./is.js")

const or = (...ns) => reduce((acc, n) => acc || n, false, ns)

const and = (...ns) => reduce((acc, n) => acc && n, true, ns)

const is_nil = x => or(is.Null(x), is.Undefined(x))

const is_map = x => and(is_coll(x), not(is.Array(x)))

const not = a => !a

const count = n => is_nil(n) ? 0 : Object.entries(n).length

const range = n => [...Array(n).keys()]

const repeat = (n, x) => Array(n).fill(x)

const conj = (coll, x) => [...coll, x]

const juxt = (...fs) => x => reduce((acc, f) => conj(acc, f(x)), [], fs)

const is_coll = x => and(is.Object(x), not(is_nil(x)))

const first = ([x]) => x

const second = ([_, x]) => x

const is_zero = n => n === 0

const is_empty = coll => is_zero(count(coll))

const identity = n => n

const splice = (coll, start, deleteCount, ...items) => [...coll].splice(start, deleteCount, ...items)

const drop = (coll, n) => splice(coll, n, count(coll))

const partition = (coll, n) => is_empty(coll) ? [] : concat([splice(coll, 0, n)], partition(drop(coll, n), n))

const contains = (m, k) => k in m

const get = (m, k, d) => contains(m, k) ? m[k] : or(d, null)

const assoc = (m, k, v, ...vs) => (is_empty(vs) ? k ? {...m, ...{[k]: v}} : {...m} : assoc({...m, ...{[k]: v}}, ...vs))

const apply = (f, args) => f.apply(null, args)

const hashMap = (...kvs) => apply(assoc, concat([{}], kvs))

const reduce = (f, val, coll) => or(coll, []).reduce(f, val)

const mod = (a, b) => a % b

const div = (a, b) => a / b

const add = (...ns) => reduce((acc, n) => acc + n, 0, ns)

const mult = (...ns) => reduce((acc, n) => acc * n, 1, ns)

const map = (f, coll) => (is_map(coll) ? Object.entries(coll) : or(coll, [])).map(f)

const inc = n => add(n, 1)

const concat = (...colls) => reduce((acc, el) => acc.concat(el), [], colls)

const vals = coll => map(second, coll)

const keys = coll => map(first, coll)

const comp = (...fs) => (...args) => first(reduce((v, f) => [apply(f, v)], args, fs))

const update = (m, k, f) => assoc(m, k, f(get(m, k)))

const fnil = (f, v) => x => f(is_nil(x) ? v : x)

const dissoc = (m, ...ks) => reduce((acc, k) => {
  let {[k]: _, ...rest} = acc
  return rest
}, m, ks)

module.exports = {
  assoc, map, keys, apply, reduce, vals, add, hashMap, inc, is_empty, identity, not,
  comp, update, fnil, dissoc, is_map, is_coll, is_nil, partition, range
}
