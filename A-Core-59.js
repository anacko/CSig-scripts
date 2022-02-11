function solution(a, b) {
    
  // generate objects with frequencies (all entries in A, and respective entries in B)
  const objA = {};
  a.split('').map(e => Object.keys(objA).includes(e)? objA[e.toString()]++ : objA[e.toString()] = 1)
  const objB = {};
  const bArr = b.split('').filter(e => Object.keys(objA).includes(e))
  bArr.map(e => Object.keys(objB).includes(e)? objB[e.toString()]++ : objB[e.toString()] = 1)
  
  // if there is an element required by A that is not in B, no str can be made (return 0)
  let missingKey = false;
  Object.keys(objA).forEach(e => !Object.keys(objB).includes(e) ? missingKey = true : null)
  if (missingKey) return 0;
  
  // generate array of how many A's can be generated with the B, by entry.
  const freqs = Object.keys(objA).map(e => Math.floor(objB[e]/objA[e]))

  return Math.min(...freqs)
  
}

console.log(solution('abc', 'abccba'))
console.log(solution('ab', 'abcbcb'))