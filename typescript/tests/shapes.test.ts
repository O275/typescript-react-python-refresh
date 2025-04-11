import { expect } from "chai";
import { Circle, Triangle, Rectangle } from "../shapes-area";

describe("Circle", () => {
    it("should throw an error for negative radius", () => {
        expect(() => new Circle(-5)).to.throw("Radius cannot be negative");
    });

    it("should calculate area correctly", () => {
        const circle = new Circle(5);
        expect(circle.getArea()).to.be.closeTo(Math.PI * 5 ** 2, 0.01);
    });
});

describe("Triangle", () => {
    it("should throw an error for negative base or height", () => {
        expect(() => new Triangle(-5, 10)).to.throw("Base and height cannot be negative");
    });

    it("should calculate area correctly", () => {
        const triangle = new Triangle(5, 10);
        expect(triangle.getArea()).to.be.closeTo(0.5 * 5 * 10, 0.01);
    });
});

describe("Rectangle", () => {
    it("should throw an error for negative length or width", () => {
        expect(() => new Rectangle(-5, 10)).to.throw("Length and width cannot be negative");
    });

    it("should calculate area correctly", () => {
        const rectangle = new Rectangle(5, 10);
        expect(rectangle.getArea()).to.equal(5 * 10);
    });
});