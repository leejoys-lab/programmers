//https://school.programmers.co.kr/learn/courses/30/lessons/181904

// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
    const str = [...my_string]
    const arr = []
    for (let i=0; i<my_string.length/m; i++){
        arr.push(str.splice(0,m))
    }
    
    let answer = '';
    arr.forEach(a => answer += a[c-1])
    return answer
}


// slice  사용
function solution(my_string, m, c) {
    const arr = [];
    for (let i = 0; i < my_string.length; i += m) {
      arr.push(my_string.slice(i, i + m));
    }
  
    let answer = '';
    arr.forEach((a) => {
      answer += a[c - 1];
    });
    return answer;
  }