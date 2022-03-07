function solution(a, b, n) {
  let totalMoney = 0;
  while(n > 0){
      totalMoney += a * b;
      a++;
      b++;
      n--;
  }
  return totalMoney
}

console.log(solution(1, 2, 2)) // 8