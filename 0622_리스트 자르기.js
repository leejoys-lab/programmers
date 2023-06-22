// https://school.programmers.co.kr/learn/courses/30/lessons/181897

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  const n1 = num_list.slice(0, b + 1);
  const n2 = num_list.slice(a);
  const n3 = num_list.slice(a, b + 1);
  const n4 = n3.filter((_, index) => index % c === 0);

  if (n === 1) return n1;
  if (n === 2) return n2;
  if (n === 3) return n3;
  if (n === 4) return n4;
}

// 다시 풀기
function solution(n, slicer, num_list) {
    let answer = []
    const [a,b,c] = slicer
    
    if(n === 1) answer = num_list.slice(0, b+1)
    if(n === 2) answer = num_list.slice(a)
    if(n === 3) answer = num_list.slice(a, b+1)
    if(n === 4) answer = num_list.slice(a, b+1).filter((_,index) => index % c === 0)
    
    return answer
}

// 다른사람 풀이
function solution(n, slicer, num_list) {
    let [a, b, c] = [...slicer];

    switch(n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        case 4:
            return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
    }
}