function solution(noun) {
  return noun[0].toUpperCase() + noun.slice(1).toLowerCase()
}

console.log(solution("pARiS")) // Paris
console.log(solution("John")) // John