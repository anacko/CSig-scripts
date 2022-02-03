function solution(n) {
  let counter = 0;
  
  for(let starter = 1; starter < n; starter++) {    
      let i = starter + 1;
      let sum = starter;
      while(sum < n) {
          sum += i
          if(sum === n) {
              counter++;
          }
          i++;
      }
  }
  
  return counter;
}

console.log(solution(9)) // 2
console.log(solution(8)) // 0