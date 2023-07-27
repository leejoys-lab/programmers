// https://school.programmers.co.kr/learn/courses/30/lessons/181871
// myString의 i부터 pat.length만큼 substr()한 글자가 pat과 같은 경우를 세라.
// 문자열을 자르는 방법
// https://codechacha.com/ko/javascript-how-to-substring/

function solution(myString, pat) {
  const patLength = pat.length;
  let result = 0;
  for (let i = 0; i <= myString.length - patLength; i++) {
    const myStr = myString.substr(i, patLength);
    if (myStr === pat) {
      result += 1;
    }
  }

  return result;
}

// 다른사람 풀이(slice 사용)
function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }

  return count;
}
