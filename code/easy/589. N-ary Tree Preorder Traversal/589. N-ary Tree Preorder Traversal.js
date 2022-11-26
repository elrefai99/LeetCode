var preorder = function(root, output = []) {
    if(!root) return output;
    output.push(root.val)
    for(const child of root.children) {
        preorder(child, output);
    }
    return output;
};