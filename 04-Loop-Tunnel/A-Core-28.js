function solution(commands) {
  commands = commands.split('')
  let totalFaceSame = 0;
  let isSame = true;
  for(const command of commands) {
      if(command === "A") {
          isSame ? totalFaceSame++ : null;
      } else {
          isSame ? null : totalFaceSame++;
          isSame = !isSame;
      }
  }
  return totalFaceSame;
}

console.log(solution("LLARL")) // 3