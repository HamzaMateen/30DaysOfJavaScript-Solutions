// LEVEL 1 Challenge: basics of OOP    
// 1    
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  get getInfo() {
    return `${this.name} is ${this.age} years old, it has ${this.legs} legs. it is ${this.color}`;
  }

  set setName(name) {
    this.name = name;
  }

  set setColor(color) {
    this.color = color;
  }
  
  set setAge (age) {
    this.age = age;
  }
  
  get getName() {
    return this.name;
  }
}
// create animal here      
let animal = new Animal('venom', 23, 'black', 4);

console.log(animal.getInfo);
animal.setName = 'Carnage';
animal.setColor = 'Red';
animal.setAge = 324;

console.log(animal.getInfo);

// 2  create derived classes out of animal  
// i     
class Cat extends Animal {
  constructor(name, age, color, legs, eyeColor){ super(name, age, color, legs);
    this.eyeColor = eyeColor;
  }
  
  // level 2: overridden the getInfo getter
  get getInfo () {
    return super.getInfo + `Its Eye Color is ${this.color}`;
  }
  // add another method to extend the class 
  meow() {
    return 'meow meow \'\(`-`\)\'';
  }
}

let toity = new Cat('toity', 2, 'white', 4, 'hazel');

// ii      
class Dog extends Animal { 
  constructor(name, age, color, legs, breed){ super(name, age, color, legs);
    this.breed = breed;
  }
  
  // level 2: override a method     
  get getInfo() {
    return super.getInfo + `. ${super.getName} belongs to ${this.breed} breed!`;
  }
  
  // add an additional method     
  woof() {
    return 'woof woof!';
  }
}

let sherman = new Dog('Sherman', 5, 'brown', 4, 'German Shepard');
console.log(sherman.getInfo)
console.log(sherman.woof());
console.log(toity.meow());

// LEVEL 1 and 2 completed => created base and dervied classs, added extra functionality to those, and overrid a function also.
