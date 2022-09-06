// 선형 검색, indexOf와 includes등이 여기에 포함됨
// 인자로 들어온 배열을 탐색하고, 해당 값이 존재하면 인덱스값을 반환
// 없다면 -1을 반환 
function linearSearch(arr,value){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===value){return i}
    }
    return -1
}
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4))