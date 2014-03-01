var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, binaryTreeMethods);
  return newTree;

};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left !== null) {
      this.left.insert(value);
    }
    else {
      this.left = makeBinarySearchTree(value);
    }
  }
  else {
    if (this.right !== null) {
      this.right.insert(value);
    }
    else {
      this.right = makeBinarySearchTree(value);
    }
  }
}

binaryTreeMethods.contains = function(value) {
  var truthval = false;
  if (this.value === value) {
    return true;
  }
  if (this.left !== null) {
    truthval = truthval || this.left.contains(value);
  }
  if (this.right !== null) {
    truthval = truthval || this.right.contains(value);
  }
  return truthval;
}

binaryTreeMethods.depthFirstLog = function(callback) {

}



