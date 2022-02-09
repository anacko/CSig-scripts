function solution(a) {
  const aBin = []
  a.map(num => aBin.push(num.toString(2)))
  
  let nBin = '';
  for(let bin of aBin) {
      while(bin.length < 8){
          bin = '0' + bin
      }
      nBin = bin + nBin;
  }
  return parseInt(nBin, 2)
}

console.log(solution([24, 85, 0])) // 21784