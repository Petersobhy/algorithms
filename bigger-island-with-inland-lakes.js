function recursiveIslandsAndLakes(matrix) {
  var rows = matrix.length;
  var cols = matrix[0].length;
  var islands = [];

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (matrix[i][j] == 1) {
        var island = getIsland(matrix, i, j, rows, cols);
        islands.push(island);
      }
    }
  }

  // add any inlland lakes
  for (var i = 0; i < islands.length; i++) {
    var island = islands[i];
    // loop
  }

  return islands;
}

function getIsland(matrix, x, y, rows, cols) {
  if (x < 0 || x >= rows || y < 0 || y >= cols || matrix[x][y] != 1) return []; // water or part of island

  matrix[x][y] = 0; // or 0 to exclude it on future calls

  var right = getIsland(matrix, x + 1, y, rows, cols); // right
  var left = getIsland(matrix, x - 1, y, rows, cols); // left
  var top = getIsland(matrix, x, y + 1, rows, cols); // top
  var bottom = getIsland(matrix, x, y - 1, rows, cols); // bottom

  return [[x, y], ...right, ...left, ...top, ...bottom];
}

// console.log(
//   recursiveIslandsAndLakes([
//     [1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
//     [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
//     [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
//   ])
// );

console.log(
  recursiveIslandsAndLakes([
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);
