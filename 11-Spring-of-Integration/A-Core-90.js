function solution(shoes) {
  // pairs require an even amount of shoes
  if (shoes.length % 2) return false;
  
  // sort by size
  shoes.sort((a, b) => a[1] - b[1])
  
  // separate shoes by size
  const shoesObj = {};
  const shoeSizes = [];
  let n = -1;
  shoes.forEach(shoe => {
      const size = shoe[1];
      if(shoeSizes[n] === size) {
          shoesObj[size.toString()].push(shoe[0])
      } else {
          shoesObj[size.toString()] = [shoe[0]]
          shoeSizes.push(size);
          n++;
      }
  })
  
  // check for each size, if they can be paired
  
  const isAllPairs = function(arr) {
      // ex. arr = [1, 1, 0, 0], returns bool
      if (arr.length % 2) return false;
      let sum = 0;
      arr.forEach(elem => sum += elem);
      return arr.length / sum === 2;
  }
  
  for(const shoes in shoesObj) {
      if (!isAllPairs(shoesObj[shoes])) return false;
  }
  
  return true;
}

console.log(solution([[0, 21], [1, 23], [1, 21], [0, 23]])) // true
console.log(solution([[0, 21], [1, 23], [1, 21], [1, 23]])) // false