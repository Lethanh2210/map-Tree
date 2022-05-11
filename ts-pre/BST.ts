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
}