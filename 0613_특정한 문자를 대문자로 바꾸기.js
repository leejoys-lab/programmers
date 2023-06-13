//https://school.programmers.co.kr/learn/courses/30/lessons/181873

function solution(my_string, alp) {
    const answer = my_string.replaceAll(alp, alp.toUpperCase());
    return answer;
}
