function Parent() {}
function Child() {}

Child.prototype.say = function() {
  return "child said"
}

Parent.prototype.say = function() {
  return "child said"
}

describe("inherit functions", () => {
  it("not same instances", () => {
    var inherit = (function() {
      // proxy constructor
      var F = function() {}

      return function(C, P) {
        F.prototype = P.prototype
        C.prototype = new F()
        C.prototype.constructor = C
      }
    })()

    // Child inherit all methods from Parent
    inherit(Child, Parent)

    let child = new Child()
    let parent = new Parent()

    expect(child.constructor.name).not.toBe(parent.constructor.name)
    expect(typeof child.say).toBe("function")
    expect(child.say()).toBe("child said")
  })
})
