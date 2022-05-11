"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
var TreeNode_1 = require("./TreeNode");
var BST = /** @class */ (function () {
    function BST() {
        this.size = 0;
        this.root = null;
    }
    BST.prototype.insert = function (root, data) {
        var node = new TreeNode_1.TreeNode(data);
        if (root == null) {
            root = node;
            return root;
        }
        else {
            var temp = root;
            while (true) {
                if (data < temp.value) {
                    if (temp.left == null) {
                        temp.left = node;
                        break;
                    }
                    else {
                        temp = temp.left;
                    }
                }
                else {
                    if (temp.right == null) {
                        temp.right = node;
                        break;
                    }
                    else {
                        temp = temp.right;
                    }
                }
            }
            return root;
        }
    };
    BST.prototype.preorder = function () {
        this._preorder(this.root);
    };
    BST.prototype._preorder = function (root) {
        if (root == null)
            return;
        console.log(root.value + "");
        this._preorder(root.left);
        this._preorder(root.right);
    };
    BST.prototype.postOrder = function (root) {
        if (root == null)
            return;
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value + '');
    };
    return BST;
}());
exports.BST = BST;
