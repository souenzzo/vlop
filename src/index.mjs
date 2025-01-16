// @ts-check

/** @type {function(any): function(any): boolean}  */
export const sameType = x => y => typeof (x) === typeof (y)

export const String = sameType('')
export const Function = sameType(sameType)
// export let Object = sameType({});
export const Number = sameType(0)

/**
 * @returns boolean
 * @param x
 */
export const Null = x => x === null
export const Undefined = sameType(undefined)
// export let Array = x => this.Array.isArray(x)

/** @type {function(...any): any}  */
export const or = (...ns) => reduce((acc, n) => acc || n, false, ns)

/** @type {function(...any): any}  */
export const and = (...ns) => reduce((acc, n) => acc && n, true, ns)

/** @type {function(any): boolean}  */
export const isNil = x => Null(x) || Undefined(x)

/** @type {function(any): boolean}  */
export const isColl = x => and(Object(x), not(isNil(x)))

/** @type {function(any): boolean}  */
export const isMap = x => and(isColl(x), not(Array(x)))

/** @type {function(any): boolean}  */
export const not = a => !a

/** @type {function(any): number}  */
export const count = n => isNil(n) ? 0 : Object.entries(n).length

/** @type {function(number): Array.<number>}  */
export const range = n => [...Array(n).keys()]

export const repeat = (n, x) => Array(n).fill(x)

export const conj = (coll, x) => [...coll, x]

export const juxt = (...fs) => x => reduce((acc, f) => conj(acc, f(x)), [], fs)

export const first = ([x]) => x

export const second = ([_, x]) => x

export const isZero = n => n === 0

// export let isEmpty = coll => isZero(count(coll))
export const isEmpty = coll => Object.entries(coll).length === 0

export const identity = n => n

export const splice = (coll, start, deleteCount, ...items) => [...coll].splice(start, deleteCount, ...items)

export const drop = (coll, n) => splice(coll, n, count(coll))

export const partition = (coll, n) => isEmpty(coll) ? [] : concat([splice(coll, 0, n)], partition(drop(coll, n), n))

export const contains = (m, k) => k in m

export const get = (m, k, d) => contains(m, k) ? m[k] : or(d, null)

export const assoc = (m, k, v, ...vs) => (isEmpty(vs) ? k ? { ...m, [k]: v } : m : assoc({ ...m, [k]: v }, ...vs))

export const apply = (f, args) => f.apply(null, args)

export const hashMap = (...kvs) => apply(assoc, concat([{}], kvs))

export const reduce = (f, val, [...coll]) => coll.reduce(f, val)

export const mod = (a, b) => a % b

export const div = (a, b) => a / b

export const add = (...ns) => reduce((acc, n) => acc + n, 0, ns)

export const mult = (...ns) => reduce((acc, n) => acc * n, 1, ns)

export const map = (f, coll) => (isMap(coll) ? Object.entries(coll) : or(coll, [])).map(f)

export const inc = n => add(n, 1)

export const concat = (...colls) => reduce((acc, el) => acc.concat(el), [], colls)

export const vals = coll => map(second, coll)

export const keys = coll => map(first, coll)

export const comp = (...fs) => (...args) => first(reduce((v, f) => [apply(f, v)], args, fs))

export const update = (m, k, f) => assoc(m, k, f(get(m, k)))

// export let fnil = (f, v) => x => f(isNil(x) ? v : x)

export const dissoc = (m, ...ks) => reduce((acc, k) => {
  const { [k]: _, ...rest } = acc
  return rest
}, m, ks)
