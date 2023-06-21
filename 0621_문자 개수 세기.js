// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function solution(my_string) {
    const answer = [];
    
    const chars = { "A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6, "H": 7, "I": 8, "J": 9, "K": 10, "L": 11, "M": 12, "N": 13, "O": 14, "P": 15, "Q": 16, "R": 17, "S": 18, "T": 19, "U": 20, "V": 21, "W": 22, "X": 23, "Y": 24, "Z": 25, "a": 26, "b": 27, "c": 28, "d": 29, "e": 30, "f": 31, "g": 32, "h": 33, "i": 34, "j": 35, "k": 36, "l": 37, "m": 38, "n": 39, "o": 40, "p": 41, "q": 42, "r": 43, "s": 44, "t": 45, "u": 46, "v": 47, "w": 48, "x": 49, "y": 50, "z": 51 }
    const keys = Object.keys(chars);
    
    for(const k of keys){
        answer.push(0)
    }
    
    for(const s of my_string){
        for(const k of keys){
            if(s === k){
                answer[chars[k]] += 1
            }
        }
    }
    return answer
}

// 다시 풀기
function solution(my_string) {
    const answer = [];
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    for(const c of chars){
        answer.push(0)
    }
    
    for(const s of my_string){
        for(const c of chars){
            if(s === c){
                answer[chars.indexOf(c)] += 1
            }
        }
    }
    
    return answer

}

// 다른 사람 풀이 1
function solution(m) {
    var answer = [];
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = [];
    a.length = 52;
    a.fill(0);

    m.split("").map((n)=>{
        a[al.indexOf(n)]+=1
    })

    return a;
}

// 다른사람 풀이 2
function solution(my_string) {
    let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var answer = new Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) {
        answer[alp.indexOf(my_string[i])]++;
    }
    return answer;
}