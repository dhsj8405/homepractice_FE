
# 타입스크립트(typesciprt)

## 자바 스크립트
 - 자동 완성 기능이 좋지않다.
 - 함수 파라미터 타입 체킹을 안해준다.
    ```
    function getLength(str) {
        return str.length;
    }
    ```
        아래 코드처럼 숫자 넣어도 문제 안생김
    ```
        getLength(3);
    ```

 - 리덕스 사용시 상태 안의 값 확인이 귀찮음

 - 리액트 컴포넌트 쓸 때 어떤 props 를 넣어야하는지 에디터에서 알 방법이 없다.

## 타입 스크립트
   - 정적 타입의 컴파일 언어  
   - 타입스크립트 컴파일러 또는 바벨을 통해 자바스크립트 코드로 변환해야함  
   - 자바스크립트의 슈퍼셋  
       = 자바스크립트 기본 문법에 타입스크립트의 문법을 추가한 언어  
   - 객체지향 프로그래밍 지원  
       ES6에서 새롭게 사용된 문법 포함, 객체지향 프로그래밍 패턴(클래스,인터페이스,상속,모듈) 제공  
   - 장점
       - 코드 작성 단계에서 타입을 체크  (코드 탐색과 디버깅)   
           -> 오류 확인, 선 타입 결정으로 실행 속도가 빠름  
       - 자바스크립트 호환(100%)  
       - 점진적 전환 가능  
           -> 기존 자바스크립트에서 특정 기능 부분적으로만 전환할 수 있음  
   - 단점  
       - 코드 작성시 매번 타입 결정해야함  
           -> 코드량 증가, 컴파일 시간 증가  

## VSCode에서 자바스크립트 페어링

- .vscode/setting.json
    ```
    {
        "Javascript.implicitProjectConfig.checkJs": true
    }
    ```
VSCode에는 편집기 또는 특정 작업 영역(프로젝트)에 대해 자바스크립트에서 타입스크립트 검사를 활성화 할 수 있는 설정이 가능하다.

### 타입 체크 선택적 비활성화 방법
- 코드 추가하기  
@ts-ignore - 해당 줄  
@ts-nocheck - 전체  

## 환경설정
1. 타입 스크립트 설정파일
    - 컴파일 시 필요한 옵션을 지정
    - 속성
        - target: 컴파일된 코드가 어떤 환경에서 실행될 지 정의합니다. 예를들어서 화살표 함수를 사용하고 target 을 es5 로 한다면 일반 function 키워드를 사용하는 함수로 변환을 해줍니다. 하지만 이를 es6 로 설정한다면 화살표 함수를 그대로 유지해줍니다.
        - module: 컴파일된 코드가 어떤 모듈 시스템을 사용할지 정의합니다. 예를 들어서 이 값을 common 으로 하면 export default Sample 을 하게 됐을 때 컴파일 된 코드에서는 exports.default = helloWorld 로 변환해주지만 이 값을 es2015 로 하면 export default Sample 을 그대로 유지하게 됩니다.
        - strict: 모든 타입 체킹 옵션을 활성화한다는 것을 의미합니다.
        - esModuleInterop: commonjs 모듈 형태로 이루어진 파일을 es2015 모듈 형태로 불러올 수 있게 해줍니다.
        - outDir: 컴파일된 파일들이 저장될 경로를 지정
    - 생성방법
    1. 명령어를 사용해 생성하기  
        - typescript 설치  
        ```
        yarn global add typescript
        ```
        에러시   
        ```
        npm -g install typescript
        ```
        `일반적으로 타입스크리트를 사용하는 프로젝트들은 로컬로 설치한 typescript 패키지를 사용해서 컴파일함`
        ```
        yarn add typescript
        ```
        또는
        ```
        npm install --save typescript
        ```
        - tsconfig.json 파일 생성하기  
        ```
        tsc --init
        ```
        * tsc 이름 인식 오류 시 권한 변경하기  
        ```
        Set-ExecutionPolicy RemoteSigned
        ```
        
    2. 직접 작성하기(tsconfig.json)  
        ```
        {
            "compilerOptions": {
                "target": "es5",
                "module": "commonjs",
                "strict": true,
                "esModuleInterop": true
            }
        }
        ```
## yarn build 스크립트 설정하기
  - package.json에 build 스크립트 추가하기
  ```
  "scripts":{
    "build": "tsc"
  }
  ```
  => 타입스크립트 파일 만든 후 빌드하기  
   yarn build 또는 npm run build




# practice
## 01 [타입스크립트 기본 예제](https://github.com/dhsj8405/homepractice_FE/blob/main/typescript-practice/src/practice01.ts)
## 02 [기본 타입 지정하기](https://github.com/dhsj8405/homepractice_FE/blob/main/typescript-practice/src/practice02.ts)
## 03 [함수에서 타입 지정하기](https://github.com/dhsj8405/homepractice_FE/blob/main/typescript-practice/src/practice03.ts)
## 04 [interface (+ 접근 제어자)](https://github.com/dhsj8405/homepractice_FE/blob/main/typescript-practice/src/practice04.ts)
## 05 [일반 객체를 interface 로 타입 설정 (+ interface extends interface)](https://github.com/dhsj8405/homepractice_FE/blob/main/typescript-practice/src/practice05.ts)
## 06 [Type Alias](https://github.com/dhsj8405/homepractice_FE/blob/main/typescript-practice/src/practice06.ts)
## 07 [Generics(제네릭)](https://github.com/dhsj8405/homepractice_FE/blob/main/typescript-practice/src/practice07.ts)
