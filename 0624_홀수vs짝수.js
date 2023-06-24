// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
  const evenSum = num_list.reduce((acc, cur, index) => (index % 2 === 1 ? acc + cur : acc), 0);
  const oddSum = num_list.reduce((acc, cur, index) => (index % 2 === 0 ? acc + cur : acc), 0);
  return Math.max(evenSum, oddSum);
}

// 다른 풀이
function solution(nl) {
  const Evensum = nl.filter((_, i) => (i + 1) % 2 === 0).reduce((a, b) => a + b, 0);
  const Oddsum = nl.filter((_, i) => (i + 1) % 2 !== 0).reduce((a, b) => a + b, 0);
  return Evensum > Oddsum ? Evensum : Oddsum;
}

// 다른 풀이2
function solution(num_list) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      oddSum += num_list[i];
    } else {
      evenSum += num_list[i];
    }
  }

  return Math.max(evenSum, oddSum);
}
