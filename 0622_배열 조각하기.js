// https://school.programmers.co.kr/learn/courses/30/lessons/181893#

function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
      const cur = query[i];
      
      // 짝수 인덱스인 경우
      if (i % 2 === 0) {
        // cur + 1 인덱스부터 arr 배열의 끝까지 제거합니다.
        arr.splice(cur + 1, arr.length - (cur + 1));
      } 
      // 홀수 인덱스인 경우
      else {
        // arr 배열의 첫 번째부터 cur 인덱스 직전까지 제거합니다.
        arr.splice(0, cur);
      }
    }
    
    return arr;
  }
  