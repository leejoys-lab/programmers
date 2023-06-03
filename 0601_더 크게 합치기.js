//https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
  const aFirst = Number([a, b].join(""));
  const bFirst = Number([b, a].join(""));

  if (aFirst >= bFirst) {
    return aFirst;
  } else {
    return bFirst;
  }
}

/* 
//나의 풀이
    afirst = 문자열 a + 문자열 b 
    bfirst = 문자열 b + 문자열 a
    
    afirst 와 bfirst 중에 크기가 더 큰 값을 return하라
    단, 두 수가 같다면 afirst를 return하라
    
    afirst >= bfirst = afirst
    bfirst > afirst = bfirst
    return answer;

*/
