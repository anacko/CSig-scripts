function solution(divisors, k) {
    
  const clans = [];
  
  for(let i = 1; i <= k; i++) {
      // gives a name to the clan: string representing if each the divisor is a divisor of i or not
      const clanName = divisors.map(e => i % e ? '1' : '0').join('')
      clans.includes(clanName) ? null : clans.push(clanName)
  }
  
  return clans.length

}

console.log(solution([2, 3], 6)) // 4