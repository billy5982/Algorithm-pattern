// bubble sort의 동작 원리
// 배열의 0번째 인덱스부터 순회한다
// 해당 인덱스가 다음인덱스보다 크다면 위치를 *교환* 한다 => 예 arr[1]=> arr[2]  arr[2]=>arr[1]

// 아래들을 강의에서 정리한 방법 아래 방법들은 정렬이 끝났더라도 
// 첫번째 for문을 계속해서 돌것이다.

function finalBubble(arr){
    for(let i=arr.length; i>0; i--){
        let frag = true;
        for(let j=0; j<i-1;j++){ // 만약에 값들을 비교하는데?루프 시 교환이 한번도 안이루어졌다면? 정렬이 끝난것.
            if(arr[j]>arr[j+1]){ 
                swap1(arr,j,j+1)
                frag = false;
            }
        }
        if(frag)break
    }
}
console.log(finalBubble([3,4,2,1,5,6]))
//loop를 실행한다 -> 일단 전부 숫자라 가정한다
//i라는 변수를 가지고 배열에 끝에서부터 실행한다. 수를 비교하고 교환한다
//i-1까지 다시 실행한다.
function bubblesort(arr){
    let leng = arr.length-1;
    while(leng!==0){
        for(let i=0; i<leng;i++){
            if(arr[i]>arr[i+1]){
               arr = swap(arr,i,i+1);
            }
        }
        leng--;
    }
    return arr
}

//while을 사용하지 않는 방법
function bubblesort2(arr){
    for(let i=0; i<arr.length; i++){
        //루프가 끝날 때마다 숫자 뒤에 제일 큰수가 정렬되어 있음 
        //그렇기 때문에 -i를 해서 정렬된 배열은 더이상 순회하지 않는 것이 좋음
        for(let j=0; j<arr.length-i;j++){ 
            if(arr[j]>arr[j+1]){
               arr = swap(arr,j,j+1);
            }
        }
   
    }
    return arr
}

console.log(bubblesort2([3,4,2,1,5,6]))

// ES5 교환 로직
function swap(arr,idx1,idx2){
    let temp = arr[idx2]; // 변수에다 교환하고자 하는 값을 저장
    arr[idx2] = arr[idx1]; // 다음 인덱스에다가 현재 인덱스를 저장
    arr[idx1] = temp; // 현재 인덱스엔 다음 인덱스를 저장 => 교환 끝!
    return arr;
}

// ES6
function swap1(arr,idx1,idx2){
    //구조 분해 할당? 을 이용
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    return arr;
}

// console.log(swap1([1,2],0,1))