//https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
  var answer = "";

  for (let i = 0; i < str1.length; i++) {
    answer += str1[i];
    answer += str2[i];
  }

  return answer;
}
