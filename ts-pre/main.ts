import {BST} from "./BST";

let tree = new BST();
tree.root = tree.insert(tree.root,4);
tree.root = tree.insert(tree.root,2);
tree.root = tree.insert(tree.root,3);
tree.root = tree.insert(tree.root,1);

console.log(tree.root);
tree.preorder();