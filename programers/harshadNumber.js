// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// function solution(x){
//     let converToArr = String(x).split('');
//     console.log(x+'')
//     const arrSum = converToArr.reduce((acc,cur)=>Number(acc)+Number(cur),0)
//     return x%arrSum===0?true : false
// }
console.log(solution(19))
// x+''를 하면 19 문자열 반환. reduce 시 + 하면 각 문자열이 넘버로 인식
function solution(x){
    return !(x%(x+'').split('').reduce((acc,cur)=>+acc + +cur,0))
}