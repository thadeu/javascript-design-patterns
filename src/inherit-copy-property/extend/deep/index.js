export default function extendDeep(parent, child = {}) {
  let index
  const toStr = Object.prototype.toString
  const astr = "[object Array]"

  for (index in parent) {
    if (parent.hasOwnProperty(index)) {
      if (typeof parent[index] === "object") {
        child[index] = toStr.call(parent[index]) === astr ? [] : {}
        extendDeep(parent[index], child[index])
      } else {
        child[index] = parent[index]
      }
    }
  }

  return child
}
