function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  console.log('hours: ' + hours + ', minutes: ' + hours * 60);
}

convertHoursToMinutes(2);

function getGreeting(name) {
  console.log('Hello ' + name + '!');
}

getGreeting('World');

function addAndMultiplyBy5(num1, num2) {
  console.log('(', num1 + ' + ' + num2, ')' + ' % ', ' 5 ', ' = ', ((num1 + num2) * 5));
}

addAndMultiplyBy5(10, 5);

function subtractTwoNumbers(num1, num2) {
  console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
}

subtractTwoNumbers(22, 7);

function getCircleCircumference(radius) {
  console.log('radius of ' + radius + ' = ' + (2 * Math.PI) * radius);
}

getCircleCircumference(5);

function getFullName(firstName, lastName) {
  console.log(firstName + ' ' + lastName);
}

getFullName('Lance', 'Cruzado');

function cube(number) {
  console.log('cube of ' + number + ' = ' + (number * number * number));
}

cube(5);
