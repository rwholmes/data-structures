var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodes.push(newNode);
  if (toNode && (this.nodes.indexOf(toNode) >= 0)){
    this.edges.push([newNode, toNode]);
  }
};

Graph.prototype.contains = function(node){
  // returns boolean reflecting whether node gcan be found in the graph
};

Graph.prototype.removeNode = function(node){
  // removes node as well as any edges connected to that node
};

Graph.prototype.getEdge = function(fromNode, toNode){
  // should return a boolean reflecting whether the two nodes are connected
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
};

Graph.prototype.forEachNode = function(callback){
  // traverses through the graph calling a passed function once on each node
};

