https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string, is_suffix) {
    const arr = [];
    
    for(let i=0; i<my_string.length; i++){
        arr.push(my_string.slice(i))
    }
    
    if(arr.includes(is_suffix)){
        return 1
    }
    return 0
}

// 다른 풀이
const solution = (str, suff) => str.endsWith(suff) ? 1 : 0