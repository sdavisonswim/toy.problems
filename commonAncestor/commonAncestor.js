// Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class


var Tree = function() {
  this.children = [];
};

/**
 * add an immediate child
 */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(node1, node2) {
  var path1 = this.getAncestorPath(node1);
  var path2 = this.getAncestorPath(node2);

  var closest = null
  if(node1 && node2) {
    for(var x = 0; x < path1.length; x++) {
      if(path2.includes(path1[x])) {
        closest = path1[x];
      }
    }
  }
  return closest;

}

Tree.prototype.getAncestorPath = function(target) {
  var resultPaths = [];
  function innerRecurse(node) {
    //push every path into resultPaths
    //return the array with target in it
    if(node.isDescendant(target) || node === target){
      resultPaths.push(node);
    }
    node.children.forEach(innerRecurse);
  }
  innerRecurse(this);
  if(resultPaths.length === 0){
    return null;
  }
  return resultPaths;
}

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
 * remove an immediate child
 */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};