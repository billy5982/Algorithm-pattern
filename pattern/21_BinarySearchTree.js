// 루트는 모든 자식들의 부모임 하나만 존재
// 자식은 부모보다 크다면 부모의 오른쪽, 작다면 부모의 왼쪽으로 배치
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    //insert
    //root가 존재하지 않다면? 들어온 값이 루트가 됨
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode
            return this;
        }else{// 루트가 존재한다면?
            //루트보다 크다면?? 오른쪽에 배치해야한다. 배치 전 해당 루트에 값이 존재하는 지 확인해야함 
            let cur = this.root; //값을 비교해서 좌-우측으로 바꿔나갈 예정
            while(true){ //해당 root right 나 node right에 숫자가 존재하지 않으면 멈출 것임
                //같은 값을 입력하면 무한 루프가 돈다
                if(val === cur.value)return false;
                if(val<cur.value){ // flag의 값보다 크다면 우측
                    if(!cur.left){ // left가 null이면?
                        cur.left = newNode;
                        return this;
                    }
                    // 해당 자리에 값이 존재한다면
                    cur = cur.left;
                    
                }
                if(val>cur.value){ // flag의 값보다 크다면 좌측
                    if(!cur.right){
                        cur.right = newNode;
                        return this
                    }//해당 자리에 존재한다면 cur을 right로 갱신 
                    cur = cur.right;
                }

            }
        }
    }

    //값 검색 메소드 
    //값이 존재하는 지 찾아보는 메소드, 이진 트리는 좌우로 해당 값보다 큰지 작은지 이동해서 알 수 있음
    //해당 점을 이용. 끝에 도달했을 때 해당 숫자가 없다면? null이라면?
    find(val){
        if(!this.root)return undefined;
        let cur = this.root; // root = Node{value : ? left : ? right : ?}
        while(true){
            if(!cur)return false; //좌우측으로 이동했을 때 해당 값이 존재하지 않으면 false
            if(val === cur.value)return cur;
            if(val>cur.value){
                cur = cur.right;
            }else if(val<cur.value){
                cur = cur.left;
            } //left ,rigth는 객체형태
        }
    }
}

let tree = new BinarySearchTree(); 
console.log(tree.insert(10))
console.log(tree.insert(11))
console.log(tree.insert(8))
console.log(tree.insert(5))
console.log(tree.insert(9))
console.log(tree.find(8))
