import {TreeNode} from "./TreeNode";
import {AbstractTree} from "./abstractTree/AbstractTree";

export class BST extends AbstractTree{
    root : TreeNode;
    length: number = 0;

    constructor() {
        super();
        this.root = null;
    }

    // BST(objects: E[]){
    //     for (let i = 0; i < objects.length; i++) {
    //         this.insert(objects[i]);
    //     }
    // }

    size():number{
        return this.length;
    }

    createNewNode(e: number): TreeNode {
        return new TreeNode(e);
    }

    insert(root: TreeNode, element: number){
        let node = new TreeNode(element);
        if(root == null){
            root = node;
            return root;
        }else{
            let temp: TreeNode = root;
            while(true){
                if(element > temp.value){
                    if(temp.right == null){
                        temp.right = node;
                        break;
                    }else{
                        temp = temp.right;
                    }
                }else{
                    if(temp.left == null){
                        temp.left = node;
                        break;
                    }else{
                        temp = temp.left;
                    }

                }
            }
            return root;
        }

    }

    deleteNode(e) {
        this.root = this.delete(this.root,e);
    }

    delete(treeNode, e) {
        if(treeNode === null){
            return null;
        }
        if(e < treeNode.value){
            treeNode.left = this.delete(treeNode.left,e);
            return treeNode;
        }else if(e> treeNode.value){
            treeNode.right = this.delete(treeNode.right,e);
            return treeNode;
        }else{
            if(treeNode.left == null && treeNode.right == null){
                treeNode = null;
                return treeNode;
            }else if(treeNode.left === null){
                treeNode = treeNode.right;
                return treeNode;
            }else {
                treeNode = treeNode.left;
                return treeNode;
            }
            let node: TreeNode = this.findMinLeft(treeNode.right);
            treeNode.value = node.value;
            treeNode.right = this.delete(treeNode.right,node.value);
            return treeNode;
        }

    }

    findMinLeft(treeNode){
        if(treeNode.left === null){
            return treeNode;
        }else
            return this.findMinLeft(treeNode.left);
    }

    inorder():void {
        this._inorder(this.root);
    }

    _inorder(root: TreeNode): void {
        if (root == null) return;
        this._inorder(root.left);
        console.log(root.value + " ");
        this._inorder(root.right);
    }
}