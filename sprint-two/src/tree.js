/* global _ */
/* exported makeTree */

var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = makeTree(value);
  tree.parent = this;
  if (this.children === undefined) {
    this.children = [];
    this.children.push(tree);
  } else {
    this.children.push(tree);
  }
};

treeMethods.contains = function(target){
  var result = false;
  if (this.value === target) {
    result = true;
  }
  if (this.children !== undefined) {
    for (var i=0; i <this.children.length; i++) {
      result = result || this.children[i].contains(target);
    }
  }

  return result;
};

treeMethods.removeFromParent = function(){

};
