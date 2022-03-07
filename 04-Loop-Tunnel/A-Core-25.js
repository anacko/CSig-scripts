const solution = function(n) {
    let res = 1;
    let i = 1;
    while(res < n) {
        res = res * i;
        i++;
    }
    return res;
}

console.log(solution(24)) // 17