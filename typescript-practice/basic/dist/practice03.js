"use strict";
/**
 * 함수에서 타입 지정하기
 */
//1. 덧셈 예제
// sum(): number => 리턴값의 타입
function sum(x, y) {
    return x + y;
}
sum(1, 2);
// 에러
// sum('a',1);
//2. 숫자 배열 총합 예제
function sumArray(numbers) {
    //arr.reduce(callback, initialValue)
    // callback : 배열의 각 요소에 대해 실행할 함수, 네 가지 인수를 가짐
    // accumulator : 누산기. 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값임
    // currentValue : 처리할 현재 요소
    // currentIndex (Optional) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작
    // array (Optional) : reduce()를 호출한 배열
    // initialValue (Optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류 발생
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
//3. 반환값이 없을 경우
function returnNothing() {
    console.log('I am just saying hello world');
}
