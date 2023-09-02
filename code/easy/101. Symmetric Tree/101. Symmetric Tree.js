// make left side of mirror and right sid
function handleMirror(leftRoot, rightRoot) {
    if (leftRoot === null && rightRoot === null) return true

    if (leftRoot === null || rightRoot === null) return false

    return (leftRoot.val === rightRoot.val) && handleMirror(leftRoot.right, rightRoot.left) && handleMirror(leftRoot.left, rightRoot.right)
}

var isSymmetric = function (root) {
    let leftRoot = root
    let rightRoot = root

    return handleMirror(leftRoot, rightRoot)
};