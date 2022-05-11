"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BST_1 = require("./BST");
var tree = new BST_1.BST();
tree.root = tree.insert(tree.root, 4);
tree.root = tree.insert(tree.root, 2);
tree.root = tree.insert(tree.root, 3);
tree.root = tree.insert(tree.root, 1);
console.log(tree.root);
tree.preorder();
tree.postOrder(tree.root);
