// Type #1
function Universe() {
  if (typeof Universe.instance === "object") {
    return Universe.instance
  }

  Universe.instance = this

  return this
}

describe("problem with inherit", () => {
  it("invoke singleton class", () => {
    Universe.prototype.thing = true
    var uni = new Universe()

    Universe.prototype.everything = true
    var uni_other = new Universe()

    expect(uni === uni_other).toBe(true)
    expect(uni.thing).toBe(true)
    expect(uni.everything).toBe(true)

    expect(uni_other.thing).toBe(true)
    expect(uni_other.everything).toBe(true)
  })
})
