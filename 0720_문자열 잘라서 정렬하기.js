//https://school.programmers.co.kr/learn/courses/30/lessons/181866

function solution(myString) {
    const arr = myString.split("");
    const result = [];
    let currentStr = "";

    arr.forEach((str) => {
        if (str === "x") {
            if (currentStr) {
                result.push(currentStr);
                currentStr = "";
            }
        } else {
            currentStr += str;
        }
    });

    if (currentStr) {
        result.push(currentStr);
    }

    return result.sort((a,b) => a.localeCompare(b));
}