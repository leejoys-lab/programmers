//https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
    const answer = [];
    
    for(let i=1; i<=n; i++){
        if(i%k === 0){
            answer.push(i)   
        }
    }
    return answer;
}

// 다른 풀이 (i는 k부터 시작하고 i를 k만큼씩 증가)
function solution(n, k) {
    var answer = [];
    for(let i = k ; i <= n; i+=k){
        answer.push(i)
    }
    return answer;
}