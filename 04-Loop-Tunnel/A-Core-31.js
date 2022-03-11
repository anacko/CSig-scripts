function solution(n) {
  while(!(n % 10)) {
      n /= 10;
  }
  let res = false;
  n.toString().split('').map(elem => { if(elem === '0') { res = true; } });
  return res;
}

console.log(solution(902200100)) // true
console.log(solution(11000)) // false