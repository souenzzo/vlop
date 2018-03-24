const count = n => is_null(n) ? 0 : Object.entries(n).length

const range = n => [...Array(n).keys()]

const is_array = x => Array.isArray(x)

const is_coll = x => (typeof(x) === "object")

const is_null = x => x === null

const first = ([x]) => x

const second = ([_, x]) => x

const is_zero = n => n === 0

const is_empty = coll => is_zero(count(coll))

const identity = n => n

const partition = (coll, n) => is_empty(coll) ? [] : concat([coll.splice(0, n)], partition(coll, n))

const contains = (m, k) => k in m

const get = (m, k, d) => contains(m, k) ? m[k] : d

const assoc = (m, k, v, ...vs) => (is_empty(vs) ? k ? {...m, ...{[k]: v}} : {...m} : assoc({...m, ...{[k]: v}}, ...vs))

const apply = (f, args) => f.apply(null, args)

const hashMap = (...kvs) => apply(assoc, concat([{}], kvs))

const reduce = (f, val, coll) => coll.reduce(f, val)

const mod = (a, b) => a % b

const div = (a, b) => a / b

const add = (...ns) => reduce((acc, n) => acc + n, 0, ns)

const mult = (...ns) => reduce((acc, n) => acc * n, 1, ns)

const and = (...ns) => reduce((acc, n) => acc && n, true, ns)

const or = (...ns) => reduce((acc, n) => acc || n, false, ns)

const map = (f, coll) => (is_array(coll) ? coll : Object.entries(or(coll, {}))).map(f)

const not = a => !a

const is_map = x => and(is_coll(x), not(is_array(x)))

const inc = n => add(n, 1)

const concat = (...colls) => reduce((acc, el) => acc.concat(el), [], colls)

const vals = coll => map(second, coll)

const keys = coll => map(first, coll)

const comp = (...fs) => (...args) => first(reduce((v, f) => [apply(f, v)], args, fs))

const update = (m, k, f) => assoc(m, k, f(get(m, k)))

const fnil = (f, v) => x => f(is_null(x) ? v : x)

const dissoc = (m, ...ks) => reduce((acc, k) => {
  let {[k]: _, ...rest} = acc
  return rest
}, m, ks)

module.exports = {
  assoc, map, keys, apply, reduce, vals, add, hashMap, inc, is_empty, identity, not,
  comp, update, fnil, dissoc
}
