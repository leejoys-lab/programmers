// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string, s, e) {
    const str = [...my_string]
    const reverseStr = str.slice(s, e+1).reverse()
    str.splice(s, e-s+1, ...reverseStr);
    return str.join("")
}