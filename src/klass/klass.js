export default function klass(props) {
  return function(Parent) {
    var Child, F, i

    // novo constructor
    Child = function() {
      if (Child.super && Child.super.hasOwnProperty("__construct")) {
        Child.super.__construct.apply(this, arguments)
      }

      if (Child.prototype.hasOwnProperty("__construct")) {
        Child.prototype.__construct.apply(this, arguments)
      }
    }

    // herança prototipica
    // funcao temporaria que herda todos os prototipos de parent
    Parent = Parent || Object
    F = function() {}
    F.prototype = Parent.prototype

    // prototype de child é agora a instancia de F(temp)
    Child.prototype = new F()

    // exemplo de herança da super class
    Child.super = Parent.prototype

    // tornando o constructor para nova class criada na herança
    Child.prototype.constructor = Child

    // herda todos os metodos da super class + os criados
    for (i in props) {
      Child.prototype[i] = props[i]
    }

    // retorna a nova class com todos metodos herdados + os criados nela
    return Child
  }
}
