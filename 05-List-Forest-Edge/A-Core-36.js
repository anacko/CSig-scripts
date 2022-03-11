function solution(inputArray, elemToReplace, substitutionElem) {
  const newArray = [];
  inputArray.map(elem => newArray.push(elem === elemToReplace ? substitutionElem : elem));
  return newArray
}

console.log(solution([1, 2, 1], 1, 3)) // [3, 2, 3]