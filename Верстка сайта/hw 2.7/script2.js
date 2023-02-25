
function guessNumber() {

    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    arr = arr.sort(() => Math.random() - 0.5);

    alert(`Запомните порядок элементов` + ` :` + ` ` + arr.join(' '));

    let a = arr[0];
    let b = arr[arr.length - 1];

    let firstElement = prompt(`Чему равнялся первый элемент массива?`)
    let lastElement = prompt(`Чему равнялся последний элемент массива?`)

    if (firstElement.toLowerCase() === a.toLowerCase() && lastElement.toLowerCase() === b.toLowerCase()) {
        alert(`Поздравляю! Вы угадали оба элемент`);

    } else if (firstElement.toLowerCase() !== a.toLowerCase() && lastElement.toLowerCase() !== b.toLowerCase()) {
        alert(`Жаль! Вы не угадали`);

    } else {
        alert(`Вы были близки к победе!`);
    }

}

