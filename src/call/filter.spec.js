const string = "filter string using call Array.prototype.filter #1"

function extractHash(value) {
  return Array.prototype.filter
    .call(value, function(val) {
      return val.match(/[#]/i)
    })
    .join("")
}

it("filter string using call", () => {
  expect(extractHash(string)).toBe("#")
})
