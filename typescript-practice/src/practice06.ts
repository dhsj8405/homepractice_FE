/**
 * Type Alias
 * 
 * 특정 타입에 별칭 붙이는 용도
 */

type Person06 = {
  name: string;
  age?: number; //  물음표는 설정을 해도 되고 안해도 되는 값이라는 것을 의미
};

// & 는 Intersection 으로써 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer06 = Person06 & {
  skills: string[];
};

const person06: Person06 = {
  name: '김사람'
};

const expert06: Developer06 = {
  name: '김개발',
  skills: ['javascript', 'react']
};

type People06 = Person06[]; // Person06[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people06: People06 = [person06, expert06];

/**
 * 유니온타입
 * 자바스크립트의 OR 연산자(||)와 같이 'A' 이거나 'B'이다 라는 의미의 타입
 */

  type Color06 = 'red' | 'orange' | 'yellow';
  const color06: Color06 = 'red';
  const colors06: Color06[] = ['red', 'orange'];
  
  // 유저의 상태 값 확인할 때 유용하게 사용 가능
  // type UserState = 'PENDING' | 'APPROVED' | 'REJECTED';

  
/**
 * 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 작성하게 될 때
 * => type보다 interface 사용 권장
 */