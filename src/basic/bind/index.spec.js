var one = {
  name: "object",
  say: function(greet) {
    return `${greet}`
  },
}

var toAnother = {
  name: "Yet another object",
}

// USE bind pattern

function bind(binded, ctx) {
  return function() {
    return binded.apply(ctx, [].slice.call(arguments))
  }
}

it("invoke say yetAnother", () => {
  var said = bind(one.say, toAnother)

  expect(said("HAHA")).toBe("HAHA")
})
