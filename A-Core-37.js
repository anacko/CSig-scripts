function solution(arr) {
  let lastElem, firstElem;
  if (arr.length) { lastElem = arr.pop(); }
  if (arr.length) { firstElem = arr.shift(); }
  if (lastElem) { arr.unshift(lastElem); }
  if (firstElem) { arr.push(firstElem); }
  return arr
}

console.log(solution([1, 2, 3, 4, 5])) // [5, 2, 3, 4, 1]