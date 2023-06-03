// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
  let arr = [];
  let sum = 0;

  for (let i = 0; i < included.length; i++) {
    arr.push(a + i * d);

    if (included[i]) {
      sum += arr[i];
    }
  }

  console.log(sum);
}

solution(3, 4, [true, false, false, true, true]);
