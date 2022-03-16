function solution(n) {
    
  // generate the sums array with unique values and they frequencies array
  const uniqueSums = [];
  const freq = [];
  while(n) {
      const sumD = n.toString().split('').reduce((p, c) => p + Number(c), 0)
      
      // if sumD is new, add it to uniqueSums array, if not new, increase frequency
      const pos = uniqueSums.indexOf(sumD)
      if (pos === -1) {
          uniqueSums.push(sumD);
          freq.push(1);
      } else {
          freq[pos] += 1;
      }
      
      n -= sumD;
  }
  
  // get the most frequent values
  const higherFreq = Math.max(...freq);
  const mostFreqs = [];
  uniqueSums.forEach((elem, idx) => freq[idx] === higherFreq ? mostFreqs.push(elem) : null);
  
  return Math.max(...mostFreqs)

}

console.log(solution(88)) // 9
console.log(solution(8)) // 8