function solution(s, t) {

  let counter = 0;
  
  tArr = t.split('');
  for(const e of s) {
      const p = tArr.indexOf(e);
      // remove from array if found, else substitution is required (counter++)
      p !== -1 ? tArr.splice(p, 1) : counter++ ;
  }
  
  return counter;
}

console.log(solution("AABAA", "BBAAA")) // 1
console.log(solution("OVGHK", "RPGUC")) // 4