
let str = 'js'; 

console.log(new String(str).toUpperCase()); //Задание 1 Преобразуйте строку js в верхний регистр JS.


const vegProducts = ['яблоко', 'груша', 'гриб', 'огурец'];
const search = 'огу';

vegProducts.forEach((product) => {
	if (product.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(product);
	}
}); //Задание 2 Создайте функцию, которая в качестве параметров принимает массив строк и строку.


let x= 32.58884;

console.log (Math.floor(x)); // До меньшего целого

console.log (Math.ceil(x)); // До большего целого

console.log (Math.round(x)); // До ближайшего целого

//Задание 3 Округлите число 32.58884 

console.log  (Math.max (52, 53, 49, 77, 21, 32));

console.log  (Math.min (52, 53, 49, 77, 21, 32));

//Задание 4 Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.


function getRandomInt(minValue, maxValue) {
    
    return Math.round(Math.random() * (maxValue- minValue)) + minValue;

}

console.log(getRandomInt (1, 10)) ;


//Задание 5 Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

const generateArray = (length, max) => (

    [...new Array(Math.round (length/2)-1)]

      .map(() => Math.floor(Math.random() * max))
  );
  
  
  console.log(generateArray(9, 40));


//Задание 6 Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.


function numberRand (minValue,maxValue) {

    return Math.round(Math.random() * (maxValue- minValue)) + minValue;
}

console.log(numberRand(0, 66));


//Задание 7 Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

let date = new Date("14 February 2023");

console.log (date);
 
// Задание 8 Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.
 
const dateNow= new Date("14 February 2023");
 
dateNow.setDate(dateNow.getDate() + 73);
 
console.log (dateNow);
 
// Задание 9 Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

let myDate = new Date (2023, 2, 21, 21, 45, 20);

let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();

let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - " + "это" + " " + days[myDate.getDay()] ;

console.log(fullDate);
console.log( hour + ":" + minute + ":" + second);

//Задание 10 Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде: