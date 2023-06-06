//https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
  const len = num_list.length - 1;
  const firstLast = Number(num_list[len]);
  const secondLast = Number(num_list[len - 1]);

  if (firstLast > secondLast) {
    num_list.push(firstLast - secondLast);
  } else {
    num_list.push(firstLast * 2);
  }

  return num_list;
}

/* 
// 참고 풀이 (slice 사용)
function solution(num_list){
    const[sec, last] = num_list.slice(-2);
    last > sec ? num_list.push(last-sec) : num_list.push(last *2);
    return num_list;
}
*/
