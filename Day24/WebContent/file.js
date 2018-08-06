var o = new Object();
o.name = 'kavita';
o.lastName = 'varshney';
o.someFunction = function() {
   console.log(this.name);
}

// Better way
var o = {
   name: 'kavita',
   lastName = 'varshney',
   someFunction : function() {
      console.log(this.name);
   }
};