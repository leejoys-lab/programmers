//https://swtrack.elice.io/courses/72114/lecturerooms/47971

function solution(arr, intervals) {
    const arr1 = arr.slice(intervals[0][0],intervals[0][1]+1)
    const arr2 = arr.slice(intervals[1][0],intervals[1][1]+1)
    const answer = arr1.concat(arr2)
    return answer;
}

// 다시 풀기
function solution(arr, intervals) {
    const answer = []
    intervals.forEach(i => answer.push(arr.slice(i[0], i[1]+1)))
    return answer.flat()
}

// 다른사람 풀이
function solution(arr, intervals) {
    const [[a,b],[c,d]] = intervals;

    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}