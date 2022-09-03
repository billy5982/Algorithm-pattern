# Algorithm-pattern


# 알고리즘 패턴에 대해 학습한다
### Big O 표기법 </br>
    * 코드의 시간은 연산과 관련있다
    * 입력 값이 늘어남에 따라 해당 알고리즘의 실행 시간이 어떻게 변하는지에 설명하는 공식
    * O(n) , O(n^2), O(log n)등 
    * 연산에 따라 for문이 2개가 존재하면(O(2n))이런 식으로 표현할 수 있지만 빅오 표현식은 그냥 전체적인 하나의 틀만 보기 떄문에 O(n)으로 표기한다.
    * ![image](https://user-images.githubusercontent.com/104412610/188261099-c792b743-0d8d-4161-a899-f9a196be47d1.png)
    * 예)
        * 입력된 배열에 따라 순회하는 중첩 for문(O(n^2))</br> 
      [1,2,3]이 입력되면 arr[i]=1 일때 1,2,3 arr[i]=2  1,2,3
      이렇게 n*n의 형태를 띄게 된다 그럼 입력된 값에 따라 시간이 n^2만큼 증가되는 것
        * 입력된 배열을 한번만 순회하는 for문 (O(n))
        * 순회하지 않고,입력된 값을 바로 연산해서 리턴하는 함수 (O(1))
        * 공간 복잡도(보조) : 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지 하는지(Number,undefined,null,boolean)은 불변공간이지만 </br>
          배열과 객체 문자열의 경우는 공간을 차지함. 문자열 a는 1의 공간을 차지하지만 a*100개 있다면? 이는 100개의 공간을 차지하는 것.
        *  배열과 객체의 입력방법에 따른 Big o
        * Object.key , value, entries => O(n) => 객체에 접근해서 배열에 추가해야하기 때문
        * 객체의 값 확인, 조회, 삭제는 O(1)
        * 배열의 조희는 O(1)지만, 추가하는 방법에 따른 차이가 있음. unShift를 이용해 앞에 추가하면, index 값을 다시 설정해야하기때문에 O(n)
           뒤에 추가하는 것은 length를 이용하면 되기 떄문에 앞에 추가하는 것보다 효율이 좋음
        * 배열의 탐색 indexOf => O(n)에 속함. 하나하나 인덱스를 확인해야하기 떄문?

### 알고리즘 풀이 방법
    * 문제 해결 접근법
      1. 문제의 이해 - 내 방식대로 한번 생각해보고 정리할 수 있어야 함(어떤 입-출력인지, 입력값이 출력값을 결정하는 지, 출력값을 어떻게 선언할 것인지? 등등)
      2. 구체 예시 확인 - 어떤 입력을 가지고 있는 지 확인하고, 간단한 예시부터 복잡한 예시를 작성해보기
      3. 문제 세분화(의사 코드 사용해도 되지만 간단하게 단계를 나눠도 됨) -
      4. 문제 풀이
      5. 문제 리팩토링
***
     문제 해결 패턴(계속 해서 js파일과 수정해나갈 예정 내방식대로의 해석)
     1. Frrquency_counter : 빈도 카운터 , 중첩 for문을 사용해도 되지만, 입력에 따른 코드 시간 실행이 길어짐
        그래서 중첩 for문을 사용하지 않고 입력값을 객체에 저장.
        해당 저장된 객체의 값을 조회하여 서로 비교하는 방식
     2. Multiple Pointer : 이또한 중첩 for문을 사용하여 해결할 수 있지만 1과 같은 문제로 for문만 사용
        양 끝 인덱스를 지정하거나 처음과 다음 인덱스를 지정하여 해당 결과에 따른 순회 인덱스를 변경하여 값을 원하는 값을 찾아냄
     3. Sliding window : 연속된 문자열 및 숫자를 더하거나 값을 도출할 경우에 사용
        window 처음 조건에 부합하는 값을 만들어놓고 비교해가면서 처음 인덱스를 제거하고 그다음 인덱스를 더하는 방식
     4. 분할 정복 : 입력값이 많을 때 주로 사용 작은 조각으로 세분하여 조각들을 어디로 이동시킬지 결정하는 작업
        배열의 중간을 나누어 해당 값이 입력값보다 작을 경우엔 해당 범위를 점점 좁혀나가는 방식인 것 같음 (추가 다른 패턴들을 통해 학습한다고 하였음)
      
    

