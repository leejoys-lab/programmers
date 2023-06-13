// https://school.programmers.co.kr/learn/courses/30/lessons/181884

// 나의 답안
function solution(numbers, n) {
    let answer = 0;
    
    for(let i=0; i<numbers.length; i++){
        answer += numbers[i]
        if(answer > n){
            return answer;
        }
    }
}

// 다른 풀이
function solution(numbers, n) {
    let answer = 0;

    for (const num of numbers) {
        answer += num;
        if (answer > n) break;
    }

    return answer;
}