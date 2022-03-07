function solution(n, l, r) {
  let sumCases = 0;
  while(l <= r) {
      if((l <= n/2) && (l >= n - r)) sumCases++;
      l++;
  }
  return sumCases;
}

/*
l <= n - l <= r 

l <= n - l
2l <= n
l <= n/2

n - l <= r
-l <= r - n
l >= n - r
*/

console.log(solution(6, 2, 4)) // 2