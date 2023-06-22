// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list, n) {
  const answer = num_list.filter((_, index) => index % n === 0);
  return answer;
}
