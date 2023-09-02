var handleFunctions = function (root, level) {
    if (!root) return level;
    return Math.max(handleFunctions(root.left, level + 1), handleFunctions(root.right, level + 1));
};

var maxDepth = function (root) {
    return handleFunctions(root, 0);
};

