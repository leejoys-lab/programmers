//https://school.programmers.co.kr/learn/courses/30/lessons/181841

//첫번째 풀이
function solution(str_list, ex) {
    const arr = [];
    
    for (str of str_list){
        if(!str.includes(ex)){
            arr.push(str)
        }
    }
    
    return arr.join("");
}

//두번째 풀이(map을 사용해보자)
function solution(str_list, ex) {
    const arr = str_list.map(str => {
            if(!str.includes(ex)){
                return str;
            }
        });
    
    return arr.join("");
}

//세번째 풀이(filter를 사용해보자)