import mixin from "./"

it("invoke mixin pattern", () => {
  var cake = mixin(
    { eggs: 2, large: [true] },
    { butter: 1, salted: true },
    { flour: "3 coups" },
    { sugar: "sure!" },
  )

  cake = mixin(cake, {
    mixed: true,
  })

  expect(Object.keys(cake)).toEqual([
    "eggs",
    "large",
    "butter",
    "salted",
    "flour",
    "sugar",
    "mixed",
  ])
})
