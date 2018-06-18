const sameType = x => y => typeof(x) === typeof(y)

module.exports = {
  String: sameType(""),
  Function: sameType(sameType),
  Object: sameType({}),
  Number: sameType(0),
  Null: x => x === null,
  Undefined: sameType(undefined),
  Array: x => Array.isArray(x)
}
