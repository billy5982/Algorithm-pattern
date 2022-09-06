// 루프를 두개 제작한다, 함수에 전체구문와 짧은 구문을 전달 받는다
// 1. 전체구문을 돌 loop
// 2. 짧은 구문을 돌 loop => 해당 구문이 끝까지 돌면 같은 단어를 찾은 것이므로 count++ 해준다
function Naive(str,findStr){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]===findStr[0]){
            for(let j =0; j<findStr.length; j++){
                if(str[i+j]!==findStr[j])  break;//str의 글자와 findStr의 글자가 같지 않다면 해당 구문을 중지한다
                    
                if(j===findStr.length-1)count++; // 중지가 되지 않고 j가 findstr 끝 문자열에 도달했다면?
                
            }
        }
    }
    return count
}
console.log(Naive('omgomgwwwomgomg','omg'));