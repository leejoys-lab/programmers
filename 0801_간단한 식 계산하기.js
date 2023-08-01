//https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial) {
    const [a,op,b] = binomial.split(" ")
    const numberA = parseInt(a)
    const numberB = parseInt(b)
    
    switch (op) {
        case '+' : return numberA + numberB;
            break;
        case '-' : return numberA - numberB;
            break;
        case '*' : return numberA * numberB;
    }
}