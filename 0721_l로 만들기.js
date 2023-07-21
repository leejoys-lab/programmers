// https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
    // 알파벳 순서에서 l보다 앞선 문자를 배열로 저장한다.
    const arr = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k'];
    
    // 문자열을 배열로 변환하여 각 문자에 대해 처리하고 다시 문자열로 조합한다.
    const answer = myString.split('').map((str) => {
        if (arr.includes(str)) {
            return 'l';
        }
        return str;
    }).join('');

    return answer;
}

// 다른 풀이(정규표현식 활용)
const myString = "abcdevwxyz";

function solution(myString) {
    // 문자열을 정규표현식으로 치환하여 l보다 앞선 문자를 모두 "l"로 바꾼다.
    const modifiedString = myString.replace(/[a-k]/g, 'l');
    
    return modifiedString;
}

const result = solution(myString);
console.log(result); // 출력 결과: "lllllwxyz"