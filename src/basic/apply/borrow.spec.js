var one = {
  name: "object",
  say: function(greet) {
    return `${greet}, ${this.name}`
  },
}

it("check attributes", () => {
  expect(one.name).toBe("object")
  expect(one.say("hello")).toBe("hello, object")
})

it("check attributes", () => {
  // apply to another object
  const another = {
    name: "another object",
  }

  expect(another.name).toBe("another object")
  expect(one.say.apply(another, ["hello"])).toBe("hello, another object")
})

it("check attributes", () => {
  // apply to another object
  const yetAnother = {
    name: "yetAnother object",
  }

  expect(yetAnother.name).toBe("yetAnother object")
  expect(one.say.apply(yetAnother, ["hello"])).toBe("hello, yetAnother object")
})
