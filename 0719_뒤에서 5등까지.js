// https://school.programmers.co.kr/learn/courses/30/lessons/181853

function solution(num_list) {
    const answer = num_list.sort((a,b) => a-b)
    return answer.splice(0,5)
}