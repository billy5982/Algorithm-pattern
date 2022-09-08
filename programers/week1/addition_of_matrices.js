// 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 더한다
// 그럼 조건은 무조건 행과 열의 크기가 같은 배열이 입력될 것이라 가정
// [[1,2]] [[3,4]] 이를 객체로 만든다
// obj1 = {0 : [1,2]} obj2 = {0 : [3,4]}
// 배열의 키를 순회한다
// obj1.keys => 배열로 들어오기때문에 둘은 같은 인덱스를 가지고 있다.
// for of 문을 사용해서 배열을 순회하고, 배열의 값을 더한 배열은 결과값에 리턴한다
/*
// 실행속도 0.15
function solution(arr1,arr2){
    // obj1 = {0 : [1,2]} obj2 = {0 : [3,4]}
    // 풀이 1 : O(n^2)을 사용하지 않으려 했지만 사용할 수 밖에 없었다. 좋은 풀이방법이 아닌 것 같다.
    let result = [];
    let obj1 = {};
    let obj2 = {};
    for(let i =0; i<arr1.length; i ++){
        obj1[i] = arr1[i]
        obj2[i] = arr2[i]
    }
  
   // obj1 = {           obj2 = {
   //     0 : [1,2]          0 : [2,3]  
   //     1 : [2,3]          1 : [4,5]
   // }                 }
 
    let keys = Object.keys(obj1)  // keys = [0,1]
    
    for(let i=0; i<keys.length; i++){ // 두가지가 가지고 있는 인덱스의 값은 같다. 
        let arr =[]; 
        for(let j=0; j<obj1[i].length; j++){ // 인덱스는 배열로 가지고 있기 때문에 해당 배열을 순회해야한다.
            let sum = obj1[i][j] + obj2[i][j]
            arr.push(sum); // 더한 값을 임의 빈 배열에다 넣고
        } // for문이 완료되면 
        result.push(arr); //0번 배열의 합을 최종 결과에 push 한다
    }
    return result
}  */


// 인자로 들어오는 배열안에는 배열이 존재한다
// 둘의 입력값은 같기 떄문에 하나만을 기준으로 for문을 돈다
// 중첩 for문을 사용해서 인덱스값을 더하고 완료되면 최종배열에 하나씩 삽입한다.

/* 코드 속도 0.13
function solution(arr1,arr2){
    const result = []
    for(let key in arr1){ //arr1의 행렬을 순회한다.
        let arr = []
        for(let i = 0; i<arr1[key].length; i++){
            let sum = arr1[key][i] + arr2[key][i]
            arr.push(sum);
        }
        result.push(arr)
    }
    return result;
}
*/

function solution(arr1,arr2){ 
    const result = arr1.map((item,idx)=>{// [[1,2],[2,3]] => map 사용시 [1,2],[3,4] 배열에 접근
        return item.map((el,id)=>{  // item = [1,2] el => 
            return el+arr2[idx][id] // 여기서 리턴되는 것은 arr1[0][0]+arr2[0][0] = 1 + 2, arr1[0][1]+arr2[0][1] = 2 + 3 => [3,5]
        }) 
    })
    return result
}
console.log(solution([[1,2],[2,3]],[[2,3],[4,5]]))

