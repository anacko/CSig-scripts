function solution(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetRev = alphabet.split('').reverse().join('')
  
  let outputString = '';
  for(const letter of inputString) {
      outputString += alphabetRev[alphabet.indexOf(letter)]
  }
  return outputString;
}

console.log(solution("name")) // mznv