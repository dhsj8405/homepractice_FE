"use strict";
/**
 * Type Alias
 *
 * 특정 타입에 별칭 붙이는 용도
 */
const person06 = {
    name: '김사람'
};
const expert06 = {
    name: '김개발',
    skills: ['javascript', 'react']
};
const people06 = [person06, expert06];
const color06 = 'red';
const colors06 = ['red', 'orange'];
// 유저의 상태 값 확인할 때 유용하게 사용 가능
// type UserState = 'PENDING' | 'APPROVED' | 'REJECTED';
/**
 * 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 작성하게 될 때
 * => type보다 interface 사용 권장
 */ 
