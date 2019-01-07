export default function extendDeep(parent, child = {}) {
  for (let index in parent) {
    if (parent.hasOwnProperty(index)) {
      if (typeof parent[index] === "object") {
        // override index
        child[index] = Array.isArray(parent[index]) ? [] : {}

        // recursive extend
        // copy attributes from parent to child
        extendDeep(parent[index], child[index])
      } else {
        child[index] = parent[index]
      }
    }
  }

  return child
}
