var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var topIndex = -1;
  // Implement the methods below

  instance.enqueue = function(value){
    size++;
    storage[topIndex++] = value;
  };

  instance.dequeue = function(){
    var index = (topIndex - 1) - (Object.keys(storage).length - 1);
    var item = storage[index];


    if (item !== undefined) {
      delete storage[index];
      size--;
    }

    return item;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
