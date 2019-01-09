import { extend } from "./"

it("shallow extend object", () => {
  var dad = { firstName: "Thadeu" }
  var kid = extend(dad, {
    lastName: "Jr",
  })

  expect(kid.firstName).toBe("Thadeu")
  expect(kid.lastName).toBe("Jr")
})

it("deep extend object", () => {
  var dad = {
    firstName: "Thadeu",
    counts: [1, 2],
    reads: { paper: true },
  }

  var kid = extend(dad)

  expect(kid.counts.toString()).toBe("1,2")
  expect(kid.reads.paper).toBe(true)

  kid.counts.push(3)
  expect(kid.counts.toString()).toBe("1,2,3")
})
