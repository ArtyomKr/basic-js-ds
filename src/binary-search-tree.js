const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  };

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode) {
      addNode(data, this.rootNode);
    } else {
      this.rootNode = new Node(data);
    }

    function addNode(data, node) {
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
      if (data > node.data) {
        if (node.right && node.right.data === data) {
          return true;
        } else if (node.right) {
          return hasNode(data, node.right);
        }
      } else if (data < node.data) {
        if (node.left && node.left.data === data) {
          return true
        } else if (node.left) {
          return hasNode(data, node.left);
        }
      }
    }

  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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
