// https://school.programmers.co.kr/learn/courses/30/lessons/181868

function solution(my_string) {
const answer = my_string.split(' ').filter(s => s !== '');
return answer;
}
