function treePath(root, n1, n2) {
  var tree = {};

  for (var i = 0; i < root.length; i++) {
    var node = root[i];
    var left = root[2 * i + 1];
    var right = root[2 * i + 2];

    if (node != undefined)
      tree[node] = {
        left: left,
        right: right,
      };
  }

  return lca(root[0], tree, n1, n2);
}

function lca(root, tree, n1, n2) {
  if (root == undefined) return null;
  if (root == n1 || root == n2) return root;

  var left = lca(tree[root].left, tree, n1, n2);
  var right = lca(tree[root].right, tree, n1, n2);

  var result =
    left != null && right != null
      ? root
      : left != null
      ? left
      : right != null
      ? right
      : null;

  return result;
}

console.log(
  treePath(
    [0, 1, 4, 2, 3, 5, 6, undefined, undefined, undefined, undefined, 7, 8],
    3,
    5
  )
); // 0

console.log(
  treePath(
    [0, 1, 4, 2, 3, 5, 6, undefined, undefined, undefined, undefined, 7, 8],
    7,
    6
  )
); // 4
