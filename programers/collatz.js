// 주어진 수가 1이 될때까지 다음 작업을 반복하면 모든 수를 1로 만들 수 있다는 추측
// 입력된 수가 짝수라면 2로 나눔
// 입력된 수가 홀수라면 3으로 나눔
// 1이 될때 까지 반복. 1이 된다면 총 횟수를 리턴(base case)

// 내가 한 생각 재귀로 쪼개면 되겠는 데?
// 입력받은 수를 확인하고 1이라면 return 0
// 다른 것이라면 재귀함수에 인자로 전달
// 홀수와 짝수를 구분하고 1이 아니라면 나눈 수로 다시 함수를 실행
// 만약 중요한 거는 500번 이상 반복되면 -1을 리턴해야함

// function solution(n,count=0){
//     if(n<=1)return 0
//     function collatz(num){  //6
//         if(num===1) return 0 
//         return num%2===0 ? 1+collatz(num/2) : 1+collatz(num*3+1)
//     }
//     const result = collatz(n)
//     return result
// }
function solution(n,count=0){
    if(n===0)return 0;
    if(n===1)return count;
    count++;
    if(count>=500)return -1
    return n%2===0?solution(n/2,count):solution(n*3+1,count)
}

console.log(solution(6))


function solution(n,count=0){
    if(n===1||count>=500 || n===0)return count
    return n%2===0?solution(n/2,count+1):solution(n*3+1,count+1)
}

console.log(solution(-1))


