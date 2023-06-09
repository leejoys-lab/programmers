// https://school.programmers.co.kr/learn/courses/30/lessons/181916
// solution(2, 2, 2, 2);
// solution(4, 1, 4, 4);
// solution(6, 3, 3, 6);
// solution(2, 5, 2, 6);
// solution(6, 4, 2, 5);


// 메소드 다 필요없어...
function solution(a, b, c, d) {
  if (a === b && a === c && a === d) return 1111 * a

  if (a === b && a === c) return (10 * a + d) ** 2
  if (a === b && a === d) return (10 * a + c) ** 2
  if (a === c && a === d) return (10 * a + b) ** 2
  if (b === c && b === d) return (10 * b + a) ** 2

  if (a === b && c === d) return (a + c) * Math.abs(a - c)
  if (a === c && b === d) return (a + b) * Math.abs(a - b)
  if (a === d && b === c) return (a + b) * Math.abs(a - b)

  if (a === b) return c * d
  if (a === c) return b * d
  if (a === d) return b * c
  if (b === c) return a * d
  if (b === d) return a * c
  if (c === d) return a * b

  return Math.min(a, b, c, d)
}


/* 
주사위는 총 4개
1. 네 주사위에서 나온 숫자가 모두 p로 같다면
=> 1111 × p점을 얻습니다.
(a===b && b===c && c===d)
=> 1111*p

2. 세 주사위에서 나온 숫자가 p로 같고
나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면
=> (10 × p + q)2 점을 얻습니다.
abc === p , d === q !== p 
acd === p , b === q !== p 
abd === p , c === q !== p
bcd === p , a === q !== p
=> (10 * p + q) * 2


3. 주사위가 두 개씩 같은 값이 나오고,
나온 숫자를 각각 p, q(p ≠ q)라고 한다면
(p + q) × |p - q|점을 얻습니다.
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
