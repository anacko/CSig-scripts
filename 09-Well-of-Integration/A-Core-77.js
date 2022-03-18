function solution(a, b) {
    
  const holder = []; // positions in b where values are different
  
  // swapping 1 pair -> 2 positions, and they have to match.
  for(let i = 0; i < a.length; i++) {
      if(a[i] !== b[i]) {
          holder.push(i);
      }
  }
  
  if(!holder.length) { return true; } // no swaps
  if(holder.length !== 2) { return false } // 1 swap = 2 elements only
  
  return a[holder[0]] === b[holder[1]] && a[holder[1]] === b[holder[0]]

}

console.log(solution([1, 2, 3], [1, 2, 3])) // true
console.log(solution([1, 2, 3], [2, 1, 3])) // true
console.log(solution([1, 2, 2], [2, 1, 1])) // false