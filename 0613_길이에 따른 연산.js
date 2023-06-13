//https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
    const len = num_list.length;
    if(len > 10){
        return num_list.reduce((acc,cur)=> acc+cur, 0)
    }else{
        return num_list.reduce((acc,cur)=> acc*cur, 1)
    }
}