function solution(code) {
  let mode = 0;
  let ret = "";

  for (let idx = 0; idx < code.length; idx++) {
    if (mode === 0) {
      if (code[idx] === "1") {
        mode = 1;
      } else if (idx % 2 === 0) {
        ret += code[idx];
      }
    } else {
      if (code[idx] === "1") {
        mode = 0;
      } else if (idx % 2 === 1) {
        ret += code[idx];
      }
    }
  }
  return ret ? ret : "EMPTY";
}

/*
mode에는 0과 1이 있습니다.
시작할 때의 mode는 0입니다.
idx를 0부터 code.length-1 까지 idx++하면서
문자열 ret을 만듭니다.


mode가 0일때
    code[idx]가 0일 때
        idx가 짝수이면 ret += code[idx]
    code[idx]가 1일 때
        mode를 1로 변경
        
mode가 1일때
    code[idx]가 0일 때
        idx가 홀수이면 ret += code[idx]
    code[idx]가 1일 때
        mode를 0로 변경

마지막에 return ret
ret이 빈문자열이라면 "EMPTY"를 return 합니다.

*/
