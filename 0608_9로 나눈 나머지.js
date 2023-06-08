// https://school.programmers.co.kr/learn/courses/30/lessons/181914

// solution("78720646226947352489");

function solution(number){
    let answer = 0;

    for(let i of number){
        answer += Number(i)
    }

    return answer%9;
}


/* 
음이 아닌 정수를 9로 나눈 나머지는
그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같다

음이 아닌 정수가 문자열 number로 주어질 때,
이 정수를 9로 나눈 나머지를 return해주세요.
 */

/* 
// redue 한 번 써봄
function solution(number) {
  const sum = number.split("").reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
  // console.log(sum % 9);
  return sum % 9;
}
*/