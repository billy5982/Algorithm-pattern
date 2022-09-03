// 분할 정복 개념: 주로 배열이나 문자열 같은 큰 규모의 데이터 셋을 처리
// 연결리스트나 트리가 될 수도 있음


// 값을 찾기 위해 배열의 왼쪽에서 오른쪽으로 이동하지 않고
// 작은 조각으로 세분하여 조각들을 어디로 이동시킬 지 결정하는 작업 먼저 진행 => 큰 데이터 덩어리를 작은 조각으로 나누는 것
// 항상 그렇지는 않음

// indexOf의 기능을 하는 함수  ([1,2,3,4], 4) => 4의 인덱스 값을 반환, 없으면 -1 반환
// 인자로 입력된 배열에 길이가 크다면? => 배열의 기준을 나눠서 해당 숫자와 비교하고, 그이후를 탐색한다 (이진 탐색?)
// 이 과정은 다른 세션에서 좀 더 다룰 예쩡

function search(arr,num){
    let min = 0;
    let max = arr.length-1;

    while(min<=max){
        let middle = Math.floor((min+max)/2);
        let currentElement = arr[middle];

        if(arr[middle]<num){
            min = middle +1;
        }else if(arr[middle]>num){
            max = middle -1;
        }else{
            return middle
        }
    }
    return -1
}