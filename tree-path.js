function treePath(root, n1, n2) {
  var tree = {};
  var moves = {};
  var path = [];

  for (var i = 0; i < root.length; i++) {
    var node = root[i];
    var left = root[2 * i + 1];
    var right = root[2 * i + 2];

    if (left != undefined) {
      moves[node + "-" + left] = "Left";
      moves[left + "-" + node] = "Up";
    }
    if (right != undefined) {
      moves[node + "-" + right] = "Right";
      moves[right + "-" + node] = "Up";
    }

    if (node != undefined)
      tree[node] = {
        left: left,
        right: right,
      };
  }
  // console.log(tree);
  console.log(moves);

  var path = lca(root[0], tree, n1, n2);

  console.log(path);

  var pathMoves = [];
  for (var s = 0; s < path.length - 1; s++) {
    console.log(path[s] + "-" + path[s + 1]);
    var move = moves[path[s] + "-" + path[s + 1]];
    pathMoves.push(move);
  }
  return pathMoves;
}

function lca(node, tree, n1, n2) {
  if (node == undefined) return [];
  if (node == n1 || node == n2) return [node];

  var left = lca(tree[node].left, tree, n1, n2);

  var right = lca(tree[node].right, tree, n1, n2);

  if (left.length === 0 && right.length === 0) return [];

  if (left.length !== 0 && right.length !== 0) {
    return [...left, node, ...right];
  }

  if (left.length !== 0)
    if (left[0] === n1 && left[left.length - 1] === n2)
      // LCA was found, return
      return left;
    else return [...left, node];

  if (right.length !== 0)
    if (right[0] === n1 && right[right.length - 1] === n2)
      // LCA was found, return
      return right;
    else return [...right, node];
}

console.log(
  treePath(
    [0, 1, 4, 2, 3, 5, 6, undefined, undefined, undefined, undefined, 7, 8],
    8,
    6
  )
);
