// https://school.programmers.co.kr/learn/courses/30/lessons/181885

function solution(todo_list, finished) {
    
    const answer = []; 
    
    for(let i=0; i<finished.length; i++){
        if(finished[i]===false){
            answer.push(todo_list[i])
        }
    }
    
    return answer;
}

//filter
function solution(todo_list, finished) {
    const answer = [];
    return todo_list.filter((_,i) => !finished[i])
}