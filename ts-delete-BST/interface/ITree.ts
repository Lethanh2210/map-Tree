import {TreeNode} from "../TreeNode";

export interface ITree{
    insert(root: TreeNode, e:number);

    size():number;

    delete(treeNode, e):void;

}