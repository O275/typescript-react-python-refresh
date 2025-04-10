interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  constructor(private length: number, private width: number) {}

  getArea(): number {
    return this.length * this.width;
  }
}

class Triangle implements Shape {
  constructor(private base:number, private height: number) {}

  getArea(): number {
    return 0.5 * this.base * this.height;
  }
}
const circle = new Circle(5);
console.log(`Circle Area: ${circle.getArea()}`);

const rectangle = new Rectangle(5, 10);
console.log(`Rectangle Area: ${rectangle.getArea()}`);

const triangle = new Triangle(5, 10);
console.log(`Triangle Area: ${triangle.getArea()}`);