function SecureRandom() {}

SecureRandom.uuid = function() {
  var time = new Date().getTime()
  var pattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"

  return pattern.replace(/[xy]/g, function(c) {
    var r = (time + Math.random() * 16) % 16 | 0
    time = Math.floor(time / 16)

    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16)
  })
}

SecureRandom.base64 = function(text = Math.random()) {
  return btoa(
    encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, function toSolidBytes(
      match,
      p1,
    ) {
      return String.fromCharCode("0x" + p1)
    }),
  )
}

it("invoke SecureRandom.uuid()", () => {
  const uuid = SecureRandom.uuid()
  const regex = /(\w{8})-(\w{4})-(\w{4})-(\w{4})-(\w{12})/gi

  expect(regex.test(uuid)).toBe(true)
})

it("invoke SecureRandom.base64()", () => {
  const uuidV1 = SecureRandom.base64()
  const uuidV2 = SecureRandom.base64()
  const uuidV3 = SecureRandom.base64()

  expect(uuidV1).toBeDefined()
  expect(uuidV1 !== uuidV2).toBeTruthy()
  expect((uuidV1 !== uuidV2) !== uuidV3).toBeTruthy()
})
