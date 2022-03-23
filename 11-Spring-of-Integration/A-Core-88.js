function solution(inputArray) {
    
  let iteractions = 1;
  while(inputArray.length > 1) {
      const newArray = [];
      for(let i = 0; i < inputArray.length; i += 2) {
          newArray.push(iteractions % 2 ? inputArray[i] + inputArray[i + 1] : inputArray[i] * inputArray[i + 1]);
      }
      inputArray = newArray;
      iteractions++;
  }
  return inputArray[0]
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8])) // 186