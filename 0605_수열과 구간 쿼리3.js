// https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr, queries) {
  let tmp = 0;
  for (let i = 0; i < queries.length; i++) {
    tmp = arr[queries[i][0]];
    arr[queries[i][0]] = arr[queries[i][1]];
    arr[queries[i][1]] = tmp;
  }

  //  console.log(arr);
  return arr;
}

/* 
정수 배열 arr와 
2차원 정수 배열 queries [i, j] 
각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return해 주세요.

  //queries의 길이만큼 반복 (-> 현재는 0, 1, 2 총 3번)
  //queries[i]번째일 때 arr[queries[i][0]]과 arr[queries[i][1]]의 원소를 서로 바꿈

solution(
  [0, 1, 2, 3, 4],
  [
    [0, 3], // [3, 1, 2, 0, 4]
    [1, 2], // [3, 2, 1, 0, 4]
    [1, 4], // [3, 4, 1, 0 ,2]
  ]
);

 */

/*  
// 다른 풀이1 (forEach)
function solution(arr, queries){
    queries.forEach( ([a,b]) => {
        [arr[a], arr[b]] => [arr[b], arr[a]];
    })
    return arr;
}

*/

/*  
// 다른 풀이2 (forof)
function solution(arr, queries){
    for([a, b] of queries){
        [arr[a], arr[b]] => [arr[b], arr[a]];
    })
    return arr;
}

*/
