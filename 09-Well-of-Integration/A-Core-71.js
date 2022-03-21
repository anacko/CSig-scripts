function solution(coins, price) {

  let nCoins = 0;
  let pos = coins.length - 1

  while(pos >= 0 && price) {
      let currentCoins = Math.floor(price / coins[pos])
      nCoins += currentCoins
      price -= currentCoins * coins[pos]
      pos--;
  }
  
  return nCoins + price;

}

console.log(solution([1, 2, 10], 28)) // 6