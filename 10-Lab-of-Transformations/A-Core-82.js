function solution(number) {
  const newDigits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const pos = newDigits.indexOf(number);
  
  const ans = [];
  for(let i = 0; i <= Math.round(pos / 2); i++) {
      ans.push(newDigits[i] + " + " + newDigits[pos - i]);
  }
  
  // pos even: last is "b + b", ok.
  // pos odd: last is "b + a", duplicated. Needs removal.
  if (pos % 2) { 
      ans.pop();
  }
  
  return ans;
}

console.log(solution('G')) // ["A + G", "B + F", "C + E", "D + D"]