// LEVEL 1: Objects 
// 1
const dog = {};

// 2 
console.log(dog);

// 3 
dog['name'] = 'Barky';
dog['age']  = 2;
dog['legs'] = 4;
dog['color']= 'red';
dog['bark'] = () => 'Woof Woof';

// 4 
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

// 5 
dog['breed'] = 'German shepherd';
dog['getDogInfo'] = () => {
   console.log(dog.name);
   console.log(dog.age);
   console.log(dog.breed);
}
dog.getDogInfo();

// ** LEVEL 1 Completed **/
