function solution(symbol) {
  const d = parseInt(symbol);
  return isNaN(d) ? "not a digit" : (d % 2 ? "odd" : "even");
}

console.log(solution('5')) // odd
console.log(solution('8')) // even
console.log(solution('q')) // not a digit