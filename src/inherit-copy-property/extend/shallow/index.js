export default function extendShallow(parent, child = {}) {
  for (let index in parent) {
    if (parent.hasOwnProperty(index)) {
      child[index] = parent[index]
    }
  }

  return child
}
