//https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a, b) {
  const plus = Number(`${a}${b}`);
  const multiple = 2 * a * b;

  return Math.max(plus, multiple);
}
