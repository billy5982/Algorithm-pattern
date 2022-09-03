// 빈도 카운터 -> 자바스크립트의 객체를 사용해서 다양한 값과 빈도를 수집해주는 것
// 서로 비슷한 값으로 구성되어있는지 등등
// 중첩 루프(n의 제곱 시간)을 사용, 

// 배열 두개를 입력받고, 두번째 배열이 첫번째 배열의 제곱 인지 확인
// [1,2,3] => [1,4,9] => true / [2,5,1] => [25,4,1] => true
// [1,2,3] => [4,9] => false / [1,1,3] => [1,9,2] => false 
function same(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
        // indexOf는 배열을 순회하기 때문에 해당 코든 O(n^2)가 된다. 중첩루트 구조는 사용하는 것이 좋지는 않음
        let currentIdx = arr2.indexOf(arr1[i]**2); //arr1[i]의 제곱수를 arr2에서 있는 지 인덱스 번호를 확인
        if(currentIdx===-1){ //제곱수가 하나라도 존재하지 않으면 false를 리턴해야함
            return false
        }
        arr2.splice(currentIdx,1); //확인된 수는 배열에서 제거
    }
    return true
}

console.log(same([1,2,3],[9,1,4]))
console.log(same([4,9],[1,4]))
console.log(same([1,2],[9,1,4]))


//O(n^2) 같이 중첩 루프는 사용하는 것이 좋지 않음 리팩토링
//for문 중첩이 아니면 O(n) 방식이므로 아래 방법이 좀 더 빠르다. 아래는 for문이 3개여서 O(3n)이지만 빅오는 전체적인 추세만 보기떄문에
//O(n)이라고 할 수 있음
function refacSame(arr1,arr2){
    // for in  => 인덱스,키를 순회, for of => 값을 순회
    if(arr1.length!==arr2.length){
        return false
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let el of arr1){
        // 빈객체의 el arr1의 값을 키로 만든다 = 해당 키가 존재하지 않으면 값은 1이다.
        // || 문법 A || B  A가 falsy한 값이면 B가 출력된다
        // 첫 예제 [1,2,3],[4,9,1]을 비교했을 때 해당 for문이 실행되면 빈객체에 1이라는 키라는 키를 만들고
        // 함께 실행될 땐 객체의 1이 존재하지 않으니깐 키의 값은 0이 된다. +1을 통해 해당 0에 1을 더해준다
        // 만약 [1,1,3] , [4,9,1] 이라고 가정하고 for문이 arr[1]에 갔을 때는?
        // 객체[el]값이 존재하니깐 frequencyCounter1[el] => 1을 반환하고 값에 + 1을 해서 {1 : 2} 가 된다
        frequencyCounter1[el] = (frequencyCounter1[el] || 0) +1 ; 
    }

    for(let el of arr2){
        frequencyCounter2[el] = (frequencyCounter2[el] || 0 ) +1; //위와 동일한 맥락
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){ //frequencyCounter2의 객체의 Key^2 값이 있는 지 확인한다. key in Object
            return false
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){ // 두 객체의 키의 값을 비교한다
            //예) [3,2,3] , [9,4,9] 
            //frequencyCounter1= { 3: 2, 2: 1} frequencyCounter2{9 : 2, 4 : 1}
            //for문의 key는 frequencyCounter1의 키이기 때문에 ^2를 이용해서 frequencyCounter2의 값을 확인해야 한다.
            return false
        }
    }
    return true
}

console.log(refacSame([1,2,3],[4,9,1]))
//frequencyCounter1 = { 1: 1, 2:1 , 3:1} frequencyCounter2 = {4: 1, 9:1, 1:1}