function solution(picture) {
  picture = picture.map(e => '*' + e + '*');
  const newStr = Array(picture[0].length).fill('*').join('');
  picture.unshift(newStr);
  picture.push(newStr);
  return picture;
}

console.log(solution(["abc", "ded"]))
// ["*****",
//  "*abc*",
//  "*ded*",
//  "*****"]