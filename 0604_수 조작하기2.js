// https://school.programmers.co.kr/learn/courses/30/lessons/181925
// solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);

function solution(numLog) {
  let result = [];

  for (let i = 1; i < numLog.length; i++) {
    switch (numLog[i] - numLog[i - 1]) {
      case 1:
        result.push("w");
        break;
      case -1:
        result.push("s");
        break;
      case 10:
        result.push("d");
        break;
      case -10:
        result.push("a");
        break;
    }
  }

  // console.log(result.join(""));
  return result.join("");
}

/* 
정수 배열 numLog [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]
numLog[i]는 "w", "a", "s", "d" 문자로 조작한 결괏값을 기록한 정수 배열.

"w" : 수에 1을 더한다.
"s" : 수에 1을 뺀다.
"d" : 수에 10을 더한다.
"a" : 수에 10을 뺀다.

주어진 정수 배열 numLog조작을 위해 입력받은 문자열을 return 하세요.

num-Log[i] - numLog[i-1] === 1 이면 w
num-Log[i] - numLog[i-1] === -1 이면 s
num-Log[i] - numLog[i-1] === 10 이면 d
num-Log[i] - numLog[i-1] === -10 이면 a

*/
