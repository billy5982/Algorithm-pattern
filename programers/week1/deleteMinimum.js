// function solution(arr) {
//     // 배열을 순회하고, 배열의 첫번째 값을 기준으로 잡는다
//     // 다음 수가 기준값보다 작다면 기준값을 다음수로 다시 선언한다
//     if(arr.length<=1)return [-1]
//     let min = arr[0];
//     let idx = 0;
//     for(let i=1; i<arr.length; i++){
//         if(min>arr[i]){
//             min = arr[i];
//             idx = i;
//         }
//     }
//     let result = arr;
//     result.splice(idx,1);

//     return result;
// }

//spread문법과 min 문법을 사용
function solution(arr){
    if(arr.length<=1)return [-1]
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr
}

console.log(solution([1,2,3,4]))