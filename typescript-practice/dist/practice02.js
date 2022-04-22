"use strict";
/**
 * 기본 타입 지정하기
 */
let count = 0; //let count: number = 0; 명시적으로 표현해줘도 됨
count += 1;
// 에러
//count = '문자열'; 
const message = 'hi';
const done = true;
const numbers = [1, 2, 3];
const messages = ['hello', 'word'];
// 에러
// messages.push(1); 
/**
 * 타입 여러개 지정하기
 */
// string 일수도 있고 undefined 일수도 있음
let mightBeUndefined = undefined;
// number 일수도 있고 null 일수도 있음
let nullableNumber = null;
let color = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// 에러
// color = 'green'; 
