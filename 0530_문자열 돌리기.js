//https://school.programmers.co.kr/learn/courses/30/lessons/181945

// 나의 풀이
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  const str = input[0];
  for (const result of str) {
    console.log(result);
  }
});

/* 
// 참고 풀이

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    [...str].forEach(c => console.log(c))
}); 
*/
