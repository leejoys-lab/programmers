// https://school.programmers.co.kr/learn/courses/30/lessons/181870

function solution(strArr) {
    const result = [];
    strArr.forEach((str) => {
        if(str.indexOf("ad") === -1){
            result.push(str)
        }
    })
 return result;
}

// .filter메소드 사용하기
function solution(strArr) {

    strArr = strArr.filter((x)=>{
        return x.indexOf("ad") == -1
    })

    return strArr;
}