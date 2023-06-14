//https://school.programmers.co.kr/learn/courses/30/lessons/181878

//const myString = "AbCdEfG";
//const pat = "aaazaaBc";
//solution(myString, pat) 

function solution(myString, pat){
    const [a, b] = [myString.toLowerCase(), pat.toLowerCase()]
    if(a.indexOf(b) !== -1){
        return 1
    }
    return 0
}

// 다른 풀이
function solution(myString, pat) {
    var answer = 0;
    answer =  myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;

    return answer
}