function U1() {
  var instance

  U1 = function U1() {
    return instance
  }

  U1.prototype = this

  instance = new U1()
  instance.constructor = U1

  this.start_time = 0
  this.end_time = 60

  return instance
}

U1.prototype.nothing = true
var u1 = new U1()

// dead prototype method
U1.prototype.everything = true
var u2 = new U1()

it("invoke two instances with problema", () => {
  expect(u1 === u2).toBe(true)
  expect(u1.nothing).toBe(true)
  expect(u1.everything).toBe(true)
  expect(u2.nothing).toBe(true)
  expect(u2.everything).toBe(true)
  expect(u1.constructor === U1).toBe(true)
  expect(u2.constructor === U1).toBe(true)
})

// immediate function

var U2
;(function() {
  var instance

  U2 = function U2() {
    if (instance) {
      return instance
    }

    instance = this

    this.start_time = 0
    this.end_time = 60

    return instance
  }
})()

U2.prototype.nothing = true
var uu1 = new U2()

// dead prototype method
U2.prototype.everything = true
var uu2 = new U2()

it("invoke two instances with problema", () => {
  expect(uu1 === uu2).toBe(true)
  expect(uu1.nothing).toBe(true)
  expect(uu1.everything).toBe(true)
  expect(uu2.nothing).toBe(true)
  expect(uu2.everything).toBe(true)
  expect(uu1.constructor === U2).toBe(true)
  expect(uu2.constructor === U2).toBe(true)
})
