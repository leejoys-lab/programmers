//https://school.programmers.co.kr/learn/courses/30/lessons/181849

// 나의 답안
function solution(num_str) {
    var num_arr = num_str.split("").map((num)=>Number(num))
    const answer = num_arr.reduce((acc,cur)=>acc+cur)
    return answer;
}

// 다른사람 풀이
function solution(num_str) {
    let answer = 0;

    num_str.split("").map((a) => answer += Number(a))

    return answer;
}


// 다른사람 풀이 2
function solution(num_str){
    return [...num_str].reduce((acc,cur) => acc + Number(cur), 0)
}