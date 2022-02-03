function solution(n) {

  const getNumberOfDivisors = function(number) {
      const upperLimit = Math.floor(Math.sqrt(number))
      let numberOfDivisors = 2; // 1 and n
      for(let i = 2; i <= upperLimit; i++) {
          const divResult = number / i;
          if (Number.isInteger(divResult)) numberOfDivisors += 2;
      }
      if (number/upperLimit === upperLimit) numberOfDivisors--;
      return numberOfDivisors;
  }
  
  const nDivisors = [];
  const weaknesses = [];
  for(let i = 1; i <= n; i++) {
      const nDiv = getNumberOfDivisors(i)
      let sumWeaker = 0;
      for(let j = 0; j < nDivisors.length; j++) {
          if(nDivisors[j] > nDiv) sumWeaker++;
      }
      nDivisors.push(nDiv)
      weaknesses.push(sumWeaker)
  }
  
  console.log(weaknesses)

  const weakest = Math.max(...weaknesses)
  let sumWeakest = weaknesses.reduce((p, c) => c === weakest ? p + 1 : p, 0)
  
  return [weakest, sumWeakest]

  
  
}
console.log(solution(9)) // [2, 2]