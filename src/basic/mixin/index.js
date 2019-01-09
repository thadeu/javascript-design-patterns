export default function mixin() {
  // new object will be returned
  const child = {}
  const { keys } = Object

  const extendProp = (value, index) => {
    for (let prop in arguments[value]) {
      if (arguments[value].hasOwnProperty(prop)) {
        child[prop] = arguments[value][prop]
      }
    }
  }

  keys(arguments).forEach(extendProp)

  return child
}
