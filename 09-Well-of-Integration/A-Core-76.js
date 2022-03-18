function solution(number, width) {
  const numberStr = number.toString();
  const numberSize = numberStr.length;
  
  if(numberSize < width) {
      const leadZeroes = Array(width - numberStr.length).fill('0').join('');
      return leadZeroes + numberStr;
  } else {
      return numberStr.slice(numberStr.length - width);
  }
}

console.log(solution(1234, 2)) // "34"
console.log(solution(1234, 4)) // "1234"
console.log(solution(1234, 5)) // "01234"