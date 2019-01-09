function Car() {}

Car.factory = function(type) {
  // error case constructor not exists
  if (typeof Car[type] === "undefined") {
    throw new Error(`Type : ${type} : doesnt exist`)
  }

  // in this case eu have to constructor runtime
  if (typeof Car[type].prototype.drive !== "function") {
    Car[type].prototype = new Car()
  }

  // create a new instance
  return new Car[type]()
}

Car.prototype.drive = function() {
  return `Vroom, I have ${this.doors} doors`
}

Car.Compact = function() {
  this.doors = 4
}

Car.Convertible = function() {
  this.doors = 2
}

Car.SUV = function() {
  this.doors = 6
}

it("invoke factory Compact", () => {
  var corolla = Car.factory("Compact")
  expect(corolla.doors).toBe(4)
  expect(corolla.drive()).toBe(`Vroom, I have 4 doors`)
})

it("invoke factory Convertible", () => {
  var car = Car.factory("Convertible")
  expect(car.doors).toBe(2)
  expect(car.drive()).toBe(`Vroom, I have 2 doors`)
})

it("invoke factory SUV", () => {
  var car = Car.factory("SUV")
  expect(car.doors).toBe(6)
  expect(car.drive()).toBe(`Vroom, I have 6 doors`)
})

it("invoke unexists factory method", () => {
  expect(() => {
    Car.factory("Other")
  }).toThrow()
})
