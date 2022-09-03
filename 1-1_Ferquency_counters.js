// 두개의 문자열이 입력되었을 때 서로 가진 알파벳 수가 같은지 확인하기
// 아나그램 O(n) 방법을 사용 , O(n^2)가 좋지 않은 이유는 입력값에 100이 들어왔을 때 100*100 만큼 중첩 루프가 돌기 떄문
// 'aaz' , 'zza' => false / 'anagram', 'nagarma' // true
// 리턴한 결과 변수 혹은 결과 선언
// 1. 입력받은 두개의 길이가 다르다면 false를 리턴
// 2. 빈 객체의 문자열을 할당하고 해당 문자열이 중첩된다면 해당 갯수를 카운트

function anagram(str1,str2){
    let obj1 = {};
    let obj2 = {};
    if(str1.length!==str2.length)return false;
    for(let el of str1){
        // 키를 생성 혹은 편집, 입력된 문자열의 알파벳을 저장하고, 해당 알파벳
        obj1[el] = (obj1[el]||0) + 1; 
    }
    for(let el of str2){
        obj2[el] = (obj2[el]||0) + 1;
    }
    for(let key in obj1){
        if(!obj2[key])return false //obj2에 obj1의 키가 존재하지 않다면?? -> Str1 문자열을 str2가 가지고 있지 않다는 뜻
        if(obj2[key]!==obj1[key]) return false //키가 존재하지만 중복 횟수가 다르다면??
    }
  return true;
}
console.log(anagram('anagram','nagarma'))

function anagram2(str1,str2){ //저장 객체를 하나만 사용하는 방법
    if(str1.length!==str2.length)return false;
    let letter = {}
    for(let el of str1){
        letter[el] = (letter[el]||0) +1
    }
    for(let i =0; i<str2.length; i++){
        let word = str2[i]
        console.log(letter)
        // letter[word] 는 두가지로 해석이 가능하다. 
        // 1.letter[word] => str2의 문자열이 Letter 의 키로 존재하지 않는 다면 undefined 출력
        // 2. letter[word] => 문자열이 존재한다 하더라고 중첩수에 따라 -1되기 떄문에 문자열이 적게 있다면 
        // - 과정에서 0이 될 것이고 이는 Falsy한 값을 의미
        if(!(letter[word]))return false; 
        if(letter[word]){
            letter[word] -= 1;
        }
        console.log(letter)
    }
    return true
}

console.log(anagram2('azz','zaa'))