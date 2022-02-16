function solution(n) {
  const hours = Math.floor(n / 60)
  const mins = n - hours*60
  
  const algs = (String(hours) + String(mins)).split('')
  const sumAlgs = algs.reduce((p, c) => p + parseInt(c), 0)
  return sumAlgs
}

console.log(solution(240)) // 4
console.log(solution(808)) // 14