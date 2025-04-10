/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};

import { Circle, Triangle, Rectangle } from "../typescript/shapes-area";

describe("Circle", () => {
  it("should throw an error for negative radius", () => {
    expect(() => new Circle(-5)).toThrow("Radius cannot be negative");
  });

  it("should calculate area correctly", () => {
    const circle = new Circle(5);
    expect(circle.getArea()).toBeCloseTo(Math.PI * 5 ** 2);
  });
});

describe("Triangle", () => {
  it("should throw an error for negative base or height", () => {
    expect(() => new Triangle(-5, 10)).toThrow("Base and height cannot be negative");
  });

  it("should calculate area correctly", () => {
    const triangle = new Triangle(5, 10);
    expect(triangle.getArea()).toBeCloseTo(0.5 * 5 * 10);
  });
});

describe("Rectangle", () => {
  it("should throw an error for negative length or width", () => {
    expect(() => new Rectangle(-5, 10)).toThrow("Length and width cannot be negative");
  });

  it("should calculate area correctly", () => {
    const rectangle = new Rectangle(5, 10);
    expect(rectangle.getArea()).toBe(5 * 10);
  });
});