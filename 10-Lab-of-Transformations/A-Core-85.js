function solution(ver1, ver2) {
  const arr1 = ver1.split('.').map(n => parseInt(n));
  const arr2 = ver2.split('.').map(n => parseInt(n));
  
  let i = 0;
  while(i < Math.min(arr1.length, arr2.length)) {
      if (arr1[i] === arr2[i]) {
          i++;
          continue; 
      }
      return !(arr1[i] < arr2[i])
  }
  return false;
}

console.log(solution("1.2.2", "1.2.0")) // true
console.log(solution("1.0.5", "1.1.0")) // false