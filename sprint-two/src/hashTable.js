/* global makeLimitedArray, getIndexBelowMaxForKey */

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage[i] = this._storage[i] || this._storage.set(i, []);

  this._storage.get(i).push([k,v]);

  this.adjustLimit();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  for (var j = 0; j <= bucket.length - 1; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  for (var j = 0; j <= bucket.length - 1; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j, 1);
    }
  }
};

HashTable.prototype.adjustLimit = function(){
  var size = Object.keys(this._storage).length;

  if (size >= (3/4 * this._limit)) {
    this._limit *= 2;
  } else if (size <= (1/4 * this._limit)) {
    this._limit *= 1/2;
  }
};
