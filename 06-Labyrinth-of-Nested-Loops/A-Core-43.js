function solution(n) {
  if (n === 1) return true;
  for(let i = 0; i < n; i++) {
      const expLimit = Math.floor(Math.log(n, i))
      for(let j = 1; j <= expLimit; j++) {
          if (i**j === n) {
              return true; 
          }
      }
  }
  return false;
}

console.log(solution(125)) // true
console.log(solution(72)) // false