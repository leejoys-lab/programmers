// https://school.programmers.co.kr/learn/courses/30/lessons/181872
// 문자열에서 특장 문자열 찾기
// const i = 문자열의 마지막 위치에서 특정 문자열의 index를 검색한다.
// https://developer-talk.tistory.com/406
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// myString[0]부터 myString[i]까지의 글자를 자른다.
// https://devinserengeti.tistory.com/16
// 단 pat의 문자열의 length가 len이라면 i+len 만큼의 글자를 자른다.
// 1번 예시 0부터 4까지 잘라야하므로 .slice(0,5)가 되어야한다.

function solution(myString, pat) {
    const i = myString.lastIndexOf(pat);
    const len = pat.length;
    const answer = myString.slice(0, i+len)
    
    return answer;
}