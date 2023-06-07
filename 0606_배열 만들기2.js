// https://school.programmers.co.kr/learn/courses/30/lessons/181921

// const l = 5;
// const r = 555;
// solution(l, r);

function solution(l, r) {
  const arr = [];
  const result = [];

  // 숫자를 문자로 쪼개서 배열 형태로 저장
  for (let i = l; i <= r; i++) {
    arr.push(i.toString().split(""));
  }

  // numArray의 모든 원소가 0또는 5를 충족한다면, result에 numArray.join("")을 push
  for (const numArray of arr) {
    if (numArray.every((num) => num === "0" || num === "5")) {
      result.push(Number(numArray.join("")));
    }
  }

  if (result.length === 0) {
    result.push(-1);
  }

  //console.log(result);
  return result;
}

/* 
정수 l과 r이 주어졌을 때, 
l <= 정수(number) <= r 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 
오름차순으로 저장한 배열을 return 해 주세요.
*** 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
 */
