// https://school.programmers.co.kr/learn/courses/30/lessons/181846
function solution(a, b) {
  const numA = BigInt(a);
  const numB = BigInt(b);

  return (numA + numB).toString();
}

// 다른사람 풀이
const solution = (a, b) => String(BigInt(a) + BigInt(b));
