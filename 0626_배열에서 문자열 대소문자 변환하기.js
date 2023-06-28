// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function solution(strArr) {
  const answer = strArr.map((v, i) => {
    if (i % 2 === 0) return v.toLowerCase();
    if (i % 2 === 1) return v.toUpperCase();
  });
  return answer;
}

// 다른풀이 ( 더 간단히)
function solution(strArr) {
  return strArr.map((v, i) => (i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()));
}

// 원래 풀었던 방식
function solution(strArr) {
  var answer = [];
  strArr.forEach((arr, idx) => {
    if (idx % 2 == 0) answer.push(arr.toLowerCase());
    else answer.push(arr.toUpperCase());
  });
  return answer;
}
