//https://school.programmers.co.kr/learn/courses/30/lessons/181913

// const my_string = "rermgorpsam";
// const queries = [[2, 3], [0, 7], [5, 9], [6, 10]];
// solution(my_string, queries);

function solution(my_string, queries) {
  let answer = my_string.split("");

  queries.forEach(([a, b]) => {

    for (let i = a; i <= b; i++) {
      let tmp = answer[i];
      answer[i] = answer[b];
      answer[b] = tmp;
      b--;
    }
  });

  //console.log(answer.join(""));
  return answer.join("");
}

/* 
문자열 my_string

이차원 정수 배열 queries의 원소는 [s, e] 형태로
my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
** 0 ≤ s ≤ e < my_string의 길이를 만족합니다.

my_string에 queries의 명령을 순서대로 처리한 후의
문자열을 return 하는 solution 함수를 작성해 주세요.
*/

/* 
// 참고 풀이 (.slice(), splice()사용)
function solution(my_string, queries) {
    let str = my_string.split('');
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join('');
}
*/