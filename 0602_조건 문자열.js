//https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
  const arr = [];
  if (eq === "!") {
    arr.push(n, ineq, m);
  } else {
    arr.push(n, ineq, eq, m);
  }

  const str = arr.join("");

  console.log(str);
}

solution(">", "!", 41, 78);

/*
// 나의 풀이
ineq는 < 또는 >
    eq 는 = 또는 !
    n과 m은 숫자일 때
    
    경우의 수는 총 4가지
    ineq < eq = 결과 <=
    ineq < eq ! 결과 <
    ineq > eq = 결과 >=
    ineq > eq ! 결과 >
    만약에 eq가 !일때는 eq에 ""아무것도 넣지 말아야함
            
    const arr = [n, ineq, eq, m] 을 join("")해서 문자열 str로 만들기
    str = arr.join("")
    retrun (str)? 1: 0
    
*/
