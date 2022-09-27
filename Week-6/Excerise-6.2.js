/**
 * Problem 6.2 Spiral Order Matrix II
 *
 * Problem Description: Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.
 *
 * Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
 * You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

const spiralOrder = (matrix) => {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return matrix;
  }

  let rowBegin = 0,
    rowEnd = matrix.length - 1,
    colBegin = 0,
    colEnd = matrix[0].length - 1,
    result = [];

  while (rowBegin <= rowEnd || colBegin <= colEnd) {
    // left -> right
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }

    if (rowBegin === rowEnd) break;

    // right -> bottom
    rowBegin++;
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }

    if (colBegin === colEnd) break;

    // bottom -> left
    colEnd--;
    for (let i = colEnd; i >= colBegin; i--) {
      result.push(matrix[rowEnd][i]);
    }

    if (rowBegin === rowEnd) break;
    // left bootom -> top
    rowEnd--;
    for (let i = rowEnd; i >= rowBegin; i--) {
      result.push(matrix[i][colBegin]);
    }

    if (colBegin === colEnd) break;

    colBegin++;
  }

  return result;
};

const spiralOrder2 = (matrix) => {
  let result = [];

  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }

  let rows = matrix.length,
    cols = matrix[0].length,
    x = 0,
    y = 0;

  while (rows > 0 && cols > 0) {
    if (rows === 1) {
      for (let i = 0; i < cols; i++) {
        result.push(matrix[x][y++]);
      }
      break;
    } else if (cols === 1) {
      for (let i = 0; i < rows; i++) {
        result.push(matrix[x++][y]);
      }
      break;
    }

    for (let i = 0; i < cols - 1; i++) {
      result.push(matrix[x][y++]);
    }
    for (let i = 0; i < rows - 1; i++) {
      result.push(matrix[x++][y]);
    }
    for (let i = 0; i < cols - 1; i++) {
      result.push(matrix[x][y--]);
    }
    for (let i = 0; i < rows - 1; i++) {
      result.push(matrix[x--][y]);
    }
    x++;
    y++;
    cols -= 2;
    rows -= 2;
  }

  return result;
};

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder2(input));

// Time complexity - O(m.n) -> We need to iterate through all the elements of the matrix m*n
// Space complexity - O(m.n) -> creating an array of length m.n
