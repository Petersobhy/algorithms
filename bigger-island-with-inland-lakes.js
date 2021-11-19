function recursiveIslandsAndLakes(matrix) {
  var rows = matrix.length;
  var cols = matrix[0].length;
  var islands = [];

  var visited = [];

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      markOpenWater(matrix, visited, i, j, rows, cols);
    }
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (matrix[i][j] == 1 || matrix[i][j] == 0) {
        var island = getIsland(matrix, i, j, rows, cols);
        islands.push(island);
      }
    }
  }

  return islands;
}

function getIsland(matrix, x, y, rows, cols) {
  if (x < 0 || x >= rows || y < 0 || y >= cols || matrix[x][y] != 8) return []; // water or part of island

  matrix[x][y] = 0; // or 0 to exclude it on future calls

  var right = getIsland(matrix, x + 1, y, rows, cols); // right
  var left = getIsland(matrix, x - 1, y, rows, cols); // left
  var top = getIsland(matrix, x, y + 1, rows, cols); // top
  var bottom = getIsland(matrix, x, y - 1, rows, cols); // bottom

  return [[x, y], ...right, ...left, ...top, ...bottom];
}

function markOpenWater(matrix, visited, x, y, rows, cols) {
  if (
    x < 0 ||
    x >= rows ||
    y < 0 ||
    y >= cols ||
    matrix[x][y] != 0 ||
    visited[x + "," + y]
  )
    return;

  visited[x + "," + y] = true;

  if (x == 0 || x == rows - 1 || y == 0 || y == cols - 1) matrix[x][y] = 8;

  markOpenWater(matrix, visited, x + 1, y, rows, cols);
  markOpenWater(matrix, visited, x - 1, y, rows, cols);
  markOpenWater(matrix, visited, x, y + 1, rows, cols);
  markOpenWater(matrix, visited, x, y - 1, rows, cols);
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
