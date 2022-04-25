"use strict";
/**
 * Generic(제네릭)
 *
 * 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법
 * => 다양한타입을 사용할 수 있게하는 기법
 */
/**
 * 함수에서 Generics 사용하기
 */
// 1. 제네릭 사용없이 any로 타입제한 풀어주기 
// merge: 객체 A와 객체 B를 합쳐주는 함수
function merge01(a, b) {
    /**
     * 리턴값 any
     * => 어떤 타입의 데이터가 리턴되는지 알 수 없다.
     * => 타입을 미리 알 수 있는 타입스크립트의 의미상실
     *  any사용은 지양하는게 좋을 것 같으며,
     *  제네릭을통해 타입체크와, 타입제한을 적절히 해야할 것같음
     */
    return Object.assign(Object.assign({}, a), b);
}
const merged01 = merge01({ foo: 1 }, { bar: 1 });
//2. 제네릭 사용
// 01
function merge02(a, b) {
    //function 함수이름<타입이름>(param: 타입이름): 리턴타입{
    return Object.assign(Object.assign({}, a), b);
}
const merged02 = merge02({ foo: 1 }, { bar: 1 });
//02
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
const items = {
    list: ['a', 'b', 'c']
};
/**
 * 제네릭을 사용해줌으로써
 * list가 숫자배열인 경우, 문자열배열인경우, 객체배열, 다른 타입의 배열인 경우에도
 * 하나의 interface만 사용해서 타입을 설정할 수 있다.
 */
/**
 * class에서 제네릭 사용하기
 */
//데이터를 등록 할 수 있는 자료형
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item); //array.push() :  배열의 끝에 하나 이상의 요소를 추가
    }
    dequeue() {
        return this.list.shift(); //arrya.shift() : 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.length);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.length);
