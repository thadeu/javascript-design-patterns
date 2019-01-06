var klass = function(Parent, props) {
  var Child, F, i

  // novo constructor
  Child = function() {
    if (Child.uber && Child.uber.hasOwnProperty("__construct")) {
      Child.uber.__construct.apply(this, arguments)
    }

    if (Child.prototype.hasOwnProperty("__construct")) {
      Child.prototype.__construct.apply(this, arguments)
    }
  }
}
