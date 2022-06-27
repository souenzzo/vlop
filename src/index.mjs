export let sameType = x => y => typeof (x) === typeof (y)

export let String = sameType("");
export let Function = sameType(sameType);
// export let Object = sameType({});
export let Number = sameType(0);
export let Null = x => x === null;
export let Undefined = sameType(undefined);
// export let Array = x => this.Array.isArray(x)


// export let or = (...ns) => reduce((acc, n) => acc || n, false, ns)

export let and = (...ns) => reduce((acc, n) => acc && n, true, ns)

export let is_nil = x => Null(x) || Undefined(x)

export let is_map = x => and(is_coll(x), not(Array(x)))

export let not = a => !a

export let count = n => is_nil(n) ? 0 : Object.entries(n).length

export let range = n => [...Array(n).keys()]

export let repeat = (n, x) => Array(n).fill(x)

export let conj = (coll, x) => [...coll, x]

export let juxt = (...fs) => x => reduce((acc, f) => conj(acc, f(x)), [], fs)

// export let is_coll = x => and(Object(x), not(is_nil(x)))

export let first = ([x]) => x

export let second = ([_, x]) => x

export let is_zero = n => n === 0

// export let is_empty = coll => is_zero(count(coll))
export let is_empty = coll => Object.entries(coll).length == 0

export let identity = n => n

export let splice = (coll, start, deleteCount, ...items) => [...coll].splice(start, deleteCount, ...items)

export let drop = (coll, n) => splice(coll, n, count(coll))

export let partition = (coll, n) => is_empty(coll) ? [] : concat([splice(coll, 0, n)], partition(drop(coll, n), n))

export let contains = (m, k) => k in m

// export let get = (m, k, d) => contains(m, k) ? m[k] : or(d, null)

export let assoc = (m, k, v, ...vs) => (is_empty(vs) ? k ? {...m, [k]: v} : m : assoc({...m, [k]: v}, ...vs))

export let apply = (f, args) => f.apply(null, args)

export let hashMap = (...kvs) => apply(assoc, concat([{}], kvs))

export let reduce = (f, val, [... coll]) => coll.reduce(f, val)

export let mod = (a, b) => a % b

export let div = (a, b) => a / b

export let add = (...ns) => reduce((acc, n) => acc + n, 0, ns)

export let mult = (...ns) => reduce((acc, n) => acc * n, 1, ns)

// export let map = (f, coll) => (is_map(coll) ? Object.entries(coll) : or(coll, [])).map(f)

export let inc = n => add(n, 1)

export let concat = (...colls) => reduce((acc, el) => acc.concat(el), [], colls)

export let vals = coll => map(second, coll)

export let keys = coll => map(first, coll)

export let comp = (...fs) => (...args) => first(reduce((v, f) => [apply(f, v)], args, fs))

export let update = (m, k, f) => assoc(m, k, f(get(m, k)))

// export let fnil = (f, v) => x => f(is_nil(x) ? v : x)

export let dissoc = (m, ...ks) => reduce((acc, k) => {
  let {[k]: _, ...rest} = acc
  return rest
}, m, ks)
