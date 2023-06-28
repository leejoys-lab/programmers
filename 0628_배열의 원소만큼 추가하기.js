// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
  const newArr = [];
  const answer = arr.forEach((s) => {
    for (let i = 0; i < s; i++) {
      newArr.push(s);
    }
  });
  return newArr;
}

// 다른풀이
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

// 다른풀이2
function solution(arr) {
  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}

// 다른풀이3
const solution = (a) => a.map((v) => Array(v).fill(v)).flat();
