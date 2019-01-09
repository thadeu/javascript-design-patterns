import klass from "./klass"

var Man = klass({
  __construct: function(name) {
    this._name = name
  },
  name: function(name) {
    if (name) {
      this._name = name
      return this
    }

    return `My name is ${this._name}`
  },
})()

describe("invoke klass", () => {
  describe("when create a without parent", () => {
    it("create a Man klass", () => {
      var man = new Man("Gustav") // invoked construct

      expect(man instanceof Man).toBe(true)
      expect(man.name()).toBe("My name is Gustav")
    })
  })

  describe("when create a inherit methods", () => {
    it("create a Man klass {}", () => {
      // herda tudo de Man
      // metodos, atributos e etc..
      var SuperMan = klass()(Man)
      var superMan = new SuperMan()
      superMan.name("Igor")

      expect(superMan instanceof Man).not.toBe()
      expect(superMan instanceof SuperMan).toBe(true)
      expect(superMan.name()).toBe("My name is Igor")
    })
  })

  describe("when create a override methods in the parent", () => {
    it("create a Man klass {}", () => {
      // herda tudo de Man
      // metodos, atributos e etc..
      var SuperMan = klass({
        name: function(name) {
          if (name) {
            this._name = name
            return this
          }

          return `SuperMan is ${this._name}`
        },
      })(Man)

      var superMan = new SuperMan()
      superMan.name("Igor")

      expect(superMan instanceof Man).not.toBe()
      expect(superMan instanceof SuperMan).toBe(true)
      expect(superMan.name()).toBe("SuperMan is Igor")
    })
  })
})
