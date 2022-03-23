function solution(cipher) {
    
  const arr = cipher.split('').map(n => parseInt(n));
  
  let msg = '';
  
  let num = 0;
  let i = 0;
  while(i < arr.length) {
      const newNum = 10 * num + arr[i];
      
      // alphabet -> ASCII between 97 (a) and 122 (z)
      if(newNum >= 97 && newNum <= 122) {
          num = 0;
          msg += String.fromCharCode(newNum);
      } else {
          num = newNum;
      }
      i++;
  }
  
  return msg;
}

console.log(solution("10197115121")) // easy