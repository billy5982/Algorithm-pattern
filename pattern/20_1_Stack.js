// 배열로 스택 만들기 후입 선출 1-> 4-> 6 6,4,1 순서로 출력
// 추가는 push로 순서대로 하지만, 지울 때 pop으로 지우면 뒤에서부터 지워짐 -> 더 효율적
// unshift로 추가하는 방법, shift로 제거함 -> 앞에서 제거하면 인덱스를 다시 설정하기 때문에 

// 스택 클래스 사용 -> 단일 연결원칙 따름
// 맨앞을 추가 제거 
// 스택은 제거와 삽입을 우선시 함. O(1)
class Stack{
    constructor(){
        this.first = null; // 연결리스트의 헤드를 뜻함
        this.last = null;
        this.size = 0;
    }
    push(val){
            let newNode = new Node(val)
            if(!this.first&& this.last===null){
            this.first = newNode
            this.last = newNode
            }
            else{
            let prev = this.first
            this.first = newNode;
            this.first.next = prev}
            this.size++;
            return this;
        }
    pop(){
        if(!this.first){
            return undefined
        }
        if(this.fisrt === this.last){
            this.last = null
        }
        let temp = this.first 
        this.first = this.first.next;
 
        this.size--;
        return temp.value
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
let stack = new Stack()
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())      
console.log(stack.pop())      
