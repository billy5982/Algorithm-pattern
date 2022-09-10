//큐는 놀이공원의 줄을 생각하면 됨 
// 먼저 들어간 사람이 먼저 먼저 나오는 구조
// 배열로 unshift와 pop을 이용하면 구현할 수 있음 하지만, unshift를 사용할 경우엔 인덱스를 다시 정렬해야 되기 때문에 좋지는 않음
// 혹은 push로 하고 unshift로 처리하는 방법

// 단일 연결리스트에서 맨 뒤를 제거하는 기능은 전체 배열을 순회해서 이전값과 뒤에 값을 찾기위해 순회를 해야되기 때문에
// 좋지 않음
// 맨앞을 제거하고 추가는 맨뒤로 하는 것을 추천
class Que{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    dequeue(){
        if(this.size===0)return null
        if(!this.first.next){
            this.first = null;
            this.last = null;
        }else{
            let nextValue = this.first.next;
            this.first = nextValue;
        }
        this.size--;
        console.log(this)
        return this.size
    }
    enqueue(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        console.log(this)
        return this.size;
    }
}
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let que = new Que();
console.log(que.enqueue('hi'))
console.log(que.enqueue('bye'))
console.log(que.enqueue('bybye'))
console.log(que.dequeue())
console.log(que.dequeue())
console.log(que.dequeue())
console.log(que.dequeue())

