const sameType = x => y => typeof (x) === typeof (y)

export const String = sameType("")
export const Function = sameType(sameType)
export const Object = sameType({})
export const Number = sameType(0)
export const Null = x => x === null
export const Undefined = sameType(undefined)
export const Array = global.Array.isArray

