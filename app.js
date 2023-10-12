// objekt med properties
let person = {
  firstname: "Erik",
  lastname: "Öberg",
  occupation: "teacher",
};

console.log(person.firstname);
console.log(person.age);

person.age = 44;
console.log(person.age);

// objekt med metoder
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(3, 5));

// objekt med konstruktor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let car1 = new Car("Opel", "Ascona", 1998);
console.log(car1.make);

// Objekt med nästlade objekt

let student = {
  name: "Alice",
  age: 21,
  grades: {
    math: 95,
    science: 89,
    history: 75,
  },
};
console.log(student.grades.history);

const config = {
  apis: {
    cmdbApi: "https://grupp6.dsvkurs.miun.se",
    omdbApi: "https://www.omdbapi.com",
  },
  roles: {
    admin: "asflas",
  },
  endpoints,
};
console.log(config.apis.cmdbApi);
