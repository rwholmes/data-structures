var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  if (this.nodes.length === 1) {
    this.edges.push([this.nodes[0], newNode]);
  }
  this.nodes.push(newNode);
  if (toNode && (this.nodes.indexOf(toNode) >= 0)){
    this.edges.push([newNode, toNode]);
  }
};

Graph.prototype.contains = function(node){
  // returns boolean reflecting whether node gcan be found in the graph
  if (this.nodes.indexOf(node) >= 0) {
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  // removes node as well as any edges connected to that node
  var nodeIndex = this.nodes.indexOf(node);
  if (nodeIndex <=0 ){
    this.nodes.splice(nodeIndex, 1);
    for (var i=0; i<this.edges.length; i++) {
      if (this.edges[i][0] === node || this.edges[i][1] === node) {
        this.edges.splice(i,1);
      }
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  // should return a boolean reflecting whether the two nodes are connected
  for (var i=0; i<this.edges.length; i++){
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
      return true;
    }
    if (this.edges[i][1] === fromNode && this.edges[i][0] === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // creates edge between two nodes if they are both present in the graph
  if ((this.nodes.indexOf(fromNode) >= 0) && (this.nodes.indexOf(toNode) >= 0)){
    this.edges.push([fromNode, toNode]);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // removes the connection between two nodes
  for (var i=0; i<this.edges.length; i++) {
    if (this.edges[i].join() === [fromNode, toNode].join()) {
      this.edges.splice(i,1);
    }
  }
  if (this.edges.length === 0) {
    this.nodes = [];
  }
};

Graph.prototype.forEachNode = function(callback){
  // traverses through the graph calling a passed function once on each node
  for (var i=0; i<this.nodes.length; i++) {
    callback(this.nodes[i]);
  }
  for (var k=0; k<this.edges.length; k++){
    callback(this.edges[i][0]);
    callback(this.edges[i][1]);
  }
};









