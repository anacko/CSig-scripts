function solution(votes, k) {
    
  // if candidate takes all votes, can they win
  const maxVotes = Math.max(...votes)
  const canWin = votes.map(candidateVotes => candidateVotes + k > maxVotes ? 1 : 0);
  
  // no votes, but single winner, there is 1 winner
  const isSingleWinner = votes.filter(cV => cV === maxVotes).length === 1;
  if(isSingleWinner && !k) { return 1 }
  
  return canWin.filter(e => !!e).length
}

console.log(solution([2, 3, 5, 2], 3)) // 2