function Report() {}

Report.factory = function(type) {
  if (typeof Report[type] !== "function") {
    throw new Error(`${type} is not defined`)
  }

  if (typeof Report[type].prototype.process !== "function") {
    // inherit
    Report[type].prototype = new Report()
  }

  return new Report[type]()
}

Report.prototype.process = function(data) {
  this.data = data
}

Report.prototype.export = function() {
  return this.data
}

Report.CSV = function() {}
Report.JSON = function() {}

it("invoke Report.factory CSV", () => {
  var csv = Report.factory("CSV")
  var data = [["name"], ["thadeu"]]
  csv.process(data)

  expect(csv.export()).toBe(data)
})

it("invoke Report.factory JSON", () => {
  var json = Report.factory("JSON")
  var data = JSON.stringify([["name"], ["thadeu"]])
  json.process(data)

  expect(json.export()).toBe(data)
})
