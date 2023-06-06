//https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  // num_list[i]가 홀수이면 odd에, 짝수이면 even에 더한다
  let odd = "";
  let even = "";

  num_list.forEach((num) => {
    num % 2 === 0 ? (even += num) : (odd += num);
  });

  // 결과
  result = Number(odd) + Number(even);
  return result;
}
