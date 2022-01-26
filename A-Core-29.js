function solution(param1, param2) {
  param1 = param1.toString().split('').reverse()
  param2 = param2.toString().split('').reverse()
  let childResult = []
  let i = 0;
  while(i < param1.length || i < param2.length) {
      const lastDigit = (parseInt(param1[i] || 0) + parseInt(param2[i] || 0)).toString().split('').pop()
      childResult.push(lastDigit)
      i++;
  }
  return parseInt(childResult.reverse().join(''))
}

console.log(solution(456, 1734)) //1180