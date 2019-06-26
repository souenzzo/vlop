import * as is from "/souenzzo/is.js"

export const or = (...ns) => reduce((acc, n) => acc || n, false, ns)

export const and = (...ns) => reduce((acc, n) => acc && n, true, ns)

export const is_nil = x => or(is.Null(x), is.Undefined(x))

export const is_map = x => and(is_coll(x), not(is.Array(x)))

export const not = a => !a

export const count = n => is_nil(n) ? 0 : Object.entries(n).length

export const range = n => [...Array(n).keys()]

export const repeat = (n, x) => Array(n).fill(x)

export const conj = (coll, x) => [...coll, x]

export const juxt = (...fs) => x => reduce((acc, f) => conj(acc, f(x)), [], fs)

export const is_coll = x => and(is.Object(x), not(is_nil(x)))

export const first = ([x]) => x

export const second = ([_, x]) => x

export const is_zero = n => n === 0

export const is_empty = coll => is_zero(count(coll))

export const identity = n => n

export const splice = (coll, start, deleteCount, ...items) => [...coll].splice(start, deleteCount, ...items)

export const drop = (coll, n) => splice(coll, n, count(coll))

export const partition = (coll, n) => is_empty(coll) ? [] : concat([splice(coll, 0, n)], partition(drop(coll, n), n))

export const contains = (m, k) => k in m

export const get = (m, k, ...[d]) => contains(m, k) ? m[k] : d

export const assoc = (m, k, v, ...vs) => (is_empty(vs) ? k ? {...m, ...{[k]: v}} : {...m} : assoc({...m, ...{[k]: v}}, ...vs))

export const apply = (f, args) => f.apply(null, args)

export const hashMap = (...kvs) => apply(assoc, concat([{}], kvs))

export const reduce = (f, val, coll) => or(coll, []).reduce(f, val)

export const mod = (a, b) => a % b

export const div = (a, b) => a / b

export const add = (...ns) => reduce((acc, n) => acc + n, 0, ns)

export const mult = (...ns) => reduce((acc, n) => acc * n, 1, ns)

export const map = (f, coll) => (is_map(coll) ? Object.entries(coll) : or(coll, [])).map(f)

export const inc = n => add(n, 1)

export const concat = (...colls) => reduce((acc, el) => acc.concat(el), [], colls)

export const vals = coll => map(second, coll)

export const keys = coll => map(first, coll)

export const comp = (...fs) => (...args) => first(reduce((v, f) => [apply(f, v)], args, fs))

export const update = (m, k, f) => assoc(m, k, f(get(m, k)))

export const fnil = (f, v) => x => f(is_nil(x) ? v : x)

export const dissoc = (m, ...ks) => reduce((acc, k) => {
  let {[k]: _, ...rest} = acc
  return rest
}, m, ks)
