function solution(items) {
  return items.map((item, idx) => {
      for(let i = idx - 1; i >= 0; i--) {
          if(items[i] < item) {
              return items[i];
          }
      }
      return -1;
  });
}

console.log(solution([3, 5, 2, 4, 5])) // [-1, 3, -1, 2, 4]