/* exported makeQueue */

var queueMethods = {};


queueMethods.enqueue = function(value){
  this.queueSize++;
  this.storage[this.topIndex++] = value;
};

queueMethods.dequeue = function(){
  var index = (this.topIndex - 1) - (Object.keys(this.storage).length - 1);
  var item = this.storage[index];


  if (item !== undefined) {
    delete this.storage[index];
    this.queueSize--;
  }

  return item;
};

queueMethods.size = function(){
  return this.queueSize;
};


var makeQueue = function() {
  var queue = Object.create(queueMethods);

  queue.storage = {};
  queue.queueSize = 0;
  queue.topIndex = -1;

  return queue;
};



