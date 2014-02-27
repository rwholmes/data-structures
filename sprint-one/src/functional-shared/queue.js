/* global _ */
/* export makeQueue */

// Mixins with _.extend()
var queueMethods = {
  enqueue : function(value){
    this.queueSize++;
    this.storage[this.topIndex++] = value;
  },

  dequeue : function(){
    var index = (this.topIndex - 1) - (Object.keys(this.storage).length - 1);
    var item = this.storage[index];


    if (item !== undefined) {
      delete this.storage[index];
      this.queueSize--;
    }

    return item;
  },

  size : function(){
    return this.queueSize;
  }
};


var makeQueue = function(){
  var instance = {};

  instance.storage = {};
  instance.queueSize = 0;
  instance.topIndex = -1;

  _.extend(instance, queueMethods);

  return instance;
};
