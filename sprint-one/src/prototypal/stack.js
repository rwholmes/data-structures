/* exported makeStack */

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.stackSize++] = value;
};

stackMethods.pop = function(){
  var item = this.storage[this.stackSize-1];
  if (item !== undefined) {
    delete this.storage[this.stackSize-1];
    this.stackSize--;
  }
  return item;
};

stackMethods.size = function(){
  return this.stackSize;
};

var makeStack = function(){
  var stack = Object.create(stackMethods);

  stack.storage = {};
  stack.stackSize = 0;

  return stack;
};
