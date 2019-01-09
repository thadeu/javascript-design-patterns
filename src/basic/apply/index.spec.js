function call() {}

call.apply = function() {
  return Array.prototype.slice.apply(arguments, [0, 3])
}

it("slice arguments", () => {
  expect(call.apply(1, 2, 3, 4)).toEqual([1, 2, 3])
})

var numbers = [1, 2, 3, 4, 5, 99]

it("call in max numbers", () => {
  expect(Math.max.apply(null, numbers)).toBe(99)
})
