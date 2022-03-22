function solution(note) {
  const map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  let msg = '';
  for (const letter of note) {
      const pos = map.indexOf(letter)
      msg += pos === -1 ? letter : (pos < 10 ? map[pos + 10] : map[pos - 10]);
  }
  
  return msg; 
}

console.log(solution("you'll n4v4r 6u4ss 8t: cdja")) // "you'll never guess it: 2390"