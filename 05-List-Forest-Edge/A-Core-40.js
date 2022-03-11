function solution(arr) {
  const size = arr.length;
  if(arr[0] !== arr[size-1]) return false;
  const middleElem = size % 2 ? arr[(size - 1) / 2] : arr[size/2] + (arr[size/2 - 1]);
  return middleElem === arr[0];
}

/* 
size is odd ? odd : even;

EVEN, length = 4
[0, 1, 2, 3]
middle idx = (4/2) - 1 and 4/2

ODD, length = 5
[0, 1, 2, 3, 4]
middle idx = (5-1)/2
*/

console.log(solution([7, 2, 2, 5, 10, 7])) // true
console.log(solution([-5, -5, 10])) // false