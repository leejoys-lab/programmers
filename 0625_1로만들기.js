// https://school.programmers.co.kr/learn/courses/30/lessons/181880

// 내가 풀고싶었던 방식
function solution(num_list) {
    var answer = 0;
    num_list.forEach((num)=>{
        while(num !== 1){
            if(num%2 == 0){
                num = num/2
                answer = answer+1
            }else{
                num = (num-1)/2
                answer = answer+1
            }
        }
    })
    return answer;
}

// 다른 풀이
function solution(num_list) {
    let answer = 0;
    
    const multiplyFunc = (num) => {
        let n = num;
        if(n === 1) return n
        if(n%2 === 0){
            answer++
            n = n/2
        }else if(n%2 === 1){
            answer++
            n = (n-1)/2
        }
        return multiplyFunc(n)
    }
    
    num_list.forEach(n => multiplyFunc(n))    
        
    return answer;
}