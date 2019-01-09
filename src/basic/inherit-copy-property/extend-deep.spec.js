import { extendDeep } from "./"

it("invoke extend deep", () => {
  var dad = {
    name: "Adam",
    counts: [1, 2, 3, 4],
    reads: { paper: true },
    save: function() {
      return `saved!`
    },
  }

  var kid = extendDeep(dad)
  // kid.name = "Kid Adam"
  kid.counts.push("5")
  kid.reads.paper = false
  kid.save = function() {
    return "kid saved!"
  }

  // expected dad
  expect(dad.name).toBe("Adam")
  expect(dad.counts.toString()).toBe("1,2,3,4")
  expect(dad.reads.paper).toBe(true)
  expect(dad.save()).toBe("saved!")

  // expected dad
  // expect(kid.name).toBe("Kid Adam")
  expect(kid.counts.toString()).toBe("1,2,3,4,5")
  expect(kid.reads.paper).toBe(false)
  expect(kid.save()).toBe("kid saved!")
})
