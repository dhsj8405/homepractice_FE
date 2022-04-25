/**
 * 클래스가 아닌 일반 객체를 interface로 타입 설정하기
 */

interface Person {
   name: string;
   age?: number; // 물음표는 설정을 해도 되고 안해도 되는 값이라는 것을 의미
 }
 
// 01 일반 객체를 interface로 타입 설정
 interface Developer01 {
   name: string;
   age?: number;
   skills: string[];
 }
 
 const person01: Person = {
   name: '김사람',
   age: 20
 };
 
 const expert01: Developer01 = {
   name: '김개발',
   skills: ['javascript', 'react']
 };

// 02 interface extends interface

interface Developer02 extends Person {
   skills: string[];
 }
 
 const person02: Person = {
   name: '김사람',
   age: 20
 };
 
 const expert02: Developer02 = {
   name: '김개발',
   skills: ['javascript', 'react']
 };
 
 const people: Person[] = [person02, expert02];