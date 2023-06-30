//https://school.programmers.co.kr/learn/courses/30/lessons/181854?language=javascript

function solution(arr, n) {
  const len = arr.length;
  if (len % 2 === 1) {
    return arr.map((num, i) => {
      if (i % 2 === 0) {
        return num + n;
      }
      return num;
    });
  } else {
    return arr.map((num, i) => {
      if (i % 2 === 1) {
        return num + n;
      }
      return num;
    });
  }
}
