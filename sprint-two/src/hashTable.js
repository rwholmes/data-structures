var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage[i] = v;

  this.adjustLimit();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  return this._storage[i];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  delete this._storage[i];

  this.adjustLimit();
};

HashTable.prototype.adjustLimit = function(){
  var size = Object.keys(this._storage).length;

  if (size >= this._limit) {
    this._limit *= 2;
  } else if (size < (this._limit * 1/2)) {
    this._limit *= 1/2;
  }
};
