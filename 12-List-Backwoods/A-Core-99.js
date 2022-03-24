function solution(array1, array2) {
  if(array1.length !== array2.length) { return false; }
  
  const isIsomorphic = function(a1, a2) {
      if(Array.isArray(a1) && Array.isArray(a2)) { return a1.length === a2.length; }
      return false;
  }
  
  for(let i = 0; i < array1.length; i++) {
      if(!isIsomorphic(array1[i], array2[i])) { return false; }
  }
  return true;
}

console.log(solution([[1, 1, 1], [0, 0]], [[2, 1, 1], [2, 1]])) // true 
console.log(solution([[2], []], [[2]])) // false 