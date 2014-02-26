var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
    // insert an item at the end
    storage[size++] = value;
  };

  instance.pop = function(){
    var item = storage[size-1];
    if (item !== undefined) {
      delete storage[size-1];
      size--;
    }
    return item;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
