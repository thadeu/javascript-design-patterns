import object from "./"

function Person(name) {
  this._name = name
}

Person.prototype.name = function(name) {
  if (name) {
    return (this._name = name)
  }

  return this._name
}

describe("inherit prototypes with object()", () => {
  it("person inherits", () => {
    var person = new Person("alice")

    // inherit all prototypes
    var kid = object(Person)
    kid.name("kid name")

    expect(person.name()).toBe("alice")

    expect(typeof kid.name).toBe("function")
    expect(kid.name()).toBe("kid name")
  })
})
