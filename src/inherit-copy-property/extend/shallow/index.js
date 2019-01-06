export default function extendShallow(parent, child = {}) {
  let index

  for (index in parent) {
    if (parent.hasOwnProperty(index)) {
      child[index] = parent[index]
    }
  }

  return child
}
