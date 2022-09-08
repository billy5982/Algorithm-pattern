// 선택 정렬 : 배열을 순회하면서 가장 작은 값을 찾는다
// 가장 작은 값을 찾으면 해당 인덱스의 값과 원래 인덱스의 값을 변경한다.
// 처음 값이 제일 작다면 변경하지 않는다.
// O(n^)제곱의 시간 복잡도에 대한 얘기임. => 버블정렬보다 나은 것은 스왑수를 줄이는 거 밖에 없음
function selection(arr){
    
    function swap(arr,idx,idx2){
        return [arr[idx],arr[idx2]]=[arr[idx2],arr[idx]]
    }

    for(let i=0; i<arr.length; i++){
        let lowest = i;
        for(let j=i+1; j<arr.length; j++){ // 비교하는 숫자는 현재숫자의 다음부터 검색하면된다.
            if(arr[j]<arr[lowest]) lowest = j; //비교하는 숫자가 더 작다면 인덱스를 비교하는 인덱스로 바꾼다
        }
        if(i!==lowest)swap(arr,i,lowest) //만약 비교하고자한 숫자의 변화가 없으면 위치를 바꾸지 않는다.
    }
    return arr
}
console.log(selection([0,2,34,22,10,19,17]))