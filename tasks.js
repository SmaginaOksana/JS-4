// Задание 1
// const sum = function (a, b) {
//   if (a === undefined || b === undefined) {
//     console.log("введите два параметра");
//   } else if (typeof a !== "number" || typeof b !== "number") {
//     console.log("введенные данные не являются числами");
//   } else {
//     return a + b;
//   }
// };
// console.log(sum(5, 9));

// Задание 2
// function square(a) {
//   console.log(a * a);
//   if (a === undefined) {
//     console.log(
//       `Uncaught Error: Функция square не может быть вызвана без аргумента`
//     );
//   }
// }
// square();

// Задание 3
// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// const guessNumber = (a) => {
//   if (a <= 10 && a > 0) {
//     if (a === getRandomInteger(1, 10)) {
//       console.log(`Вы выиграли!`);
//     } else {
//       console.log(
//         `Вы не угадали, Ваше число - ${a}, а выпало число ${getRandomInteger(
//           1,
//           10
//         )}`
//       );
//     }
//   } else {
//     console.log(`Введенное число вне диапазона`);
//   }
// };
// console.log(guessNumber(5));

// Задание 4
// const arr = ["Oksana", "Anna", "Svetlana"];
// const copyArr = arr.map((array) => array);
// console.log(copyArr);

// Задание 5
// const names = ["Oksana", "Anna", "Svetlana"];
// const newNames = names.map((item) => "Hello " + item);
// console.log(newNames);

// Задание 6
// const users = [
//   { user: "Oleg", login: "oleg_03", password: "Oleg123" },
//   { user: "Sveta", login: "sveta_03", password: "Sveta123" },
//   { user: "Kirill", login: "kirill_03", password: "Kirill123" },
// ];
// const names = users.map((item) => item.user);
// console.log(names);

// Задание 7
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: "string",
//   d: 12,
// };
// const sumObjectValues = (a) => {
//   let sum = 0;
//   for (let key in a) {
//     if (typeof a[key] === "number") {
//       sum += a[key];
//     }
//   }
//   return sum;
// };
// console.log(sumObjectValues(objectWithNumbers));

// Задание 8
// let str = "my name is Oksana";

// const ucFirst = (a) => {
//   a = a[0].toUpperCase() + a.slice(1);
//   return a;
// };
// console.log(ucFirst(str));

// или:
// const ucFirst = str[0].toUpperCase() + str.slice(1);
// console.log(ucFirst);

// Задание 9
// let str = "XXX";
// const checkSpam = (a) => {
//   a = a.toLowerCase();
//   if (a.includes("badword")) {
//     return "true";
//   } else if (a.includes("xxx")) {
//     return "true";
//   } else {
//     return "false";
//   }
// };
// console.log(checkSpam(str));

// Задание 10
// let string = "привет, Женя";
// const str = (a) => {
//   a = a.split(``);
//   a = a.reverse();
//   a = a.join(``);
//   return a;
// };
// console.log(str(string));

// Задание 11
// let stations = [
//   "MAN675847583748sjt567654;Manchester Piccadilly",
//   "GNF576746573fhdg4737dh4;Greenfield",
//   "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
//   "SYB4f65hf75f736463;Stalybridge",
//   "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
// ];
// const code1 = stations[0].slice(0, 3);
// const code2 = stations[1].slice(0, 3);
// const code3 = stations[2].slice(0, 3);

// const sign1 = stations[0].indexOf(";");
// const sign2 = stations[1].indexOf(";");
// const sign3 = stations[2].indexOf(";");

// const name1 = stations[0].slice(25);
// const name2 = stations[1].slice(24);
// const name3 = stations[2].slice(28);

// console.log(code1 + ": " + name1);
// console.log(code2 + ": " + name2);
// console.log(code3 + ": " + name3);

// Задание 14
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// const newNumbers = numbers.filter((item, index) => {
//   console.log(`Индексу ${index} соответствует число ${item}`);
// });

// let arr = [5, 4, 3, 8, 0];
// const filterFor = (array, a) => {
//   array = array.filter((item) => {
//     return item >= a;
//   });
//   return array;
// };

// console.log(filterFor(arr, 5));
