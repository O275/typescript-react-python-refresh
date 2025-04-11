export interface Shape {
  getArea(): number;
}

export class Circle implements Shape {
  constructor(private readonly radius: number) {
    if (radius < 0) {
      throw new Error("Radius cannot be negative");
    }
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle implements Shape {
  constructor(private readonly length: number, private readonly width: number) {
    if (length < 0 || width < 0) {
      throw new Error("Length and width cannot be negative");
    }
  }

  getArea(): number {
    return this.length * this.width;
  }
}

export class Triangle implements Shape {
  constructor(private readonly base: number, private readonly height: number) {
    if (base < 0 || height < 0) {
      throw new Error("Base and height cannot be negative");
    }
  }

  getArea(): number {
    return 0.5 * this.base * this.height;
  }
}

export function logShapeAreas(shapes: { shape: Shape; name: string }[]): void {
  shapes.forEach(({ shape, name }) => {
    try {
      const area = shape.getArea();
      if (shape instanceof Circle) {
        console.log(`${name} - Radius: ${shape['radius']}, Area: ${area}`);
      } else {
        console.log(`${name} Area: ${area}`);
      }
    } catch (error) {
      console.error(`${name} Error: ${(error as Error).message}`);
    }
  });
}

export const shapes = [
  { shape: new Circle(5), name: "Circle" },
  { shape: new Rectangle(5, 10), name: "Rectangle" },
  { shape: new Triangle(5, 10), name: "Triangle" },
];

