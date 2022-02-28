function solution(inputString) {
    
  s = inputString.toLowerCase()
  
  const size = s.length
  const lim = Math.floor(size / 2)
  
  for(let i = 0; i <= lim; i++) {
      if (s[i] !== s[size - i - 1]) return false;
  }
  
  return true;
  
}

console.log(solution("AaBaa")) // true
console.log(solution("abac")) // false