const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports =
class BinarySearchTree {
  constructor () {
    this.rootNode = new Node(null);
  };

  root() {
    if (this.rootNode.left === null && this.rootNode.right === null) return null;
    return this.rootNode;
  }

  add(data) {
    addNode(data, this.rootNode);

    function addNode(data, node) {
      if (node.data === null) {
        node.data = data;
      }

      if (data > node.data) {
        if (node.right) {
         addNode(data, node.right);
        } else {
          node.right = new Node(data);
        }
      } else if (data < node.data) {
        if (node.left) {
          addNode(data, node.left);
        } else {
          node.left = new Node(data);
        }
      }
    }

  }

  has(data) {
    if (this.rootNode) {
      return !!hasNode(data, this.rootNode);
    } else {
      return false;
    }


    function hasNode(data, node) {
      if (node === null) return false;
      if (node.data === data) return true;
      if (node.data === null) {
        return hasNode(data, node.right) || hasNode(data, node.left);
      }
      if (data > node.data) {
        if (node.right) {
          return hasNode(data, node.right);
        }
      }
      if (data < node.data) {
        if (node.left) {
          return hasNode(data, node.left);
        }
      }
    }

  }

  find(data) {
    if (this.rootNode) {
      return findNode(data, this.rootNode) || null;
    } else {
      return false;
    }

    function findNode(data, node) {
      if (node === null) return null;
      if (node.data === null) {
        return findNode(data, node.right) || findNode(data, node.left);
      }
      if (node.data === data) return node;
      else {
        if (data > node.data) {
          return findNode(data, node.right);
        } else if (data < node.data) {
          return findNode(data, node.left);
        }
      }
    }

  }

  remove(data) {
    if (this.has(data)) {
      removeNode(this.find(data));
    }

    function removeNode(node) {
      if (node === null) return null;
      node.data = null;

    }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

};

// const tree = new BinarySearchTree();
//
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
//
// console.log(JSON.stringify(tree));
//
// tree.remove(9);
// tree.remove(14);
// tree.remove(2);
// tree.remove(6);
// tree.remove(128);
// tree.remove(8);
// tree.remove(31);
// tree.remove(54);
// tree.remove(1);
//
// console.log(JSON.stringify(tree));
//
// console.log(tree.has(14));
// console.log(tree.has(8));
// console.log(tree.has(9));
// console.log(tree.has(2));
// console.log(tree.has(128));
// console.log(tree.has(31));
// console.log(tree.has(54));
// console.log(tree.has(1));


