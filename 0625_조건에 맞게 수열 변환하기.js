//https://school.programmers.co.kr/learn/courses/30/lessons/181881

function solution(arr) {
    let answer = 0;
    let prevArr = arr 
    
    while(true){
        const newArr = prevArr.map( v => {
            if( v >= 50 && v%2 === 0 ) return v/2
            if( v < 50 && v%2 === 1 ) return v*2+1
            return v
        })
        
        const isAllSame = prevArr.every((v, i) => v === newArr[i])
        if(isAllSame) break
        answer += 1
        
        prevArr = newArr
    }
    
    
    return answer;
}

//다른풀이
function solution(arr) {
    var answer = 0;
    let before = [-1];

    while(!arr.every((e,idx) => e == before[idx])) {
        before =[...arr];

        arr = arr.map(e => {
            if(e >= 50 & e % 2 == 0)
                return e / 2;
            if(e < 50 & e % 2 != 0)
                return e * 2 + 1;
            return e;
        })
        answer++;
    }
    return answer - 1;
}