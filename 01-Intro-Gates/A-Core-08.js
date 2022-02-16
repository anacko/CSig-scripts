function solution(min1, min2_10, min11, s) {
  let mins = 0;
  // 1st min:
  if(s >= min1) {
      s -= min1;
      mins++;
  } else {
      return 0;
  }
  // 2-10 mins:
  while(s >= min2_10 && mins < 10) {
      s -= min2_10;
      mins++;
  }
  // 11+ mins:
  while(s >= min11 && mins >= 10) {
      s -= min11;
      mins++;
  }
  return mins;
}

console.log(solution(3, 1, 2, 20)) // 14