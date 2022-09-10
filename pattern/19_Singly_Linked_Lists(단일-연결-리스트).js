// 연결 리스트 : 문자열,숫자 등 무엇이던 원하는 데이터를 저장하는 구조
// (배열의 경우는 삽입 제거 시 인덱스 순회가 이뤄질 수 밖에 없는 데 연결리스트는 비교적 쉬움)
// 각 노드들은 다음 노드를 가르키는 정보 역시 저장해야하며, 더이상 다음 노드가 없을 경우 null을 저장하게 됨(중간에 있는 노드들은 일일히 추적하지 않는다.)
// 3가지 속성을 볼것
// 헤드 : 연결 리스트의 시작 노드, 헤드가 어딨는 지만 알고 있을 것이며, 
// 헤드 노드부터 다음 두번째 노드를 알아내고 그다음 노드를 알아내는 형식으로 마지막까지 접근할 것임.
// 테일 : 연결 리스트의 마지막 노드
// 길이 : 연결 리스트의 길이를 계속 유지할 것이다.
// --------------------------------------
// 배열과 비슷한 점은 서로 데이터를 가지고 있다는 것
// 배열에서 n번째 값을 찾는 경우에 해당 인덱스 정보로 데이터값을 확인할 수 있지만
// 노드는 n번째의 값을 조회하는 경우 처음부터 순회를 해서 확인해야함. 노드는 하나의 값만을 가지고 있으며 next라는 연결점을 통해
// 다음 노드에 접근할 수 있음

// 연결리스트는 노드들의 집합 . -> 노드란 하나의 데이터를 가지고 있음
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
let first = new Node('hi');
first.next = new Node("there"); // first= {val : hi,next : {val : "there" next : null}}
first.next.next = new Node("how"); // first = {val : hi,next : {val : "there" next : {val : how, next : null}}}
// first를 조회하면 현재 값인 val 와  next로 연결된 새로운 객체를 확인할 수 있음

class SingleLinkedList{
    constructor(){
        this.length  = 0;
        this.tail = null;
        this.head = null;
    }
    push(val){
        // 주어진 인자를 새로운 노드로 만들어야 함
        // 50이 입력되었다면 새로운 노드를 생성한 후 그 노드의 값을 50으로 설정하면 된다.
        // 헤드가 비어있다면 리스트가 비어있는 것을 의미, 헤드와 테일은 새롭게 생성된 노드를 가르키면 됨.
        // 비어있지 않다면 마지막 노드의 next를 새롭게 생성된 노드를 가르키게 하고, 테일이 새롭게 생성된 노드를 가르키도록 설정
        // Node를 이용해야함
        let newNode = new Node(val); //newNode = {val : 인자, next : null}
        if(!this.head){ // 헤드가 비어있으면 생성된 첫 객체를 헤드로 넣어줘야함.
            // 이떄 head와 tail은 서로 같은 데이터를 참조함. 객체는 참조 데이터형
            this.head = newNode;  
            this.tail = newNode; 
        }else{ 
            //헤드가 있다면 테일이 가리키고 있는 마지막 노드에 next가 새로운 노드를 가르키도록 함.
            //처음 head와 테일은 같은 객체를 참조하고 있음(tail 내부 값을 바꾸면 head도 같이 값이 바뀜)
            //head.next로 할 경우에는 tail은 새로운 객체를 가르켜서 next에 값을 넣으면 참조참조가 될 수 있지만
            //head를 새로운 값으로 세팅시켜주는 것이 아니기 때문에 기존에 있던 Next값을 덮어 씌어 버림
            this.tail.next = newNode; 
            // tail을 newNode자체로 바꿔도 이미 head 객체 next에는 newNode가 참조된 상태
            // tail 자체를 newNode로 바꾸지 않으면 다음 tail.next를 했을 때 기존 next를 지워버림
            // head와 tail이 같은 참조값을 참조하고 있기 때문에 tail을 바꿔도 head는 연결구조를 유지할 수 있음
            this.tail = newNode; // 새로 들어온 값으로 tail을 세팅 그래야 다음 값을 세팅할 수 있음
            
        }
        this.length = this.length+1;
 
        return this
    }
    pop(){ 
        // 마지막 인자를 추출
        // 리스트가 없을 경우엔 undefined , 있다면 계속 추적하되 바로 전걸 기억해야함
        if(!this.head)return undefined;
        let current = this.head;
        let newTail = current;

        while(current.next){ // next가 null일 떄 중지. 
            newTail = current; // 한 단계 전껄 기억하는 것
            current = current.next; // 다음 next 객체를 저장
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        //길이를 감지해서 나머지 하나만 남으면?  다 null로 바꿔줌
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        console.log(this) //{val : 3, next :null} 에서 다음 while문 순회시 next가 없기 떄문에 중단됨
        return current
    }
    shift(){ 
        if(!this.head)return undefined
        //제일 앞에 있는 헤드를 제거 하는 방법
        //앞에 있는 헤드와 헤드의 넥스트를 추출
        let cur = this.head;
        this.head = cur.next;
        this.length--;
        if(this.length===0){
            //어차피 헤드가 계속 지워지면 마지막 next는 null이 되기 떄문에 head에 null을 굳이 해줄 이유가 없음
            this.tail = null;
        }
        return cur
    }
    unshift(value){
        // 노드에 다음을 지금 head로 추가하고
        let node = new Node(value)
        //값이 아무것도 존재하지 않을 떄를 대비 헤드와 테일을 
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{ //else처리 해주지 않으면node.next가 현재 this.head를 가르키게 됨.
        node.next = this.head;
        this.head = node;
    }
        this.length ++;
        return this.head
    }
    get(index){
        // 함수는 입력된 숫자인 인덱스를 인자로 받아야 함
        // 인덱스 범위에 따라 예외가 발생
        // 다음을 저장해야된다?
        if(index<0||index>=this.length||this.head===null)return undefined
        let count = 0; // 인덱스 역할 1은 head.next, 2는 head.next.next
        let current = this.head  // 0은 this.head
        while(count!==index){ // 같아질 때 까지 반복.
            //예를 들어서 인덱스가 1이라면 0이 아니니깐 다음으로 이동해야함
            current = current.next; // head.next로 이동
            count++; // 이동 할때마다 count를 올려줘서 인덱스를 체크
        }
        return current;
    }
    set(index,value){
        // 위치 혹은 인덱스와 해당 인덱스에 위치한 노드를 업데이트 하는 것
        // 업데이트할 자릿수와 업데이트할 값을 인자로 받는다
        // get 함수를 이용
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            console.log(this)
            return true;
        }
        return false;
    }
    insert(index,val){
        // 주어진 위치가 어디든 간에 해당 위치를 반환?
        // 길이와 동일하다면 push를 이용해서 마지막에 넣기
        // 0에다 추가하려면 unshift 이용하면 됨
        if(index<0||index>this.length) return false;
        if(index===0){
            this.unshift(val)
            return true
        }
        if(index===this.length){
            this.push(val)
            return true
        }
        if(index>0&&this.length>index){
            let newNode = new Node(val);
            let prev = this.get(index-1);
            let cur = prev.next;
            prev.next = newNode
            newNode.next = cur;
            // let newNode = new Node(val);
            // let cur = this.head; // 해당 인덱스의 다음 자리를 기억하게 
            // let pre = this.head; //해당 인덱스의 자리를 기억하고
            // let count = 0;
            // while(index!==count){
            //     // 2번 인덱스를 지정하면 1과 2를 기억하고 사이에 새로운 노드를 넣어야됨.
            //     pre = cur; // 현재 값을 기억
            //     cur = cur.next; // 다음 값을 
            //     count++
            // }
            // pre.next = newNode;
            // newNode.next = cur;
            // this.length++;
            // console.log(this)
            // return this
        }
    }
    remove(index){
        //인덱스를 제거하고 다음것을 연결하는 것
        if(index===0){
            let nextNode = this.head.next;
            this.head = nextNode;
            return true
        }
        if(index>=this.length){
            return false;
        }
        if(index===this.length-1){
            this.pop()
            return true
        }
        let prev = this.get(index-1);
        let cur = this.get(index)
        prev.next = cur.next;
        this.length --;
        return true;
    }
    reverse(){
        let node = this.head;
        this.head =this.tail; // 마지막 next = null 이 저장됨
        this.tail = node; //tail에는 헤드에 내용이 저장되어 있음
        let next;
        let prev = null;
        for(let i =0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            // [   100,   200,   300,   400]
            //     node  next
         }
        return this
    }
    // traverse(){
    //     let current = this.head // head = {val : 1,next : {}} head.next = {}
    //     while(current){ //current를 아래서 next로 초기화해주면 언젠가 next가 다음 수가 아닌 null인 곳에 도착
    //         console.log(current.val); // 첫 헤드는 {val, next를 가지고있고}
    //         current = current.next; // next {val,next}를 가지고 있음
    //     }
    // }

}
let list = new SingleLinkedList();

list.push(1) // 이때 헤드와 테일은 서로 데이터를 참조하고 있음
list.push(2) // head : {val : 1 next : {val : 2, next : null}} 왜이렇게 되냐?
//tail.next = new를 하게 될경우 head와 tail은 같은 object를 공유하고 있기 떄문에 next가 추가되는 것을 확인할 수 있음
//tail = {val : 2,next : null} 이되는데 이렇게 되도 상관없음 이미 head의 next는 해당 val:2를 참조하고 있기 떄문
//tail.next = new () 하게 될경우 head.next도 바뀐 tail에 참조하고 있음으로 tail.next에 값을 공유하면 거기까지 공유를 함.
list.push(3)
list.push(4)
// list.unshift(5)
// list.unshift(4)
list.insert(2,'hi')


