function solution(a0) {
    
  const sumSquares = function(number) {
      const digits = number.toString().split('');
      let sumSq = 0;
      digits.map(d => sumSq += parseInt(d)**2);
      return sumSq;
  }
  
  const pastSums = [a0];
  let n = a0;
  while(!pastSums.includes(sumSquares(n))) {
      const newN = sumSquares(n)
      pastSums.push(newN);
      n = newN;
  }
  return pastSums.length + 1
}

console.log(solution(16)) // 9
console.log(solution(103)) // 4