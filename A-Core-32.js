function solution(n) {
  const nArr = [];
  n.toString().split('').reverse().map(digit => nArr.push(parseInt(digit)))
  const roundedN = [];
  for(i = 0; i < nArr.length - 1; i++) {
      if(nArr[i] >= 5) nArr[i+1]++;
      roundedN.push(0);
  }
  roundedN.push(nArr[nArr.length - 1]);
  return parseInt(roundedN.reverse().join(''))
}

console.log(solution(15)) // 20
console.log(solution(1234)) // 1000
console.log(solution(1445)) // 2000