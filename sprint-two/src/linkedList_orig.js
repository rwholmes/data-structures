var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);

    list[node.value] = node;

    if (list.tail !== null) {
      list.tail.next = node;
    } else {
      list.head = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    if (list.head !== null) {
      delete list[list.head.value];
      var oldHead = list.head;
      list.head = list.head.next ? list.head.next : null;

      return oldHead;
    }

    return null;
  };

  list.contains = function(target, node){
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

// node = node || list.head;
// console.log('new function looking for: ' + target);
// while (node.next !== null) {
//   console.log('checking node: ' + node.value);
//   if (node.value === target) {
//     console.log('found!');
//     return true;
//   }

//   node = node.next;
// }
// console.log('couldn"t find :(');
// return false;
