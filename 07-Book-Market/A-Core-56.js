function solution(startTag) {
    
  startTag = startTag.slice(1)
  startTag = startTag.slice(0, -1)
  const mainTag = startTag.split(' ')[0]
  
  return "</" + mainTag + ">"
}

console.log(solution("<button type='button' disabled>")) // "</button>"
console.log(solution("<i>")) // "</i>"