function solution(matrix) {
    
  // function to compare if arrays are equal (same val in same pos)
  const isEqual = function(a1, a2) {
      for(let i = 0; i < a1.length; i++) {
          if (a1[i] !== a2[i]) { 
              return false;
          }
      }
      return true;
  }
  
  // build array from the square
  const holder = [];
  for(let i = 0; i < matrix.length - 1; i++) {
      for(let j = 0; j < matrix[0].length - 1; j++) {
          const currSquare = [matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]]
          // Add unique squares to the holder
          let isUnique = true;
          holder.forEach(square => isEqual(square, currSquare) ? isUnique = false : null);
          if (isUnique) { holder.push(currSquare) }
      }
  }
  return holder.length;
}

console.log(solution([[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]])) // 6