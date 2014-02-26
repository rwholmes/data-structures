/* export extendStack makeStack */

// Mixins with methods
var extendStack = function(obj) {
  obj.push = function(value) {
    this.storage[this.stackSize++] = value;
  };
  obj.pop = function(){
    var item = this.storage[this.stackSize-1];
    if (item !== undefined) {
      delete this.storage[this.stackSize-1];
      this.stackSize--;
    }
    return item;
  };
  obj.size = function(){
    return this.stackSize;
  };
  return obj;
};

// Mixins with _.extend()
var stackMethods = {
  push : function(value) {
    this.storage[this.stackSize++] = value;
  },
  pop : function(){
    var item = this.storage[this.stackSize-1];
    if (item !== undefined) {
      delete this.storage[this.stackSize-1];
      this.stackSize--;
    }
    return item;
  },
  size : function(){
    return this.stackSize;
  }
};

var makeStack = function(){
  // var instance = extendStack({});
  var instance = {};

  _.extend(instance, stackMethods);

  instance.storage = {};
  instance.stackSize = 0;

  return instance;
};
