function solution(string1, string2) {
    
  const convObj = {};
  
  for(let i = 0; i < string1.length; i++) {
      
      // Converted letters must match
      if(Object.keys(convObj).includes(string1[i])) {
          if(convObj[string1[i]] !== string2[i]) {
              return false;
          }
      } else {
          // New letters must not turn into values used by other letters 
          if(Object.values(convObj).includes(string2[i])) { return false; }    
          
          // If all good, keep conversion entry
          convObj[string1[i]] = string2[i]
      }
  }
  
  return true;    
}

console.log(solution("aacb", "aabc")) // true
console.log(solution("aa", "bc")) // false