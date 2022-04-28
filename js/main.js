// ! ------------- function Declaration -------
// ? Чтобы какая-то часть программы (блок кода) неоднократно не повторялась используем функции.
// ? Функция - это именованный блок кода, который вызывается в нужных местах программы по имени.

// Также, как и с переменными, при присвоении функции имени, мы говорим что объявляем функцию. Такие функции называются function declaration.
// Синтаксис:
// function имя_функции(список_параметров) {
//     блок кода
// }

// function funcName(name, job, company) {
//   console.log(`Привет ${name}. С днём рождения! `);
//   console.log(job);
// }
// funcName("Айдана", "Куратор");
// funcName("Миша");
// funcName("Айтегин");

// Внутри функции можно использовать любые инструменты, которые есть в JS, а также писать другие функции.

// function countUntil(a, b) {
//   for (let i = a; i <= b; i++) {
//     console.log(`Счетчик ${i}`);
//   }
// }

// countUntil(1, 10);
// countUntil(3, 8);

// Создать функцию, котрая выводит числа от 1 до 10, но только четные
// Пример:
// 2
// 4
// 6
// 8

// function counter(a, b) {
//   for (let i = a; i <= b; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// let a = +prompt("Введите первое число");
// let b = prompt("Введите второе число");
// console.log(typeof a);
// counter(a, b);

// ! ------------- return -------------
// ? Для того, чтобы вернуть результат функции, нужно использовать return. После ключевого слова return? дальнейший код игнорируется.

// function calc(a, b) {
//   //   console.log(a * b);
//   let sum = a * b;
//   return sum;
// }
// let result = calc(3, 4);
// console.log(result);

// function checkType(elem) {
//   if (!elem) return;
//   console.log("Данное значение имеет тип - ", typeof elem);
// }

// checkType(0);
// checkType(1);
// checkType(true);

// TODO 1. Напишите программу на JavaScript для вычисления суммы двух заданных целых чисел. Если два значения одинаковы, то возвращается тройная их сумма.
// Пример:
// Ввод: 10, 20
// Вывод: 30
// Ввод: 10, 10
// Вывод: 60
// Решение:

// function sum(a, b) {
//   if (a !== b) {
//     let sum = a + b;
//     return a + b;
//   } else {
//     let sum = (a + b) * 3;
//     return sum;
//   }
// }

// sum(10, 10);

// TODO 2. Напишите функцию pow(x,n) которая возвращает x в степени n. Другими словами умножьте x на себя n раз
// Решение
// function pow(x, n) {
//   return x ** n;
// }
// console.log(pow(2, 3));

// let arr = [
//   "Hello",
//   5,
//   false,
//   { job: "JSDev" },
//   ["World", [4, 7, 8], { company: "makers" }],
// ];
// let newObj = {
//   name: "makers,",
// };
// console.log(Array.isArray(arr));
// Array.isArray
// Вывод:
// Hello
// 5
// false
// JSDev
// World
// 4
// 7
// 9
// 19
// makers

// for (i of arr) {
//   if (typeof i !== "object") {
//     console.log(i);
//   } else if (Array.isArray(i)) {
//     for (j of i) {
//       if (Array.isArray(j)) {
//         let sum = 0;
//         for (k of j) {
//           console.log(k);
//           sum += k;
//         }
//         console.log(sum);
//       } else if (typeof j === "object") {
//         for (a in j) {
//           console.log(j[a]);
//         }
//       }
//     }
//   } else {
//     for (w in i) {
//       console.log(i[w]);
//     }
//   }
// }

// ! ---------Область видимости---------
// ? Область видимости - это система определяющая доступность переменных. Так как функции это блок кода со своей внутренней логикой, создаются различные области видимомости.
// Пример:
// let message = "Я глобальная область видимости";
// function showMessage() {
//   console.log(message);
// }
// showMessage();

// function showMessage() {
//   let message = "Привет, я локальная область видимости!";
//   console.log(message);
// }
// showMessage();
// console.log(message);// будет ошибка, из глобальной области видимости нет доступа к локальной

// let userNAme = "user";

// function showName() {
//   userName = "Kanat";
//   console.log(userName);
// }
// showName();
// console.log(userName);

// let sum = 0;
// for (let i = 0; i < 5; i++) {
//   sum += i;
// }
// console.log(sum);

// let userName = "user"; // это глобальная переменная (1)

// function showUser() {
// let userName = "localUser";// локальная переменная (2)
//   console.log(userName);
// }
// showUser();

// function showUser2() {
//   let userName = "func2";
//   console.log(userName);
// }
// showUser2();

// ! --------- Hoisting -----------
// ? Hoisting - это механизм в JS， в котором переменные (var) и обьявление функций, передвигаются вверх

// Это озночает то, что совершенно не важно где были обьявлены функции или переменные var, все они передвигаются вверх своей области.
// При переменной var - поднимаются только обьявления переменной (название), но не значение. В случае функции, поднимается вся функция.

// showName();
// function showName() {
//   console.log("Это hoisting");
// }
// console.log(a);
// var a = 5;

// !------- function Expression ---------
// function expression не поддерживает hoisting

// let func = function () {
//   console.log("Это анонимная функция");
// };
// func();

// !-------- Колбэк функция -------
// Колбэк функция - это функция, которая передается в аргументы внутри функции

// let ask = function (question, yes, no) {
//   if (confirm(question) === true) {
//     yes();
//   } else {
//     no();
//   }
// };

// ask(
//   "Вы согласны?",
//   function () {
//     console.log("Вы согласны с ответом");
//   },
//   function () {
//     console.log("Вы не согласны с ответом");
//   }
// );

// ! --------- arguments --------
// arguments - это массивоподобный обьект доступный только внутри функции (имеет свойство length и индексацию, но не имеет доступа к методам массива). Через arguments можно ссылаться на аргументы функции внутри неё:
function func(a, b, c, d) {
  // console.log(d);
  // console.log(arguments);
  // console.log(arguments[3]);

  for(i of arguments){
    console.log(i);
  }
}

func(10, 20, 30, 40);
