function solution(l, r) {
    
  const sumDigits = function(number) {
      const dArr = number.toString().split('')
      let sumD = 0;
      dArr.map(d => sumD += parseInt(d))
      return sumD;
  }

  let sumPairs = 0;
  let a = l;
  while(a < r) {
      let upperLim = Math.min(r, a + sumDigits(a));
      for(let b = a + 1; b <= upperLim; b++) {
          if (a >= b - sumDigits(b)) {
              sumPairs++;
          }
      }
      a++;
  }
  return sumPairs;
}

console.log(solution(10, 12)) // 2