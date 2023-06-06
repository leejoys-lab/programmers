// https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  result = [];

  for (const s of str) {
    const lowerS = s.toLowerCase();
    const upperS = s.toUpperCase();

    if (s === lowerS) {
      result.push(upperS);
    } else {
      result.push(lowerS);
    }
  }

  console.log(result.join(""));
});
