//https://school.programmers.co.kr/learn/courses/30/lessons/181917

//solution(false, true, true, true);

function solution(x1, x2, x3, x4) {
  const answer = (x1 || x2) && (x3 || x4);
  //console.log(answer);
  return answer;
}
