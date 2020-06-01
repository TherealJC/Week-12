//My working example off Class functions
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.year = year
    }
}
console.log(new Student("Jamie", "Crowther", 1995));

//Instance Method
//Unsure how to set a new student with this method
function FullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
}

console.log(FullName())


//Class activity create a calculator
class Calculator {
    constructor(add, subtract, multiply, divide) {
        this.add = add
        this.subtract = subtract
        this.multiply = multiply
        this.divide = divide
    }
}
console.log(new Calculator(10+10, 10-10, 10*10, 10/10));
console.log(new Calculator(10+10, '', 10*10, ''));


//Calculator in a different style.
class Calculator2 {
    constructor(num) {
        this.num = num
    }
}
console.log(new Calculator2(10+10));
console.log(new Calculator2(10-10));
console.log(new Calculator2(10*10));
console.log(new Calculator2(10/10));






//Stacks, commands for stacks.

//Push → Add an element to the stack.
//Pop → Delete an element from the stack.
//Peek → Get the top element of the stack.
//Length → Return the length of the stack.
//Search → Search for the element in the stack.
//IsEmpty → Check if the stack is empty.
//Print → Print the elements of the stack.
let stackArray = [1, 2, 3, 4, 5] //create array
stackArray.push(5);  //add a new element to the array (5)
console.log(stackArray)
console.log(stackArray.pop()) //Remove the most recently added element as stacks are LIFO
console.log(stackArray) //array after adding and removing the element, back to normal

//Queues
let queueArray = [1, 2, 3, 4, 5]
queueArray.push(2)












//Basic class example
// unnamed
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name); // output: "Rectangle"
  
  // A named example
  let Rectangle1 = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name); // output: "Rectangle2"

//----------------------------------------------------------------------------------------------------------------------------------------------

//Functional/Real Example
class Rectangle3 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle3(10, 10);
  
  console.log(square.area); // 100

//----------------------------------------------------------------------------------------------------------------------------------

//Static Method
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.distance; //undefined
  p2.distance; //undefined
  
  console.log(Point.distance(p1, p2)); // 7.0710678118654755

//----------------------------------------------------------------------------------------------------------------------------------

//Auto Boxing
  class Animal { 
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }
  
  let obj = new Animal();
  obj.speak(); // the Animal object
  let speak = obj.speak;
  speak(); // undefined
  
  Animal.eat() // class Animal
  let eat = Animal.eat;
  eat(); // undefined

//If the above is written using traditional function-based syntax, then autoboxing in method calls will happen in non–strict mode based on the
//initial this value. If the initial value is undefined, this will be set to the global object.

//Autoboxing will not happen in strict mode, the this value remains as passed.

function Animal2() { }

Animal2.prototype.speak = function() {
  return this;
}

Animal2.eat = function() {
  return this;
}

let obj1 = new Animal2();
let speak1 = obj1.speak;
speak1(); // global object

let eat1 = Animal2.eat;
eat1(); // global object