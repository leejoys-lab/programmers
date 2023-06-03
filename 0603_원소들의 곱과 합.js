//https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
  let multy = 1;
  let sum = 0;

  num_list.forEach((num) => {
    multy *= num;
    sum += num;
  });

  if (multy < sum ** 2) {
    return 1;
  } else {
    return 0;
  }
}
