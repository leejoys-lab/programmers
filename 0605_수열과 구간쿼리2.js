// https://school.programmers.co.kr/learn/courses/30/lessons/181923

//solution(  [0, 1, 2, 4, 3],  [[[0, 4, 2],[0, 3, 2],[0, 2, 2]] ]);

function solution(arr, queries) {
    let result = [];
  
    queries.forEach(([s, e, k]) => {
      let newArr = [];
  
      for (let i = s; i <= e; i++) {
        if (k < arr[i]) {
          newArr.push(arr[i]);
        }
      }
  
      if(newArr.length > 0){
          let minNum = newArr.sort((a,b) => a-b)[0];
          result.push(minNum)
      }else{
          result.push(-1);
      }
    });
    // console.log(result);
    return result;
  }
  
/* 
정수 배열 arr와 
2차원 정수 배열 queries
queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 
k < arr[i]를 만족하면서 가장 작은 수를 찾습니다.

각 쿼리의 순서에 맞게 답을 저장한 배열을 반환해 주세요.
단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
*/

/* 
// 나의 풀이
i는 0부터 4까지 중에 k(현재 2) < arr[i]를 찾는다
i arr[i]
0 0 -> 2보다 작음
1 1 -> 2보다 작음
2 2 -> 2와 같음
3 4 => 만족(2 초과)
4 3 => 만족(2 초과)

=> 만족하는 arr[i]값을 nerArr배열에 push한 다음
=> newArr를 sort해서 작은 숫자부터 정렬한다
=> newArr[0]번째 숫자를 result에 push하고 result배열을 return한다.
*/


/* 
// 참고 답안 (한 줄 코딩!)
funxtioni solution(arr, queries){

    return queries.map(([s,e,k]) => {
        arr.slice(s, e+1)
           .filter((num) => n > k)
           .sort((a,b) => a - b)[0] || -1
    })
}

*/