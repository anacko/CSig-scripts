function solution(candlesNumber, makeNew) {
  let sumBurnedCandles = 0;
  let leftovers = 0;
  while(candlesNumber > 0) {
      candlesNumber--;
      leftovers++;
      sumBurnedCandles++;
      if(leftovers === makeNew) {
          candlesNumber++;
          leftovers = 0;
      }
  }
  return sumBurnedCandles;
}

console.log(solution(5, 2)) // 9