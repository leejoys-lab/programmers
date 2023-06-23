//https://school.programmers.co.kr/learn/courses/30/lessons/181891

function solution(num_list, n) {
  var answer = num_list.splice(n);
  return answer.concat(num_list);
}
