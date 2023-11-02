'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.starterMenu[mainIndex];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    naame = 'sulav',
    address,
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} has been recieved by ${naame} at ${address}.`
    );
  },
};
restaurant.orderDelivery({
  naame: 'sujal shrestha',
  address: 'JalpaTol',
  mainIndex: 1,
  starterIndex: 2,
});
restaurant.orderDelivery({
  mainIndex: 0,
  address: 'china',
});

/*[
//DESTRUCTURING OF ARRAYS

//Here we are destructuring the array simply for the first and second items in the list
const [first, second] = restaurant.categories;
console.log(first, second);

//Here we are destructuring the array to get third and fourth items in the list
const [, , third, fourth] = restaurant.starterMenu;
console.log(third, fourth);

let [a, b, c, d, e, f] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

//Normal Switching
let tempo = a;
a = b;
b = tempo;
console.log(a, b);

//using destructuring
[a, b] = [b, a];
console.log(a, b);

//call the function in the method of an object with the function order
let [starter, mainCourse] = restaurant.order(0, 2);
console.log(starter, mainCourse);

//for nested array i.e array inside an array destructuring
let nested = [3, 4, 5, [8, 9]];
let [p, , , [r, s]] = nested;
console.log(p, r, s);

//Default values
let [x,m,z,y,o,k=1]=[3,8,9,6,7]
console.log(o,k);
]
*/

/*
[
DESTRUCTURING OF OBJECTS

const { name, order, categories } = restaurant;
console.log(name, order, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//DEFAULT VALUES
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutuating variables
let a = 124;
let b = 343;
let someVariables = { a: 12, b: 14 }; //Assigning the new variables
({ a, b } = someVariables); //adding the parenthesis
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);
]
*/

//spread operator
