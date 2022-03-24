function solution(formation, k) {
    
  const afterK = [formation[1][0], formation[0][1], formation[1][2], formation[3][2], formation[2][1], formation[3][0]]
  
  const d = k % afterK.length
  const beforeK = new Array(...afterK.slice(d, afterK.length), ...afterK.slice(0, d))
  
  return [["empty", beforeK[1], "empty"],
  [beforeK[0], "empty", beforeK[2]],
  ["empty", beforeK[4], "empty"],
  [beforeK[5], "empty", beforeK[3]]]

}

console.log(solution([
  ["empty",   "Player5", "empty"],
  ["Player4", "empty",   "Player2"],
  ["empty",   "Player3", "empty"],
  ["Player6", "empty",   "Player1"]]))
/* 
[
  ["empty",   "Player1", "empty"],
  ["Player2", "empty",   "Player3"],
  ["empty",   "Player4", "empty"],
  ["Player5", "empty",   "Player6"]
]
*/