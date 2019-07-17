const sayHello = () => alert('Hello world!');
sayHello();    

// 1 exercise

const a = "Hello";
const b = "World";
console.log(`${a} ${b}`);

// 2 exercise

 const multiply = (a = 1, b = 1) => (a * b);
 console.log(multiply(2));

// 3 exercise

const average = (...args) => (args.reduce((total, arg) => total + arg) / args.length);
console.log(`Average is ${average(1,2,3,4,5,6)}`);

 // 4 exercise

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(`Average is ${average(...grades)}`);

// 5 exercise 

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = array;
console.log(`${firstName} ${lastName}`);