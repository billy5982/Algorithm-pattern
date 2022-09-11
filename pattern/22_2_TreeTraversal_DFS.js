// 전위 순회(preOrder)
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode
            return this;
        }else{
            let cur = this.root;
            while(true){ 
                if(val === cur.value)return false;
                if(val<cur.value){
                    if(!cur.left){ 
                        cur.left = newNode;
                        return this;
                    }
                    cur = cur.left;        
                }
                if(val>cur.value){ 
                    if(!cur.right){
                        cur.right = newNode;
                        return this
                    }
                    cur = cur.right;
                }
            }
        }
    }

    find(val){
        if(!this.root)return undefined;
        let cur = this.root; 
        while(true){
            if(!cur)return false; 
            if(val === cur.value)return cur;
            if(val>cur.value){
                cur = cur.right;
            }else if(val<cur.value){
                cur = cur.left;
            } 
        }
    }
    BFS(){
        let node;
        let data = [] 
        let que = []; 
        que.push(this.root);
        while(que.length){
            node = que.shift(); 
            data.push(node.value); 
            if(node.left)que.push(node.left);
            if(node.right)que.push(node.right);
        }
        return data
    }
    // 전위순회
    DFSPreOrder(){ 
        let data = []; // 조회한 노드를 여기에 담아서 마지막에 리턴할 것임
        let current = this.root; // 방문한 노드롤 해당 변수에 담아서 업데이트 해줄 것임
        function traverse(node){//헬퍼함수? 
            // 노드의 값을 data변수에 push할 것    
            data.push(node.value);
            if(node.left)traverse(node.left); // left가 먼저 시작 됨 해당 왼쪽 값을 다 끝내면 root에 대한 콜스택 정리 되고 아래 right가 실행됨
            if(node.right)traverse(node.right);
        }
        traverse(this.root)
        return data
    }
    // 후위 순회
    DFSPostOrder(){
        //preOrder과 밀접 대신에 자식노드를 반환하고 나서 부모요소를 반환해야함
        let data = [] // [3,8,6,20,15,10]
        let cur = this.root; // 노드를 기준으로 하고 싶으면 나중에 인자로 노드를 넣으면 됨
        function traverse(node){
            if(node.left)traverse(node.left); // 탐색을 우선으로 함. 마지막 left,right가 존재하지않으면 해당값 먼저 푸쉬, 부모노드에서 해당 if문이 끝났으니 data.push(부모가 됨.)
            if(node.right)traverse(node.right); 
            data.push(node.value)          
        }
        traverse(cur)
        return data
    }
    // 중위 순회
    DFSInOrder(){
        // 기준을 정하고 해당 기준에 자식에서부터 push 하는 방법?
        //        10      [3,6,8,10,15,20]
        //      6    15
        //    3   8     20
        // 왼쪽을 먼저 가서 데이터를 푸쉬
        let data = [];
        let cur = this.root;
        function traverse(node){
            if(node.left)traverse(node.left)
            data.push(node.value)
            if(node.right)traverse(node.right);
        }
        traverse(cur);
        return data;
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

console.log(tree.DFSInOrder())