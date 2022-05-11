
import {BST} from "./BST";

let tree: BST = new BST();
tree.root = tree.insert(tree.root, 4);
tree.root = tree.insert(tree.root, 2);
tree.root = tree.insert(tree.root, 3);
tree.root = tree.insert(tree.root, 1);

tree.inorder();

tree.deleteNode(3)

tree.inorder();



// tree.deleteNode("Tom");
// tree.inorder();
