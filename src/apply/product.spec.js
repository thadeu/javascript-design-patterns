function Product(name, price) {
  this.name = name
  this.price = price
  this.category = "product"

  return this
}

Product.extend = function(context, props) {
  return this.apply(context, props)
}

it("product context", () => {
  const instance = new Product("coffee", "$ 2.00")
  expect(instance.name).toBe("coffee")
})

function Food(name, price) {
  Product.extend(this, arguments)
  this.category = "food"
}

it("food context", () => {
  const instance = new Food("pizza", "$ 5.00")
  expect(instance.name).toBe("pizza")
  expect(instance.category).toBe("food")
})

function Drink(name, price) {
  Product.extend(this, arguments)
  this.category = "drink"
}

it("drink#1 context", () => {
  const instance = new Drink("beer", "$ 10.00")
  expect(instance.name).toBe("beer")
  expect(instance.category).toBe("drink")
})
