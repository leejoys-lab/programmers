//https://school.programmers.co.kr/learn/courses/30/lessons/181943

solution("He11oWor1d", "lloWorl", 2);
// splice(시작, 삭제할문자수, 대체할문자)
function solution(my_string, overwrite_string, s) {
  const arr = [...my_string];
  arr.splice(s, overwrite_string.length, overwrite_string);
  console.log(arr.join(""));
}

/* 
// 내가 하고싶었는데 잘 안되었던 답안

function solution(my_string, overwrite_string, s) {
     let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (i >= s && i < s + overwrite_string.length) {
      result += overwrite_string[i - s];
    } else {
      result += my_string[i];
    }
  }
  console.log(result);
}


*/
