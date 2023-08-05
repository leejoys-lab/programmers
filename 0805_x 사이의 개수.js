//https://school.programmers.co.kr/learn/courses/30/lessons/181867

function solution(myString) {
    const strArr = myString.split("x")
    const answer = []
    strArr.forEach(str => {
        answer.push(str.length)
    })
    return answer;
}

// map 을  써보자!
function solution(myString) {
    return myString.split("x").map(v => v.length);
}