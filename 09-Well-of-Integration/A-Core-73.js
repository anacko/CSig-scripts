function solution(a) {
  for(let i = 0; i < a.length; i++) {
      let pos = 0;
      if(a[i]) {       
          while(pos <= i) {
              a[pos] = 1 - a[pos];
              pos++;
          }
      }
  }
  return a;
}
console.log(solution([1, 1, 1, 1, 1])) // [0, 1, 0, 1, 0]