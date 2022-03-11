function solution(arr) {
  const size = arr.length;
  if (size % 2) return arr;

  const middle = arr[size/2] + arr[size/2 - 1]
  // removes 2 elems from the middle and insert the middle value
  arr.splice(size/2 - 1, 2, middle)

  return arr 
}
/*
if size is even - length = 6
[0, 1, 2, 3, 4, 5]
middle idx = 6/2 and 6/2 - 1
*/

console.log(solution([7, 2, 2, 5, 10, 7])) //[7, 2, 7, 10, 7]
console.log(solution([-5, -5, 10])) //[-5, -5, 10]