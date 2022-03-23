function solution(matrix, column) {
  return matrix.map(row => row[column])
}

console.log(solution([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2)) // [1, 0, 3]