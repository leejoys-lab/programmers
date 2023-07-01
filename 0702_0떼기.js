// https://school.programmers.co.kr/learn/courses/30/lessons/181847

function solution(n_str) {
  // n_str의 [0]번째 요소가 0이면
  // n_str의 [0]번째 요소가 0이 아닐때까지
  // 해당 요소를 삭제한다.

  const answer = n_str.split('');
  while (answer[0] === '0') {
    answer.splice(0, 1);
  }

  return answer.join('');
}
