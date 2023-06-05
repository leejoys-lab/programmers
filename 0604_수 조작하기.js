//https://school.programmers.co.kr/learn/courses/30/lessons/181926

/* 
정수 n과 
문자열 control : "w", "a", "s", "d"의 4개의 문자로 이루어졌으며
control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

"w" : n이 1 커집니다.
"s" : n이 1 작아집니다.
"d" : n이 10 커집니다.
"a" : n이 10 작아집니다.

위 규칙에 따라 n을 바꿨을 때 
가장 마지막에 나오는 n의 값을 return
*/

// solution(0, "wsdawsdassw");

function solution(n, control) {
  control.split("").forEach((str) => {
    if (str === "w") {
      n += 1;
    } else if (str === "s") {
      n -= 1;
    } else if (str === "d") {
      n += 10;
    } else {
      n -= 10;
    }
  });

  return n;
}

/* 
// 다른 풀이 (switch 사용)
function solution(n,control){
    for(let i=0; i<control.length; i++){
        switch(control[i]){
            case "w" : n+=1; break;
            case "s" : n-=1; break;
            case "d" : n+=10; break;
            case "a" : n-=10; break;
        }
    }
    return n;
}
*/
