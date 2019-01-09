function Model(attrs) {
  this._attrs = attrs

  for (let name in attrs) {
    if (name === "id") {
      this["id"] = attrs["id"]
    }

    this[name] = attrs[name]
  }
}

Model.prototype.create = function() {
  return "created data on database"
}

Model.build = function(attrs) {
  return new Model(attrs)
}

it("invoke Model", () => {
  const model = new Model({
    id: "2",
    name: "User",
    last_sigin_at: new Date().toDateString(),
  })

  expect(model.name).toBe("User")
  expect(model.last_sigin_at).toBe(new Date().toDateString())
})

it("invoke User", () => {
  const user = Model.build({
    id: 1,
    firstName: "Thadeu",
    lastName: "Esteves",
    imersion_at: "13/04/2013",
  })

  expect(user.firstName).toBe("Thadeu")
  expect(user.lastName).toBe("Esteves")
  expect(user.imersion_at).toBe("13/04/2013")
  expect(user.create()).toBe("created data on database")
})

it("invoke AdminUser", () => {
  const user = Model.build({
    id: 1,
    firstName: "Fulano",
  })

  const adminUser = Model.build({
    id: Math.random(),
    firstName: "Thadeu",
    lastName: "Esteves",
    user_id: user.id,
  })

  expect(adminUser.firstName).toBe("Thadeu")
  expect(adminUser.lastName).toBe("Esteves")
  expect(adminUser.user_id).toBe(1)
  expect(adminUser.create()).toBe("created data on database")
})
