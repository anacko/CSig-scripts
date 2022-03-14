function solution(inputString) {
  return inputString.slice(0, inputString.length / 2) === inputString.slice(inputString.length / 2) 
}

console.log(solution("tandemtandem")) // true
console.log(solution("qqq")) // false
console.log(solution("2w2ww")) // false