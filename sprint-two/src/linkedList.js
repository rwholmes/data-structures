var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);

    list[node.value] = node;

    if (list.tail !== null) {
      list.tail.next = node;
      node.previous = list.tail;
      list.tail = node;
      list.tail.next = list.head;
      list.head.previous = list.tail;
    } else {
      list[node.value].previous = list[node.value].next = node;
      list.head = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    if (list.head !== null) {
      delete list[list.head.value];
      var oldHead = list.head;
      list.head = list.head.next ? list.head.next : null;
      list.head.previous = list.tail;
      list.tail.next = list.head;
      return oldHead;
    }

    return null;
  };

  list.addToHead = function(value){
    var node = makeNode(value);
    list[node.value] = node;
    if(list.head !== null){
      list.tail.next = node;
      node.next = list.head;
      list.head.previous = node;
      list.head = node;
      list.head.previous = list.tail;
    }
    else {
      list[node.value].previous = list[node.value].next = node;
      list.head = node;
      list.tail = node;
    }
  }

  list.removeTail = function() {
    if(list.tail !== null) {
      delete list[list.tail.value];
      var oldTail = list.tail;
      list.tail = list.tail.previous ? list.tail.previous : null;
      list.tail.next = list.head;
      list.head.previous = list.tail;

      return oldTail;
    }

    return null;
  }

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
  node.previous = null;

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
