//https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr, queries) {
    queries.forEach(query => {
        const[s,e] = query
        for(let i=s; i<e+1; i++){
            arr[i] = arr[i]+1
        }    
    })
    return arr;
}