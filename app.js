const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log("Ex0 : "+array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']




// Exercise 1: Applying Array.prototype.map()

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const nums2 = nums.map((elem) => {

    return elem *2
})

console.log("Ex1 : "+nums2)



//Exercise 2: Array destructuring: Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];


console.log("Ex2 :  the First : "+pizzaToppings[0]+ " ,,,The second : "+pizzaToppings[1] );


// Exercise 3: Destructuring objects:
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
 
  console.log("Ex3 : "+ car.make + " and " +car.model )


//   Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

 const controversialPizzaToppings = [...pizzaToppings2]

console.log("Ex4 : "+ controversialPizzaToppings);


// Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.

  const myCar = {...car2}
  
  // Update the properties of clonedObject:
  myCar.make = 'Toyota'
  myCar.model= 'q7'

  
  console.log("Ex5 : "+myCar.make +" And "+ myCar.model )



//   Exercise 6: Dynamic keys in objects:

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

 const userProfile ={  }
 const propertyName = "username";
 userProfile[propertyName] = "Haroon";
 console.log("Ex6 : ")
 console.log( userProfile)


//  Exercise 8: Default parameters:
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.


 const fun = (noun = 'cat',adjective = 'white') => {

    return "The "+noun +" is "+adjective;
 }

 console.log("Ex8 : ")
 console.log( fun())



// Exercise 9: Ternary operator:
 // Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
// //   console.log('yum');
// } else {
// //   console.log('yuck');
// }

 let pizza ='tasty' ? "yum" : "yuck";
 console.log("Ex9 : "+ pizza);



//  Exercise 10: Boolean gates:
// 1)
const localLangConfig = "ar"; 
const LANG = localLangConfig || 'en';
console.log("Ex10 : ")
console.log('Language setting:', LANG); 

//  2)
const userSavedTheme = 'dark'; 
const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);



// Exercise 11: Optional chaining:
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.age?.name;
  
  console.log(cat);

  