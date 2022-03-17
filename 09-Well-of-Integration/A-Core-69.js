function solution(legs) {
    
  const humans = [];
  
  for(let cats = Math.floor(legs/4); cats >= 0; cats--) {
      humans.push((legs - 4*cats) / 2)
  }
  
  return humans;

}

console.log(solution(6)) // [1, 3]
console.log(solution(2)) // [1]