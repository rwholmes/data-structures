var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.stackSize++] = value;
};


Stack.prototype.pop = function(){
  var item = this.storage[this.stackSize-1];
  if (item !== undefined) {
    delete this.storage[this.stackSize-1];
    this.stackSize--;
  }
  return item;
};

Stack.prototype.size = function(){
  return this.stackSize;
};
