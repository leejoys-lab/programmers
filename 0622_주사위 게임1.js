// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
  let answer = 0;

  if (a % 2 === 1 && b % 2 === 1) {
    answer = a * a + b * b;
  } else if (a % 2 === 1 || b % 2 === 1) {
    answer = a + b + (a + b);
  } else {
    answer = Math.abs(a - b);
  }

  return answer;
}

function solution(a, b) {
  if (a % 2 === 1 && b % 2 === 1) {
    return a * a + b * b;
  } else if (a % 2 === 1 || b % 2 === 1) {
    return a + b + (a + b);
  } else {
    return Math.abs(a - b);
  }
}

