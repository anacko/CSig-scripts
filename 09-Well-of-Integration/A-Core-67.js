function solution(inputArray) {
  let counter = 0;
  let pos = 0;
  while(inputArray[pos]) {
      counter += inputArray[pos];
      pos++;
  }
  return counter;
}

console.log(solution([5, 1, 2, 3, 0, 1, 5, 0, 2])) // 11