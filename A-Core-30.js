function solution(k) {
  let diff = 0;
  let i = 1;
  while(i <= k) {
      i % 2 ? diff -= i*i : diff += i*i;
      i++;
  }
  return diff;
}

console.log(solution(5)) // -15