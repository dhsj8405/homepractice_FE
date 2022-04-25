/**
 * interface 
 */
   // Shape 라는 interface 를 선언합니다.
   interface Shape {
      getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
   }
   
   class Circle implements Shape {
      // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
      constructor(public radius: number) {
      this.radius = radius;
      }
   
      // 너비를 가져오는 함수를 구현합니다.
      getArea() {
      return this.radius * this.radius * Math.PI;
      }
   }
   
   class Rectangle implements Shape {
      constructor(private width: number, private height: number) {
      this.width = width;
      this.height = height;
      }
      getArea() {
      return this.width * this.height;
      }
   }
   
   const circle = new Circle(5);
   const rectangle = new Rectangle(10, 5);
   
   console.log(circle.radius);
   // width 가 private 이기 때문에 에러
   // console.log(rectangle.width); 
   
   const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
   
   shapes.forEach(shape => {
      console.log(shape.getArea());
   });


   //public accessor 는 특정 값이 클래스의 코드 밖에서도 조회 가능


   // 작성후 결과 테스트하기
   // yarn build
   // node dist/practice04