//https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings, parts) {
    let answer = '';
    
    for(let i=0; i<parts.length; i++){
        answer += my_strings[i].slice(parts[i][0],parts[i][1]+1)
    }
    
    return answer;
}

// reduce 사용
function solution(my_strings, parts) {
  return my_strings.reduce((result, str, i) => {
    const [s, e] = parts[i];
    return result + str.substring(s, e + 1);
  }, '');
}

// map 사용
function solution(my_strings, parts) {
    return parts.map(([s, e], i) => {
        return my_strings[i].slice(s, e + 1)
    }).join('')
}
