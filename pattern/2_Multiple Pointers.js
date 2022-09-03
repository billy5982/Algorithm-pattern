// 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동 시키는 것
// 조건 정렬된 배열이 있다. [-3,-2,-1,0,1,2,3] => return [-3,3]
// 첫번째 수와 그다음 수들을 더한 값이 0인 배열을 리턴한다.
// 아래도 O(n^2) for문이 중첩 되기 떄문 만약 배열의 길이가 100개가 들어오면
// 약 10000개 이하? 로도 나올수 있지만 그마늨ㅁ의 for문이 실행됨
function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===0)return [arr[i],arr[j]]
        }
    }
}
console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))
 

// 양끝에서 이동하는 구조 while을 이용하며 두숫자의 합이 양수일땐 끝숫자가 왼쪽으로 이동하고
// 음수일 땐 첫 숫자가 오른쪽으로 이동하는 구조가 좋다.
function sumZero2(arr){
    //시작할 인덱스 지정
    let left = 0;
    let right = arr.lenght-1;
    while(left<right){//둘다 음수이면 실행이 되지 않음 [-3,-2,-1]
        let sum = arr[left] + arr[right]
        if(sum ===0)return [arr[left],arr[right]];
        if(sum>0){ // 두 인덱스의 합이 양수이면?
            right--; // 끝숫자가 한단계 이동한다
        }else{ // 음수이면?
            left++; // 첫숫자가 한단계 이동한다.
        }
    }
}
console.log(sumZero([-4,-3,-2,-1,0,2,10]));
// 양수일 땐 큰숫자를 줄여주고 음수일 떈 작은 숫자를 줄여서 둘의 합의 수를 점점 줄여가는 방식
//-4 10 = 양수 10가 2으로 이동 -> -4 2하고 비교 -4가 -3으로 이동

// 포인터를 양끝에서 움직이지 않고, 한쪽에서 시작하는 방식
// 수의 종류가 몇가지 있는 지 알아보는 알고리즘이라고 생각(주어지는 배열은 항상 정렬되어있다고 생각)
//  i                   =>  i   두수가 다름을 감지  =>    i i를 이동 또 다름을 감지 =>       i
// [1,1,3,4,5,5,6,7,7]     [1,1,3,4,5,5,6,7,7]     [1,3,3,4,5,5,6,7,7]        [1,3,4,5,5,6,7,7]
//    j                 =>      j              =>         j도 이동          =>         j
function pointer(arr){
    let i = 0;
    if(arr.length===0) return i;
    for(let j = 1; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
  
    return i+1
}
console.log(pointer([1,2,3,4,5,6]))