const { all } = require("axios");

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }

        let current = this.root;
        while (current) {
            if (val < current.val) {
                if (current.left === null) {
                    current.left = new Node(val);
                    return this;
                } else {
                    current = current.left;
                }
            }
            if (val > current.val) {
                if (current.right === null) {
                    current.right = new Node(val);
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val, current = this.root) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }

        if (val < current.val) {
            if (current.left === null) {
                current.left = new Node(val);
                return this;
            }
            return this.insertRecursively(val, current.left);
        } else {
            if (current.right === null) {
                current.right = new Node(val);
                return this;
            }
            return this.insertRecursively(val, current.right);
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        if (!this.root) return undefined;

        let currentNode = this.root;
        let found = false;

        if (currentNode.val === val) return currentNode;

        while (currentNode && !found) {
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;
        return currentNode;
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val, current = this.root) {
        if (this.root === undefined) return undefined;

        if (val < current.val) {
            if (current.left === null) return undefined;
            return this.findRecursively(val, current.left);
        } else if (val > current.val) {
            if (current.right === null) return undefined;
            return this.findRecursively(val, current.right);
        }
        return current;
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {
        let allNodes = [];
        let current = this.root;

        function traverse(node) {
            allNodes.push(node.val);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }

        traverse(current);
        return allNodes;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {
        let allNodes = [];
        let current = this.root;

        function traverse(node) {
            node.left && traverse(node.left);
            allNodes.push(node.val);
            node.right && traverse(node.right);
        }

        traverse(current);
        return allNodes;
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {
        let allNodes = [];
        let current = this.root;

        function traverse(node) {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            allNodes.push(node.val);
        }

        traverse(current);
        return allNodes;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {
        let allNodes = [];
        let queue = [];
        let node = this.root;

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            allNodes.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return allNodes;
    }

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */

    remove(val) {}

    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */

    isBalanced() {}

    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */

    findSecondHighest() {}
}

module.exports = BinarySearchTree;
