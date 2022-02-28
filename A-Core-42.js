function solution(statues) {
  statues.sort((a, b) => a - b);
  let sumMissing = 0;
  for(let i = 1; i < statues.length; i++) {
      sumMissing += statues[i] - statues[i - 1] - 1
  }
  return sumMissing;
}

console.log(solution([6, 2, 3, 8])) // 3