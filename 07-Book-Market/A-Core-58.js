function solution(filename1, filename2) {
  return (
  filename1 < filename2 !== filename1.toLowerCase() < filename2.toLowerCase()
);
}

console.log(solution("aa", "AAB")) // true
console.log(solution("A", "z")) // false