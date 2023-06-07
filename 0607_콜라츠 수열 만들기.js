//https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n) {
  let num = n;
  const result = [n];

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
      result.push(num);
    } else {
      num = 3 * num + 1;
      result.push(num);
    }
  }
  return result;
}

/*
x가 현재 짝수라면 2로 나누고
x가 현재 홀수라면 3 * x + 1
를 계속 반복해서 언젠가는 반드시 x가 1이 된다.
*/
