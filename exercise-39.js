// # Classes - Exercise 6 --> 39
// Definire la classe `AreaCalculator` che, tramite un metodo statico, si occupa di calcolare l'area della figura
// passata come parametro. Il metodo deve essere capace di calcolare l'area del quadrato, rettangolo e cerchio.

class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  obj = {};
  constructor(oggetto) {
    this.obj = oggetto;
  }
  static calculate(oggetto) {
    this.obj = oggetto;
    if (oggetto instanceof Circle) {
      return this.obj.radius * this.obj.radius * 3.14;
    }
    if (oggetto instanceof Rectangle) {
      return this.obj.width * this.obj.height;
    }
    if (oggetto instanceof Square) {
      return this.obj.side * this.obj.side;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log("Area quadrato", AreaCalculator.calculate(square)); // 16
console.log("Area rettangolo", AreaCalculator.calculate(rectangle)); // 8
console.log("Area cerchio", AreaCalculator.calculate(circle)); // 78,5
