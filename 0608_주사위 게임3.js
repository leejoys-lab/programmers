// https://school.programmers.co.kr/learn/courses/30/lessons/181916

solution(2, 2, 2, 1);
// solution(4,1,4,4)

function solution(a, b, c, d) {
  console.log(Math.min());
  // return answer;
}

/* 
주사위는 총 4개

1. 네 주사위에서 나온 숫자가 모두 p로 같다면
=> 1111 × p점을 얻습니다.
a === b === c === d === p => 1111*p

2. 세 주사위에서 나온 숫자가 p로 같고
나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면
=> (10 × p + q)2 점을 얻습니다.
abc === p / d !== p === q
acd === p / b !== p === q
abd === p / c !== p === q
bcd === p / a !== p === q
=> (10 * p + q) * 2

3. 주사위가 두 개씩 같은 값이 나오고,
나온 숫자를 각각 p, q(p ≠ q)라고 한다면
(p + q) × |p - q|점을 얻습니다.
abcd
ab === p / cd === q / p !== q
ac === p / bd === q / p !== q
ad === p / bc === q / p !== q
bc === p / ad === q / p !== q
=> (p + q) * Math.abs(p - q)

4. 어느 두 주사위에서 나온 숫자가 p로 같고
나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 
q × r점을 얻습니다.
ab === p / c === q / d === r / p !== q !== r
ac === p / b === q / d === r / p !== q !== r
ad === p / b === q / c === r / p !== q !== r
bc === p / a === q / d === r / p !== q !== r
=> q*r

5. 네 주사위에 적힌 숫자가 모두 다르다면
나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
a !== b !== c !== d
=>Math.min(a,b,c,d)

-------------------------------------------
=> 네개 주사위를 굴렸을 때의 점수를 return
*/
