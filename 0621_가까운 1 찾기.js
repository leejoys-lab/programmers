//https://school.programmers.co.kr/learn/courses/30/lessons/181898

function solution(arr, idx) {
    var answer = [];
    
    for(let i=idx; i<arr.length; i++){
        if(arr[i]===1) answer.push(i)
    }
    
    return answer.length === 0 ? -1 : answer[0]
}

// 다시 풀기
function solution(arr, idx) {
    var answer = -1;
    
    for(let i=idx; i<arr.length; i++){
        if(arr[i]===1) return i
    }
    
    return answer
}

// 다른 사람 풀이
const solution=(a,i)=>a.indexOf(1,i);