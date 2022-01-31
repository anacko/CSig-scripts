function solution(n, m) {
    
  // Source: https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor
  // Answer-specific: https://stackoverflow.com/a/17445307
  const findGCD = (a, b) => {
      if (a == 0) { return b; }
      while (b != 0) { (a > b) ? a -= b : b -= a; }
      return a;
  }
  
  return m + n + findGCD(m, n) - 2;
}

console.log(solution(3, 4)) // 6
console.log(solution(3, 3)) // 7