// 이진 검색 => 정렬된 배열에서 사용하면 유용함
// 배열의 길이가 길때 주로 좋음. 선형검색과 다르게 첫번째부터 일일히 찾는 과정이 아님
// 중간지점과 찾고자 하는 숫자를 비교하고, 크다면 중간지점보다 작은 숫자들을 제외하고 다시 탐색

// 좌측은 작은수, 우측은 큰수 -> 두가지 포인터가 필요
function binarySearch(arr,value){
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start+end)/2)
    while(arr[middle]!==value && start<=end){ // start와 end라는 포인트는 계속 실행된다.
        console.log(start,end,middle)
        // if(arr[end]<value)return -1
        // if(arr[start]>value)return -1
        if(arr[middle]>value){
            end = middle-1;
        }
        else if(arr[middle]<value){
            start = middle+1;
        }
        middle = Math.floor((start+end)/2)
    }
            
    return arr[middle]===value ? middle : -1
}


// function recursiveBinarySearch(arr,value){
//     if(arr.length===0)return -1; //전체를 탐색했는 데 없을 경우는 -1을 리턴
//     let start = 0;
//     let end = arr.length-1;
//     let middle = Math.floor((arr.length-1)/2) ; //중간 지점

//     if(arr[middle]===value){
//         return middle+1; // 인덱스 값을 반환
//     }
//     if(arr[middle]>value){
//        return recursiveBinarySearch(arr.slice(0,middle-1),value)+middle 
//     }
//     if(arr[middle]<value){ //
//         console.log(arr.slice(middle+1))
//        return recursiveBinarySearch(arr.slice(middle+1),value)-middle //binarySearch(arr.slice(0,middle)) + 3
//     }
   
//   }
  console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12],15))