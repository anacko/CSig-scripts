function solution(matrix) {
  return matrix.map((line, idx) => {
      const temp = line[idx];
      line[idx] = line[line.length - 1 - idx];
      line[line.length - 1 - idx] = temp;
      return line;
  })
}

console.log(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [[3, 2, 1], [4, 5, 6], [9, 8, 7]]