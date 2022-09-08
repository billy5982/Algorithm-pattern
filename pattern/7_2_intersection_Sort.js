//삽입 정렬
// 2중 loop, 내부의 loop의 조건이 충족되면 역방향으로 탐색을 시작하는 것이 특징
// 예로 i를 한자리 앞에 수로 등록시켜놓은 다음. 만약 현재 값이 이전 수보다 작다면 서로의 위치를 교환하는 것이 아닌
// 현재 값 위치에다 이전 수 (현재값보다 큰)를 등록 시킨다
// 그리고 역방향으로 순회하면서 현재값보다 작은 수를 확인하고 작은 수가 있다면 비교하는 비교수 위치에다가 둔다
// 최종에 도달했을 때 현재 숫자였던 수를 최종 바꿔진 위치값에다 할당한다
function interSection(arr){
    for(let i=1; i<arr.length; i++){
        let curVal = arr[i];
        let idx = -1;
        for(let j = i-1; j>=0 && arr[j]>curVal; j--){ // 두번째 조건에 충족하지 않으면 for문에 빠져 나옴
            arr[j+1] = arr[j]
            idx = j
        }
        if(idx!==-1)arr[idx] = curVal
    }
    return arr;
}
console.log(interSection([2,1,9,76,4]))
// [2,1,9,76,4]  [1,2,9,76,4]  [1,2,9,76,4] [1,    2,    9,    76,    4]
//  j>i               i                i                              i (현재값은 계속 기억중)
//    2             j<              j<                         j>    j+1(76저장)
//  1                                                    j>     j+1(9저장)      
//  loop종료       loop종료        loop종료          j<cur  j+1(cur저장)  
//                                                   
//
