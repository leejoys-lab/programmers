//https://school.programmers.co.kr/learn/courses/30/lessons/181891

function solution(num_list, n) {
  const answer = num_list.splice(n);
  return answer.concat(num_list);
}

// 다른 풀이
function solution(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}

// 다른 풀이 2
function solution(num_list, n) {
  num_list.push(...num_list.splice(0, n));
  return num_list;
}

// 다른 풀이 3
