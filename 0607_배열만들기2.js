//https://school.programmers.co.kr/learn/courses/30/lessons/181918

const arr = [1, 4, 2, 5, 3];
solution(arr);

function solution(arr) {
  const stk = [];

  for (i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
    }
  }
  console.log(stk);
  return stk;
}

/* 
변수 i는 0부터 arr.length까지
만약에 stk가 빈 배열이라면?
    arr[i]를 stk에 추가하고 i++
만약에 stk에 원소가 있다면?
    stk[마지막원소] < arr[i]이면 arr[i]를 stk에 추가하고 i++
    stk[마지막원소] >= arr[i]이면 stk.pop()
위 작업을 마친 후 만들어진 stk를 return

*/
