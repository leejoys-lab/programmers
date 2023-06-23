//https://school.programmers.co.kr/learn/courses/30/lessons/181890

function solution(str_list) {
    let answer = [];
    let foundIndex = -1;

    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === "l" || str_list[i] === "r") {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {
        if (str_list[foundIndex] === "l") {
            answer = str_list.slice(0, foundIndex);
        } else {
            answer = str_list.slice(foundIndex + 1);
        }
    }

    return answer;
}
