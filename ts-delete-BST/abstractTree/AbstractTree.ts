import {ITree} from "../interface/ITree";
import {TreeNode} from "../TreeNode";

export abstract class AbstractTree implements ITree{
    insert(root: TreeNode, e: number){
    };

    size(): number {
        return 0;
    }

    delete(treeNode, e):void {
    }

}