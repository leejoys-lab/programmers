//https://school.programmers.co.kr/learn/courses/30/lessons/181838

function solution(date1, date2) {
    if(date1 == date2) return 0
    
     if (date1[0] < date2[0]) {
        return 1;
    } else if (date1[0] === date2[0] && date1[1] < date2[1]) {
        return 1;
    } else if (date1[0] === date2[0] && date1[1] === date2[1] && date1[2] < date2[2]) {
        return 1;
    } else {
        return 0;
    }
}

//const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0

/* 
function solution(date1, date2) {
    return date1.join('') - date2.join('') < 0 ? 1 : 0;
}
*/