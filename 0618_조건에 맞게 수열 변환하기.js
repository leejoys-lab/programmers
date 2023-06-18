//https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(arr) {
    const answer = []
    
    arr.forEach(num => {
        if(num >= 50 && num%2 === 0){
            answer.push(num/2)      
        }else if(num < 50 && num%2 === 1){
            answer.push(num*2)
        }else{
            answer.push(num)
        }
    })
    
    return answer;
}

// map을 사용하기
function solution(arr) {
    return arr.map(num => {
        if(num >= 50 && !(num % 2)) return num / 2;
        if(num < 50 && num % 2) return num * 2;
        return num;
    })
}
