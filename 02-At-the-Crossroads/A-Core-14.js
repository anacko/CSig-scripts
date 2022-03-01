function solution(score1, score2) {
  // loser got less than 5, winner has score 6:
  if(score1 < 5 && score2 === 6) {
      return true;
  }
  if(score2 < 5 && score1 === 6) {
      return true;
  }
  // loser got at least 5 (meaning 5 or 6), winner has score 7:
  if((score1 === 5 || score1 === 6) && score2 === 7) {
      return true;
  }
  if((score2 === 5 || score2 === 6) && score1 === 7) {
      return true;
  }
  return false;
}

console.log(solution(3, 6)) // true
console.log(solution(8, 2)) // false
console.log(solution(6, 5)) // false