//https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q, r, code) {
    let answer = '';
    for (let i = r; i < code.length; i += q) {
      answer += code[i];
    }
    return answer;
  }
  