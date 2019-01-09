function Sequence() {
  var instance

  Sequence = function Sequence() {
    return instance
  }

  Sequence.prototype = this

  instance = new Sequence()
  instance.constructor = Sequence

  this.id = 0
  this.ids = []

  this.all = this.ids
  this.current = this.id

  return instance
}

Sequence.prototype.next = function() {
  let id = ++this.id
  this.ids.push(id)

  return this.id
}

Sequence.prototype.prev = function() {
  --this.id

  return this.id
}

it("invoke Sequence.next()", () => {
  const sequence = new Sequence()

  expect(sequence.next()).toBe(1)
  expect(sequence.next()).toBe(2)
  expect(sequence.next()).toBe(3)

  expect(sequence.prev()).toBe(2)
  expect(sequence.all).toEqual([1, 2, 3])
})
