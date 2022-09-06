// 이진 검색 => 정렬된 배열에서 사용하면 유용함
// 배열의 길이가 길때 주로 좋음. 선형검색과 다르게 첫번째부터 일일히 찾는 과정이 아님
// 중간지점과 찾고자 하는 숫자를 비교하고, 크다면 중간지점보다 작은 숫자들을 제외하고 다시 탐색

// 좌측은 작은수, 우측은 큰수 -> 두가지 포인터가 필요 O(log n)
function binarySearch(arr,value){
    let start = 0; //시작 지점
    let end = arr.length-1; // 종료 지점
    let middle = Math.floor((start+end)/2)
    // start와 end라는 포인트는 계속 실행된다.
    // 없는 value가 입력이 된다면? 비교하면서 start와 end의 포인트는 어느 순간 같아지고
    // 둘 중 하나가 넘어오는 순간이 발생한다 
    // 이를 while문으로 추가해주면 없는 값이 입력되었을 때 정상적으로 중지가 된다.
    while(arr[middle]!==value && start<=end){ 
        // if(arr[end]<value)return -1
        // if(arr[start]>value)return -1
        if(arr[middle]>value){ //중간지점 값보다 입력받은 값이 작다면? 시작지점부터 중간지점을 탐색해야한다.
            end = middle-1; //그래서 끝지점을 중간지점으로 할당한다
        }
        else if(arr[middle]<value){ //중간 지점보다 값이 크다면???
            start = middle+1; //시작지점을 중간지점으로 옮겨야 한다.
        }
        middle = Math.floor((start+end)/2)
    }          
    return arr[middle]===value ? middle : -1
}
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12],15))
//[1,2,3,4,5,6,7,8,9,10,11,12], 8
// S         M             E
// arr[M]<8 

//[1,2,3,4,5,6,7,8,9,10,11,12], 8
//             S   M       E
// arr[M]>8

//[1,2,3,4,5,6,7,8,9,10,11,12], 8
//             S E 
//             M
// arr[6]===7 < 8

//[1,2,3,4,5,6,7,8,9,10,11,12], 8
//               E 
//               S
//               M
// arr[7]===8 === 8


function recursiveBinarySearch(arr,value){
     //전체를 탐색했는 데 없을 경우는 -1을 리턴
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((arr.length-1)/2) ; //중간 지점
    // 이진 검색에서 인덱스를 구분할 때 중요한 것은 시작점과 중간점, 종료 지점의 포인트다
    // 예를 들어 배열 자체를 넘긴다면 해당 인덱스의 위치를 찾아낼 수 없을 것이다.
    // 함수를 재실행할 때 포인트만 해당 조건에 알맞게 변경하여 다음 함수를 진행하고
    // 최종 반환값으로는 해당 포인트를 반환하면 된다.
    function recur(start,end,middle){
        if(arr[middle]===value){
            return middle; // 인덱스 값을 반환
        }
        if(start>end)return -1
        if(arr[middle]>value){
            return recur(start,middle-1, Math.floor((start+middle-1)/2));
        }
        if(arr[middle]<value){ //
            console.log(start,end,middle)
            return recur(middle+1,end,Math.floor((middle+1+end)/2)) //binarySearch(arr.slice(0,middle)) + 3
        }
    }
    return recur(start,end,middle)
  }
  console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10,11,12],8))