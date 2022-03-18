function solution(s) {
  const a = 'abcdefghijklmnopqrstuvwxyz'
  for(let i = 1; i < s.length; i++) {
      if(a.indexOf(s[i]) <= a.indexOf(s[i - 1])) {
          return false;
      }
  }
  return true;
}

console.log(solution("effg")) // false
console.log(solution("cdce")) // false
console.log(solution("ace")) // true
console.log(solution("bxz")) // true