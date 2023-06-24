//https://school.programmers.co.kr/learn/courses/30/lessons/181886

function solution(names) {
  return names.filter((name, index) => index % 5 === 0);
}

// 다른 풀이
function solution(names) {
  var answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer;
}
