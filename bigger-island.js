function recursiveIslandsAndLakes(matrix) {
  var rows = matrix.length;
  var cols = matrix[0].length;
  var maxIsland = 0;

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (matrix[i][j] == 1) {
        var islandCount = markIsland(matrix, i, j, rows, cols);
        maxIsland = Math.max(maxIsland, islandCount);
      }
    }
  }

  return maxIsland;
}

function markIsland(matrix, x, y, rows, cols) {
  if (x < 0 || x >= rows || y < 0 || y >= cols || matrix[x][y] != 1) return 0; // water or part of island

  matrix[x][y] = 0; // or 0 to exclude it on future calls

  var count = 1;

  count += markIsland(matrix, x + 1, y, rows, cols); // right
  count += markIsland(matrix, x - 1, y, rows, cols); // left
  count += markIsland(matrix, x, y + 1, rows, cols); // top
  count += markIsland(matrix, x, y - 1, rows, cols); // bottom

  return count;
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
