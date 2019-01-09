function call() {}

call.slice = function() {
  return Array.prototype.slice.call(arguments, 1, 3)
}

it("slice arguments", () => {
  expect(call.slice(1, 2, 3, 4)).toEqual([2, 3])
})
