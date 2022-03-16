function solution(s) {

  // Check if pattern of values matches
  const isMatch = function(k, sVals) {
      const objK = {};
      (k*k).toString().split('').forEach(n => Object.keys(objK).includes(n) ? objK[n]++ : objK[n] = 1);
      
      const kVals = Object.values(objK)
      if (kVals.length !== sVals.length) return false;
      
      kVals.sort()
      for(let i = 0; i < kVals.length; i++) {
          if(kVals[i] !== sVals[i]) return false;
      }
      
      return true;
  }
  
  // Capture the frequencies of each letter (pattern of values in the string)
  const objS = {}
  s.split('').map(l => Object.keys(objS).includes(l) ? objS[l]++ : objS[l] = 1);
  const sVals = Object.values(objS).sort()
  
  // Run the squares within the interval (top-bottom), return square value when pattern matches
  const topLim = Math.floor(Math.sqrt(10**(s.length)));
  const bottomLim = Math.floor(Math.sqrt(10**(s.length-1)));
  for(let i = topLim; i >= bottomLim; i--) {
      if(isMatch(i, sVals)) return i*i
  }
  
  // If no matches, return -1.
  return -1;

}

console.log(solution("ab")) // 81
console.log(solution("zzz")) // -1
console.log(solution("aba")) // 900

// investigate s.length

// L = 3 -> 100 - 999
// 10 - 31

// L = 4 -> 1000 - 9999
// 31 - 100

// L = 5 -> 10 000 - 99 999
// 100 - 316

// L = 6 -> 316 - 1000
// L = 7 -> 1000 - 3162
// L = 8 -> 3162 - 10000
// L = 9 -> 10000 - 31623

// L = 10 -> 1 000 000 000 - 9 999 999 999
// 31623 - 100000


// Math.floor(Math.sqrt(10**(s.length-1)))
// Math.floor(Math.sqrt(10**(s.length)))