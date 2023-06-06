//https://school.programmers.co.kr/learn/courses/30/lessons/181922

/* 
정수 배열 arr와 
2차원 정수 배열 queries의 원소는 [s, e, k] 꼴입니다.

각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 
i가 k의 배수이면 arr[i]에 1을 더합니다.
위 규칙에 따라 queries의 모든 query를 처리한 이후의 arr를 return해 주세요.

*/
//const arr = [0, 1, 2, 4, 3];
//const queries = [[0, 4, 1], [0, 3, 2], [0, 3, 3]];
//const result = solution(arr, queries);

function solution(arr, queries) {
  const result = [...arr];

  for (let query of queries) {
    const [s, e, k] = query;
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        result[i] += 1;
      }
    }
  }
  // console.log(result);
  return result;
}
