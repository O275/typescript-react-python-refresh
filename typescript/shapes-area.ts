interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(`Circle Area: ${circle.getArea()}`);
