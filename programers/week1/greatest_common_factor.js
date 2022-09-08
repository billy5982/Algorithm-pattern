// 최대 공약수 최소 공배수 구하기
// 최대 공약수 두수의 약수를 구한다
// 16의 약수 => 1,2,4,4,8,16

// 최대 공배수 구하기
// i와 주어진 수를 나눈다. 나머지가 있다면? 이는 약수에서 제외한다.(자연수가 기준임)
// i++ 되며 소수점이 포함되어 있으면 해당 수를 제외한다. 그리고 나누기 결과값이 i보다 크다면 반복을 중단한다
// function solution(n, m) {
//     if(n<1) return null// 1이상이여야만 공약수를 확인할 수 있음
//     if(m<1) return null;
//     const answer = [];
//     const nDivisor =  great(n)
//     const mDivisor =  great(m)
      
//     let greatest = 0;
//     //최대 공약수 구하기 완료
//     if(nDivisor.length>mDivisor.length){
//         for(let i=0; i<nDivisor.length; i++){ // 공약수 특성상 오름차순 배치이기떄문에 따로 if안써도 될듯
//             if(mDivisor.includes(nDivisor[i])){
//                 greatest = nDivisor[i]
//             }
//         }
//     }else{
//         for(let i=0; i<mDivisor.length; i++){ // 공약수 특성상 오름차순 배치이기떄문에 따로 if안써도 될듯
//             if(nDivisor.includes(mDivisor[i])){
//                 greatest = mDivisor[i]
//             }
//          }
//     }
//     let max = 0;
//     let min = 0;
//     if(n>m){
//         max = n;
//         min = m
//     }else{
//         max = m;
//         min = n;
//     }
//     let minial = 0;
//     for(let i = 1; i<=max; i++){
//         if(i*min>max) break // 곱한 값이 커지면 더이상 최소공배수는 작은숫자가 될 수 없음
//         if(i*min===max){
//             minial = i*min
//         }
//     }
//     if(minial===0)minial = min*max
//     return [greatest,minial]
// }

// function great(x){
//     const saver =[]
//     for(let i =1; i<=x; i++){  
//           if(i===1){ // 기본은 고정
//             saver[0] = i;
//             saver[1] = x;
//             continue;
//           }    
//           if(i>x/i)break // 만약 i가 최대값과 나눴을 때 i가 더크다면? 그럼 약수의 위치가 바뀐것이기 때문에 break;
//           saver.splice(i-1,0,i); //시작시 i가 1로시작하기 때문에 다음 자리수에 넣어주기 위해서는 -1 해야함
//           saver.splice(i,0,x/i); //다음 숫자에 넣어주기 때문에 큰수는 0에 넣어도 됨.
//     }
//     //소수점 제거
 
//     for(let j = 0; j<saver.length/2; j++){// 시작 지점부터 절반만 제거
//         if(String(saver[j]).includes('.')){ 
//             saver.splice(saver.length-1-j,1,0)
//             saver.splice(j,1,0)
//         }
//     }
//     for(let i = saver.length/2; i<saver.length; i++){
//         if(String(saver[i]).includes('.')){
//             saver.splice(saver.length-1-i,1,0) // 자리수를 유지하기위해 1로 대체
//             saver.splice(i,1,0)
//         }
//     }
//     for(let i=0; i<saver.length; i++){
//         if(saver.indexOf(0)>-1){
//             saver.splice(saver.indexOf(0),1)
//         }else{
//             break
//         }
//     }
//     return saver
// }
// console.log(solution(60,48))

// 두 수를 입력 받는다
// 두 수를 같은 숫자로 나눴을 때 나머지가 0인 숫자를 뽑는다
// 예) 60 48를 2로 나누면? 30 24, 30 24로 함수를 다 실행한다. 2로 나눌 수 있다 그러면 15, 12가 나온다(실행조건)
// 15 12는 2로 나눴을 때 0이 나오지 않으니 3으로 나눈다 => 5 4 가 나오니깐 해당 수로 다음 함수를 실행한다.(실행조건 2) -> for문을 이용해보는 것도 좋을 듯?
// 작은 수까지 나눴을 때는 0이 안나온다 이럴경우에는 해당 숫자를 반환한다 (마지막 경계조건)

function solution(num1,num2){
    
    let greatest = []; //나눴을 떄 나눠지는 것들만 저장
    let endDivide = []; // 최종적으로 나눠지지 않은 것을 저장

    let min = num1>num2 ? num2 : num1
    let max = num1>num2 ? num1 : num2

    function recursive(n1,n2){ // n2자리에는 나눴을 떄 큰값이 들어간다
        let devideNum = 0; //나눠 떨어지는 숫자를 여기에 등록한다
        let minNum = 0; //n1과 devideNum의 나눈 값
        let maxNum = 0; //n2와 devideNum의 나눈 값
        for(let i=2; i<=n1; i++){ //나눌 수의 기준은 i이며, 2부터 시작하여 나머지가 없는 작은수 까지 입력한다. 
            if(n1%i===0 && n2 %i ===0){ //수를 나눴을 떄 두 수 전부 나머지가 0이어야 된다.
                devideNum = i;
                minNum = n1/devideNum; // 나눈 값을 이용하여 다시 실행할 것
                maxNum = n2/devideNum; // 나눈 값을 이용하여 다시 실행 할것
                greatest.push(devideNum);
                break;
            }
        }

        if(devideNum===0){ // 두수를 나눴을 때 나머지가 존재하지 않으면
            endDivide.push(n1,n2)
            return;
        }else{
            recursive(minNum,maxNum)
        } //base Case

    } 
    recursive(min,max)
    
    return [greatest.reduce((acc,cur)=>acc*cur,1),greatest.reduce((acc,cur)=>acc*cur,1) * endDivide.reduce((acc,cur)=>acc*cur,1) ]

}

console.log(solution(60,48))
