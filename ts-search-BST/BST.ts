import {TreeNode} from "./TreeNode";

export class BST {
    root : TreeNode | null;
    size : number = 0;

    constructor() {
        this.root = null;
    }

    insert(root: TreeNode, data: any){
        let node = new TreeNode(data);
        if(root == null){
            root = node;
            return root;
        }else{
            let temp: TreeNode = root;
            while (true){
                if(data < temp.value){
                    if(temp.left == null){
                        temp.left = node;
                        break;
                    }else {
                        temp = temp.left;
                    }
                }else {
                    if(temp.right == null){
                        temp.right = node;
                        break;
                    }else{
                        temp = temp.right;
                    }
                }
            }
            return root;
        }
    }
    preorder():void {
        this._preorder(this.root);
    }

    _preorder(root: TreeNode):void{
        if(root == null)return;
        console.log(root.value + "");
        this._preorder(root.left);
        this._preorder(root.right);
    }

    postOrder(root: TreeNode):void{
        if(root == null)return;
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value + '');
    }

    search(root: TreeNode,data: any): TreeNode {
        if (root == null) {
            return null;
        }
        if(data < root.value){
            return this.search(root.left,data);
        }else if(data > root.value){
            return this.search(root.right,data);
        }else {
            return root;
        }
    }

}