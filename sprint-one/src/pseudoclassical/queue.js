var Queue = function() {
  this.storage = {};
  this.queueSize = 0;
  this.topIndex = -1;
};

Queue.prototype.enqueue = function(value){
  this.queueSize++;
  this.storage[this.topIndex++] = value;
};

Queue.prototype.dequeue = function(){
  var index = (this.topIndex - 1) - (Object.keys(this.storage).length - 1);
  var item = this.storage[index];


  if (item !== undefined) {
    delete this.storage[index];
    this.queueSize--;
  }

  return item;
};

Queue.prototype.size = function(){
  return this.queueSize;
};





