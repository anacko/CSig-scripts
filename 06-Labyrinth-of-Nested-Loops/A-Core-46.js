function solution(current, numberOfDigits) {

  // get the number of digits for the current digit
  // subtract from total numbers remaining,
  // add current printed
  let dSize = current.toString().split('').length
  while(numberOfDigits >= dSize) {
      numberOfDigits -= dSize;
      current ++;
      dSize = current.toString().split('').length
  }
  return current - 1;
}

console.log(solution(1, 5)) // 5
console.log(solution(21, 5)) // 22
console.log(solution(8, 4)) // 10