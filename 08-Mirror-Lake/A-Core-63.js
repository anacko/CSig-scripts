function solution(a) {
  const groups = a.map(e => Math.ceil(e/10000));
  groups.sort((a, b) => a - b);
  
  let counterGroups = 0;
  groups.forEach((elem, idx) => elem !== groups[idx - 1] ? counterGroups++ : null);

  return counterGroups + a.length;    
}

console.log(solution([20000, 239, 10001, 999999, 10000, 20566, 29999])) // 11

/*
g = 1  ->   (1-1)*10^4 + 1 to (1)*10^4
g = 2  ->   (2-1)*10^4 + 1 to (2)*10^4
g = 99 -> (100-1)*10^4 + 1 to (100)*10^4

(g - 1)*10^4 + 1 to g*(10^4)

n = 20000 -> 2 * 10^4       -> group 2
n = 20566 -> 20566/10^4 > 2 -> group 3
group number is the ceiling of the division
*/