const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
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
    let minValue = this.rootNode.data;

    findMin(this.rootNode);

    return minValue;

    function findMin(node) {
      if (node === null) return null;
      findMin(node.left);
      findMin(node.right);
      if (minValue > node.data && node.data !== null) {
        minValue = node.data;
      }
    }
  }

  max() {
    let maxValue = this.rootNode.data;

    findMax(this.rootNode);

    return maxValue;

    function findMax(node) {
      if (node === null) return null;
      findMax(node.left);
      findMax(node.right);
      if (maxValue < node.data && node.data !== null) {
        maxValue = node.data;
      }
    }
  }

};




