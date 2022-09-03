// 느낌
// for문을 하나만 쓰기 위해서 전달된 조건에 따라 맨 처음값을 세팅해놓고
// 해당 세팅값을 두고, 처음숫자를 뺴고 새로운 숫자를 더하는 방식
// 포인터 이동의 느낌

// 예제 1
// 문자열이 있으면 서로 다른 연속된 문자열(중복 x)을 찾고 그 중 길이가 제일 긴 연속된 문자열을 리턴한다
// hellothere => hel 에서 끝김 l의 중복이 있기 때문, lother , e가 두개 들어가기 때문에 마지막 e는 포함 x 

// 예제 2
//서로 마주한 숫자중 가장 큰 합을 리턴
// [1,3,2,4,6,5],2 => 11
// [4,2,1,5,2],4 => 13 
//창문을 하나 만든다 이에 시작점은 보통 인덱스의 처음

//O(n^2) 이용
function maxSubarraySum(arr,n){
    let max = 0;
    for(let i =0; i<arr.length-n+1; i++){
        let sum = 0;
        for(let j=0; j<n; j++){
            sum += arr[ i + j]
        }
        if(sum>max) max = sum;
    }
    return max
}
console.log(maxSubarraySum([2,5,6,9,2,1,8,5,6,3],3))

//O(n) 이용
function maxSubarraySum2(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length< num)return null;
    for(let i=0; i<num; i++){ //일단 처음 해야할 것들을 처리, 0번쨰 인덱스부터 n번쨰 인덱스 까지의 합을 구함
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = num; i<arr.length; i++){ //num까지 배열을 순회했으니 num부터 시작 i는 다음 숫자를 의미하며 num과 뺄시 처음 숫자가 나온다.
        // [1,2,3,1,5],2 라고 가정
        // 첫 maxSum = 3 ([1,2])
        // tempSum의 for문은 N부터 시작 왜냐면 위에서 n-1개까지의 합을 미리 변수에 할당해줬기 떄문
        
        // 1회차 
        // tempSum - arr[(num==2)-(i==2)] + arr[2] 0번쨰 인덱스를 뺴주고 추가로 2번쨰 인덱스를 더해줌 tempSum =5 , maxSum = 3 
        // mathMax로 인해 maxSum은 5가 됨. maxSum = 5, tempSum = 5

        // 2회차
        // tempSum = tempSum-arr[(num==2)-(i==3)] tempSum = 5-arr[1]+arr[3] = 5-2+1
        // tempSum =4 maxSum = 5  maxSum 유지 
        tempSum = tempSum-arr[i-num]+arr[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum
}
console.log(maxSubarraySum2([2,5,6,9,2,1,8,5,6,3],3))