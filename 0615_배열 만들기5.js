// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
    const answer = [];
    
    for(str of intStrs){
        let num = Number(str.split("").slice(s,s+l).join(""))
        
        if(num > k){
            answer.push(num)
        }  
    }
    return answer;
}
