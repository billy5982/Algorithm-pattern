// 순수 재귀함수를 이용해서 아래 헬퍼 메소드 재귀함수를 구현
// 순수 재귀함수를 구현할 때, 배열을 복사하는 경우라면?
// slice,spread,concat메소드를 사용할 수 있음 배열을 변경할 필요가 없음.
function collectOddValues(arr){
    let newArr = [];
    // 최종적으로 빈배열을 리턴해서 해당 빈배열에 푸쉬를 하면??
    if(arr.length===0)return newArr;
    if(arr[0]%2===0){
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}
console.log(collectOddValues([1,2,3,4]))
//설명
/*
    newArr = newArr.concat(collectOddValues([1,2,3,4,5]))
    1회차 newArr = [].concat(collectOddValuse([2,3,4,5]))
                                [2].concat(collection([3,4,5]))
                                    [].concat(collection([4,5]))
                                        [4].concat(collection([5]))
                                            [].concat(collection[])
                                            []배열에 []배열 합함
                                        [4].concat([])    
                                    [].concat([4])
                                [2].concat([4])
                            [].concat([2,4])
        newArr = [2,4]
*/

// 헬퍼 메소드 재귀 함수
// 함수 내부에 재귀함수를 하나 더 작성해서 필요한 데이터를 외부 변수에 뺴내는 것.
// 그리고 재귀함수가 종료되었을 때 데이터를 수집한 것을 반환
function collection(arr){
    let result =[];
    
    function helper(helperInput){
        if(helperInput.length ===0){ //Base Case : 종료 조건
            return;
        }
        if(helperInput[0]%2===0){
            result.push(helperInput[0]) //짝수들만 result에 넣음
        }
        return helper(helperInput.slice(1))
    }
    helper(arr) // 해당 함수가 끝나면 result에는 짝수인 것들만 모여있음
    return result // 짝수만 찾은 것들을 리턴
}
console.log(collection([1,2,3,4]))

// 재귀함수 예제 1. Math.pow를 구현하기 Math.pow는 첫번쨰 인자를 두번쨰 인자 횟수만큼 곱함.
function power(num1,n){
    if(n===0)return 1;
    return num1*power(num1,n-1)
}
console.log(power(2,4))

// 예제 2. 팩토리얼 구현. 팩토리얼은 n이 주어지면 1까지의 숫자를 모두 곱합
// if 5 * 4 * 3 * 2 * 1
function factorial(n){
    if(n===1)return 1;
    return n*factorial(n-1)
}
console.log(factorial(7))

// 예제 3. 배열의 첫번쨰 수를 곱함
// [1,2,3] 1*2*3 
function productOfArray(arr){
    if(arr.length===1)return arr[0];
    return arr[0]*productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3,10]))

// 예제 4.n부터 0까지의 합을 더하는 문제?
// 10+9+ ... + 0 수를 뺴면서 하나씩 하나씩 더해야함
function recursiveRange(n){
    if(n===0)return 0;
    return n+recursiveRange(n-1)
}
console.log(recursiveRange(10))

// 예제 피보나치 수 피보나치수는 0번쨰와 1번쨰가 고정됨.
// 그리고 n번째 수는 n-1,n-2이다
function fib(n){
    if(n<=1)return n
    return fib(n-1)+fib(n-2)
}

// 문자열 뒤집기?
// 내가 생각한것 arr.slice를 0부터 마지막 인덱스를 제외한 것으로 실행시키고
// arr에 제일 마지막 영문을 더하기 시작할 것. base케이스는 0이 될때
function reverse(str){
    if(str.length===0)return ''
    return str[str.length-1] + reverse(str.slice(0,str.length-1))
}
console.log(reverse('awesome'))

//양끝의 문자열이 같은지 비교하기??? 
//양끝 문자열이 같으면 slice로 쳐내기, length가 2개만 남았다면 둘이 비교했을 때 같다면 true를 리턴(basecase)
function isPalindrome(str){
    if(str.length===1)return true
    if(str.length===2)return str[0]===str[1] //비교 연산자를 사용했기때문에 다르면 false가 나옴
    if(str[0]===str.slice(-1)){
        return isPalindrome(str.slice(1,-1))
    }
    return false
}
console.log((isPalindrome('amanaplanacanalpanama')))

//첫번째 인자에는 배열, 두번째 인자에는 func이 전달된다.
// func은 무언가를 비교하는 비교함수이며, 해당 조건에 부합할 경우 true 부합하지 않을 경우 false를 리턴한다
// 조건은 하나하나씩 비교된다.
const isOdd = vol => vol % 2 ===0;
function someRecursive(arr,func){
    console.log(arr)
    if(arr.length===0)return true
    if(!func(arr[0]))return false; // 해당 함수에 대한 비교가 false라면 전체 리턴 false
    return someRecursive(arr.slice(1),func);
}
console.log(someRecursive([4,6,8], val => val > 10))
console.log(someRecursive([4,6,8],isOdd))

// 배열안에 배열이 있다면 해당 배열을 풀어서 리턴
function flatten(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){

        if(Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
console.log(flatten([1, 2, 3, [4, 5] ]))

//배열 값(문자)의 첫번째만 대문자로 바꾸기
function capitalizeFirst(arr){
    if(arr.length===0)return []
    return [arr[0][0].toUpperCase()+arr[0].slice(1,arr[0].length)].concat(capitalizeFirst(arr.slice(1)))
}
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

//객체내의 짝수값을 확인 후 짝수의 합을 리턴
// 객체안에 객체가 있으니 객체를 확인해야함, 해당 객체의 값이 object인지 숫자인지 판별
// object가 아니면 return baseCase
function nestedEvenSum (findobj) {

    let result = [];
    
            for(let key in findobj){
                if(typeof findobj[key]==='object'){
                    result = result.concat(nestedEvenSum(findobj[key]))
                }else if(typeof findobj[key]==='number' && findobj[key]%2===0) {
                    result.push(findobj[key]); //number라면 데이터를 푸쉬
                }
            }
           
    return result.reduce((acc,cur)=>acc+cur,0);
    

}
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj2)); // 6
//   nestedEvenSum(obj2); // 10

// arr안에 배열로 들어오나?
function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }

//객체를 받아서 객체의 값이 숫자면 숫자를 문자열로 치환하고 객체 자체를 다시 반환하는 함수
function stringifyNumbers(obj){
    let newObj = Object.assign({},obj)
    
    for(let key in newObj){
        if(typeof newObj[key]==='number'){
            newObj[key] = String(newObj[key]);
        }else if(typeof newObj[key]==='string'){
            newObj[key] = Number(newObj[key])
        }else if(!Array.isArray(newObj[key])&& typeof newObj[key]==='object'){
            newObj[key] = stringifyNumbers(newObj[key]);
        }
    }
    return newObj
}

let obj = {
    num: '1',
    test: [],
    data: {
        val: '4',
        info: {
            isRight: true,
            random: '66'
        }
    }
}
console.log(stringifyNumbers(obj))

//객체의 값을 모두 array 배열에 넣어 반환한다.
function collectStrings(newObj){
    let result =[];
    let newObj2 = Object.assign({},newObj);
    for(let key in newObj2){
        if(typeof newObj2[key]==='object'){
            result = result.concat(collectStrings(newObj2[key]))
        }else{
            result.push(newObj2[key])
        }
    }
    return result
}

const objNew = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(objNew)) // ["foo", "bar", "baz"])