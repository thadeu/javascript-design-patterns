export default function object(o) {
  function F() {}
  F.prototype = o.prototype
  return new F()
}
