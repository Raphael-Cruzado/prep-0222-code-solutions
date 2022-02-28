var person = {
  firstName: 'Lance',
  lastName: 'Cruzado',
  hobby: 'Cooking'
};

console.log(person);
console.log("The person's name is: " + person.firstName + ' ' + person.lastName);

person.job = 'Staying Alive';
console.log("The person's current job is: " + person.job);

person.previousJob = 'Accountant';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
