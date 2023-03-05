const numbers = [3, 4, 1, 9];

let sum= numbers.map (i=> x+= i, x=0).reverse ()[0];

let mult= numbers.map (i=> x*= i, x=1).reverse ()[0];

console.log (sum);
console.log (mult);
 
//Задание 1 Написать функцию, которая на вход принимает массив чисел и callback-функцию. Функция должна возвращать целое число, в зависимости от callback это может быть сумма всех чисел массива, произведение. Функции, вычисляющие произведение и сумму чисел массива, также необходимо реализовать.


const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function compareNum(a, b) { 
	return a - b;
}

function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}


function sort(arr) {
 
  for (let i = 0; i < arr.length; i++) {
     
      for (let j = i; j < arr.length; j++) {
          
          if (arr[i].toString() > arr[j].toString()) {
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}

users.sort(compareUser); 
console.log(users);
// Задание 2 Дан массив объектов. Необходимо отсортировать элементы массива в порядке увеличения возраста.




let arr1 = [1, '4', 9, 'two'];
let arr2 = [1, '4', false, 9, 'two'];

function reversedArr (arr) {
    
  let result = arr.reverse();
  
  return result;
  
}

function arrNumber (arr) {
    
  let result = arr.map(function (x) { 

    return Number(x); 

    });

   return result

    }
    

function each( arr, callback) {

	let result = [];
	
	{
    result.push( callback(arr) ); 

  }
		
	return result;
    
}

console.log (each(arr1,reversedArr));
console.log (each(arr2,arrNumber));
// Задание 4



const timer = (deadline) => {

	const interval = setInterval(() => {

		console.log(new Date ());

	}, 3000);

  setTimeout(() => {

    clearInterval(interval);

    console.log('30 секунд прошло')

  }, 30000);

};

timer();
// Задание 4 Напишите программу, которая на протяжении 30 секунд, каждые 3 секунды, будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».



function calling() {
  console.log('Звоню!')
};

calling ();

const a= 0;

const waitAnswer = (beeps, callback) => {
  setTimeout(() => {
      let response = 'Идут гудки...';
      callback(response);
  }, 1000);
};


const conversation = (talk) => {
  console.log(talk);
	console.log('Запрос завершен');
};

let response  = waitAnswer(a, conversation);





