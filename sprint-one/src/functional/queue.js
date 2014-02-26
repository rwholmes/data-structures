var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var topIndex = -1;
  // Implement the methods below

  instance.enqueue = function(value){
    console.log('enqueue: '+ value);
    size++;
    storage[topIndex++] = value;
  };

  instance.dequeue = function(){
    var index = (topIndex - 1) - (Object.keys(storage).length - 1);
    console.log(index);
    var item = storage[index];

    console.log('botton of queue: ' + item);

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
