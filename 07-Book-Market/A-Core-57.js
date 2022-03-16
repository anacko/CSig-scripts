function solution(inputString) {
    
  // 6 codes
  // 2 digit each code
  // each 2 digit is 0-9 + A-F
  const validDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  
  const inputArr = inputString.split('-')
  if (inputArr.length !== 6) return false;
  
  for(const elem of inputArr) {
      if(elem.length !== 2) {
          return false
      }
      if(!validDigits.includes(elem[0]) || !validDigits.includes(elem[1])) {
          return false
      }
  }
  
  return true
}

console.log(solution("00-1B-63-84-45-E6")) // true
console.log(solution("Z1-1B-63-84-45-E6")) // false
console.log(solution("not a MAC-48 address")) // false