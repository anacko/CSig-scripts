function solution(young, beautiful, loved) {
  // all three true does not contradict Mary: return false
  if (young && beautiful && loved) {
      return false
  }
  // missing one of the characteristics, person is not loved, does not contradict Mary (return false)
  if ((!young || !beautiful) && !loved) {
      return false
  }
  return true;
}


let young = true
let beautiful = true
let loved = true
console.log(solution(young, beautiful, loved)) // false

young = true
beautiful = false
loved = true
console.log(solution(young, beautiful, loved)) // true