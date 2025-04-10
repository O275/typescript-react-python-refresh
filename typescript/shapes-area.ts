interface Shape {
  getArea(): number;
}

  class Circle implements Shape {
    constructor(private readonly radius: number) {
      if (radius < 0) {
        throw new Error("Radius cannot be negative");
      }
    }

    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }

  class Rectangle implements Shape {
    constructor(private readonly length: number, private readonly width: number) {
      if (length < 0 || width < 0) {
        throw new Error("Length and width cannot be negative");
      }
    }

    getArea(): number {
      return this.length * this.width;
    }
  }

  class Triangle implements Shape {
    constructor(private readonly base: number, private readonly height: number) {
      if (base < 0 || height < 0) {
        throw new Error("Base and height cannot be negative");
      }
    }

    getArea(): number {
      return 0.5 * this.base * this.height;
    }
  }

  function logShapeAreas(shapes: { shape: Shape; name: string }[]): void {
    shapes.forEach(({ shape, name }) => {
      try {
        const area = shape.getArea();
        console.log(`${name} Area: ${area}`);
      } catch (error) {
        console.error(`${name} Error: ${(error as Error).message}`);
      }
    });
  };

  const shapes = [
    { shape: new Circle(5), name: "Circle" },
    { shape: new Rectangle(5, 10), name: "Rectangle" },
    { shape: new Triangle(5, 10), name: "Triangle" },
  ];

logShapeAreas(shapes);



