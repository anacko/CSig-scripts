function solution(nCols, nRows, col, row) {
  const remCols = nCols - col + 1
  const remRows = nRows - row
  return remCols * remRows
}

console.log(solution(16, 11, 5, 3)) // 96