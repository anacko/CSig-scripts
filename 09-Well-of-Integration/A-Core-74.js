function solution(maxLength, text) {
    
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  // extract words in array

  // see if is a valid char
  // if not, replace with blank space
  let validChars = ''
  for(const letter of text) {
      if(alphabet.includes(letter)) {
          validChars += letter;
      } else if(alphabet.toUpperCase().includes(letter)) {
          validChars += letter;
      } else {
          validChars += ' ';
      }
  }
  
  // separate words by blanks in array, removing empty entries
  const wordsArr = validChars.split(' ').filter(e => !!e)
  
  // filter by up to maxLength, return size of it
  return wordsArr.filter(w => w.length <= maxLength).length
}

console.log(solution(4, "The Fox asked the stork, 'How is the soup?'")) // 7