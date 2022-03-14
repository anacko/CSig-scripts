function solution(address) {
    
  const lastAtPos = function(s) {
      let idx = -1;
      let lastPos;
      while(idx) {
          lastPos = idx - 1;
          idx = s.indexOf("@", idx)
          idx++;
      }
      return lastPos
  }
  
  return address.slice(lastAtPos(address) + 1)
}

console.log(solution("prettyandsimple@example.com")) // "example.com"
console.log(solution("fully-qualified-domain@codesignal.com")) // "codesignal.com"