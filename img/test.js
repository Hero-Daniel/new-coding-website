// const _ = require('lodash');
// const result = _.chunk([1,2,3,4,5,6], 3);
// console.log(result); // [[1,2,3], [4,5,6]]

// const messyArray = ["", 2, 3, false, 5, 0, 456, 6, undefined];
// const cleanArray = _.compact(messyArray);
// console.log(cleanArray); // [2, 3, 5, 456, 6]

// const array = [1, 2, 3, 4, 5];
// const array2 = [1, 7, 1, 9, 5];
// const difference = _.difference(array, array2);
// console.log(difference); // [2, 3, 4]

// const array = [1,2, [3,4], 5, [6,7,8]];
// const result = _.flatten(array);
// console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]

// const array = [1, [2, [3, 4]]];
// const result = _.flattenDeep(array);
// console.log(result); // [1, 2, 3, 4]

// const array = [1, [2, [3, 4]]];
// console.log(_.flattenDepth(array, 2)); // [1, 2, 3, 4]

// const numbers = [1, 2, 3];
// const doubled = _.map(numbers, n => n * 2);
// console.log(doubled);

// const users = {
//     user1: { age: 20 },
//     user2: { age: 25 }
//   };
//   const ages = _.map(users, user => user.age);
//   console.log(ages); // [20, 25]

// const user = {
//     profile: {
//       name: "John"
//     }
//   };
//   console.log(_.get(user, 'profile.name'));
//   // "John"
//   console.log(_.get(user, 'profile.age', 18));
//     // 18
// const user = {};
// _.set(user, 'profile.name', 'John');
// console.log(user);
// // { profile: { name: 'John' } }

// const user = { profile: { name: "John" } };
// console.log(_.has(user, 'profile.name'));
// // true
// console.log(_.has(user, 'profile.age'));
// // false

// const user = {
//     name: "John",
//     age: 30,
//     password: "secret"
//   };
//   const safeUser = _.pick(user, ['name', 'age']);
//   console.log(safeUser);
//     // { name: 'John', age: 30 }

// const user = {
//     name: "John",
//     age: 30,
//     password: "secret"
//   };
//   const safeUser = _.omit(user, ['password']);
//   console.log(safeUser);
//     // { name: 'John', age: 30 }

// _.forEach([1, 2, 3], num => {
//   console.log(num);
// });

// const user = { name: 'Alice', age: 25 };

// _.forEach(user, (value, key) => {
//   console.log(`${key}: ${value}`);
// });
// name: Alice
// age: 25

// const numbers = [1, 2, 3, 4, 5];
// const evens = _.filter(numbers, n => n % 2 === 0); // wat if i remove d fess n and say umber => n % 2 === 0
// console.log(evens); // [2, 4]

// const _ = require('lodash');
// const numbers = [1, 2, 3, 4, 5, 6];
// const grouped = _.groupBy(numbers, num => (num % 2 === 0 ? 'even' : 'odd'));
// console.log(grouped);
// // {
// //   odd: [1, 3, 5],
// //   even: [2, 4, 6]
// // }

// const saveInput = _.debounce(() => {
//     console.log("Saved!");
//   }, 1000);

//   saveInput();
//   saveInput();
//   saveInput();
// "Saved!" will only be logged once, 1 second after the last call to saveInput()

// const handleScroll = _.throttle(() => {
//   console.log('Scrolling...')
// }, 1000)
// window.addEventListener('scroll', handleScroll)
// // "Scrolling..." will be logged at most once every second, even if the user scrolls rapidly

// function greet(greeting, name) {
//     return `${greeting} ${name}`;
//   }
//   const sayHelloTo = _.bind(greet, null, "Hello");
//   console.log(sayHelloTo("John"));
//   // "Hello John"

// function multiply(a, b) {
//     return a * b;
//   }
//   const double = _.partial(multiply, 2);
//   console.log(double(5));
//     // 10  

// const numbers = [1, 2, 3, 4, 5];
// const filtered = _.filter(numbers, n => n > 2);
// const doubled = _.map(filtered, n => n * 2);
// console.log(doubled);
// // [6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];
// const result = _.chain(numbers)
//   .filter(n => n > 2)
//   .map(n => n * 2)
//   .take(1)
//   .value();
// console.log(result); // [6]

// const result = _([1, 2, 3, 4])
//   .filter(n => n > 2)
//   .map(n => n * 2)
//   .value();
// console.log(result);
// // [6, 8]

// _(5).add(3); // returns 8 immediately, because result is a primitive
// const value = _.defaultTo(null, "default value");
// console.log(value);
// // "default value"

// const value = null ?? "default value";
// console.log(value);
// // "default value"

// const result = _.map([1, 2, 3], n => n * 2);
// console.log(result);
// // [2, 4, 6]

const result = [1, 2, 3].map(n => n * 2);
console.log(result);
// [2, 4, 6]



const hero = {
    name: "Superman",
    power: "Flight",
}