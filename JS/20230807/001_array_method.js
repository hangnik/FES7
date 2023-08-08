// 1. push : 배열의 뒤에 값 추가, 배열의 새로운 길이 반환
const arr = [1, 2, 3];
const pushed = arr.push(4);
arr; // [1, 2, 3, 4]
pushed; // 4

// 2. pop : 뒤에서 값을 꺼내고 반환, 꺼낸 값 반환 (빈 배열일 경우 undefined)
const popped = arr.pop();
arr; // [1, 2, 3]
popped; // 4

// 3. unshift : 배열의 앞에 값을 추가, 배열의 길이 반환

// 4. shift : 앞에서 값을 꺼내고 반환, 꺼낸 값 반환 (빈 배열일 경우 undefined)

// 문제 : push, pop, unshift, shift를 이용하여 다음과 같은 배열을 만들어보세요.
// 입력값: [10, 20, 30, 40]
// 출력값: [10, 100, 20, 30, 50]
const array = [10, 20, 30, 40];
array.pop();
array.push(50);
array.shift(10);
array.unshift(10, 100);

// 5. splice(start, deleteCount, item1, item2, ...)
const arr2 = [10, 20, 30];
arr2.splice(1, 0, 100); // 1번째에 0개를 지우고 100을 넣어라 [100, 10, 20, 30]

const arr3 = [10, 20, 30];
arr3.splice(1, 1, 100, 200); // [ 10, 100, 200, 30 ]

// splice에서 인자값을 하나만 넣으면, 그 인덱스부터 끝까지 다 지움
const arr4 = [10, 20, 30, 40];
arr4.slice(1); // 1번째부터 끝까지 다 지움
arr4.splice(1, 2); // 1번째부터 2개를 지움

// 문제
// 만들고 싶은 값: [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 100]
const arr5 = [10, 20, 30, 40];
const x = [1, 2, 3];

// 풀이
arr5.splice(1, 0, ...x);
arr5.splice(7, 0, ...x); // arr.push(...x) 또는 arr.push(1, 2, 3) 또는 arr.push(...[100, 200, 300])
arr5.push(100);

// 6. slice(start, end)
// 주의! 원본은 수정되지 않음 (splice는 원본이 수정됨)
const arr6 = [10, 20, 30, 40];
arr6.slice(1, 3); // 1번째부터 3번째 전까지 자름 [20, 30]
arr6.slice(100, 10000); // index에 없는 값도 오류가 생기지 않음 (splice도 동일)
