// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr) {
    const index = []
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 2){
            index.push(i)         
        }
    }
    
    const answer = arr.slice(index[0], index[index.length-1]+1)
    
    return arr.includes(2)? answer : [-1]
}