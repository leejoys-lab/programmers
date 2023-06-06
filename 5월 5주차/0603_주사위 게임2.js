//https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
  const sum1 = a + b + c;
  const sum2 = sum1 * (a * a + b * b + c * c);
  const sum3 = sum2 * (a * a * a + b * b * b + c * c * c);

  if (a === b && b === c && c == a) {
    return sum3;
  } else if (a !== b && b !== c && c !== a) {
    return sum1;
  } else {
    return sum2;
  }
}
