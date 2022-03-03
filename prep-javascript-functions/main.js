function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum: ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes: ', minutes);

function getGreeting(name) {
  return name;
}

var greeting = getGreeting('World');
console.log('Hello ' + greeting + '!');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var product = addAndMultiplyBy5(10, 5);
console.log(product);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

var difference = subtractTwoNumbers(22, 7);
console.log(difference);

function getCircleCircumference(radius) {
  return (2 * Math.PI) * radius;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var name = getFullName('Lance', 'Cruzado');
console.log(name);

function cube(number) {
  return number * number * number;
}

var answer = cube(5);
console.log(answer);
