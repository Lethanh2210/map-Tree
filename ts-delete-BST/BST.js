"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
var TreeNode_1 = require("./TreeNode");
var AbstractTree_1 = require("./abstractTree/AbstractTree");
var BST = /** @class */ (function (_super) {
    __extends(BST, _super);
    function BST() {
        var _this = _super.call(this) || this;
        _this.length = 0;
        _this.root = null;
        return _this;
    }
    // BST(objects: E[]){
    //     for (let i = 0; i < objects.length; i++) {
    //         this.insert(objects[i]);
    //     }
    // }
    BST.prototype.size = function () {
        return this.length;
    };
    BST.prototype.createNewNode = function (e) {
        return new TreeNode_1.TreeNode(e);
    };
    BST.prototype.insert = function (root, element) {
        var node = new TreeNode_1.TreeNode(element);
        if (root == null) {
            root = node;
            return root;
        }
        else {
            var temp = root;
            while (true) {
                if (element > temp.value) {
                    if (temp.right == null) {
                        temp.right = node;
                        break;
                    }
                    else {
                        temp = temp.right;
                    }
                }
                else {
                    if (temp.left == null) {
                        temp.left = node;
                        break;
                    }
                    else {
                        temp = temp.left;
                    }
                }
            }
            return root;
        }
    };
    BST.prototype.deleteNode = function (e) {
        this.root = this.delete(this.root, e);
    };
    BST.prototype.delete = function (treeNode, e) {
        if (treeNode === null) {
            return null;
        }
        if (e < treeNode.value) {
            treeNode.left = this.delete(treeNode.left, e);
            return treeNode;
        }
        else if (e > treeNode.value) {
            treeNode.right = this.delete(treeNode.right, e);
            return treeNode;
        }
        else {
            if (treeNode.left == null && treeNode.right == null) {
                treeNode = null;
                return treeNode;
            }
            else if (treeNode.left === null) {
                treeNode = treeNode.right;
                return treeNode;
            }
            else {
                treeNode = treeNode.left;
                return treeNode;
            }
            var node = this.findMinLeft(treeNode.right);
            treeNode.value = node.value;
            treeNode.right = this.delete(treeNode.right, node.value);
            return treeNode;
        }
    };
    BST.prototype.findMinLeft = function (treeNode) {
        if (treeNode.left === null) {
            return treeNode;
        }
        else
            return this.findMinLeft(treeNode.left);
    };
    BST.prototype.inorder = function () {
        this._inorder(this.root);
    };
    BST.prototype._inorder = function (root) {
        if (root == null)
            return;
        this._inorder(root.left);
        console.log(root.value + " ");
        this._inorder(root.right);
    };
    return BST;
}(AbstractTree_1.AbstractTree));
exports.BST = BST;
