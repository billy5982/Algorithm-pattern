// function pseudo{
// 큐를 이용할 것
// 루트를 가지고 해당 큐를 넣음 큐에 무언가가 있다면 루프를 계속 돌림
// 큐는 선입선출, 먼저들어간것이 출력될 때 먼저 출력되어야함
// shift느낌으로 제거하고 push느낌으로 추가하는 큐의 특징
// 루트를 해당 큐에 넣어준다?
// 해당 큐에서 dequeue를 진행
//     10           Queue = [6,15] que에 무언가가 있다면? visited로 넘김
//   6    15        visited = [10]
// 3  8      20     Queue = [15,3,8]
//                  visited = [10,6]
//     10           Queue = [6,15] que에 무언가가 있다면? visited로 넘김
//   6    15        visited = [10]
// 3  8      20     Queue = [15,3,8]
//                  visited = [10,6]
//                  Queue = [3,8,20]
//                  visited = [10,6,15]
//                  Queue = [20]
//                  visited = [10,6,15,3,8]
//                  Queue = []
//                  visited = [10,6,15,3,20]
// }
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
    BFS(){
        let node;
        let data = [] // 
        let que = []; // 
        que.push(this.root);
        while(que.length){ //que에 무언가가 있다면?
            node = que.shift(); //첫 시도에 root 객체 {value : ? next : ?}
            data.push(node.value); // 객체 자체를 데이터에 넣는다?
            if(node.left)que.push(node.left);
            if(node.right)que.push(node.right);
        }
        return data
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.BFS())