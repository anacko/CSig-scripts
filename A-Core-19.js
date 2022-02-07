function solution(a, b) {
  let sumOnes = 0;
  for(let i = a; i <= b; i++) {
      const binI = i.toString(2).split('')
      binI.map(digit => digit === '1' ? sumOnes++ : null);
  }
  return sumOnes;
}

console.log(solution(2, 7)) // 11