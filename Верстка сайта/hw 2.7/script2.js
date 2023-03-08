function guessNumber() {

    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    arr = arr.sort(() => Math.random() - 0.5);

    alert(`Запомните порядок элементов` + ` :` + ` ` + arr.join(' '));

    let firstFruit = arr[0];
    let lastFruit = arr[arr.length - 1];

    let firstElement = prompt(`Чему равнялся первый элемент массива?`)
    let lastElement = prompt(`Чему равнялся последний элемент массива?`)

    if (firstElement.toLowerCase() === firstFruit.toLowerCase() && lastElement.toLowerCase() === lastFruit.toLowerCase()) {
        alert(`Поздравляю! Вы угадали оба элемент`);

    } else if (firstElement.toLowerCase() !== firstFruit.toLowerCase() && lastElement.toLowerCase() !== lastFruit.toLowerCase()) {
        alert(`Жаль! Вы не угадали`);

    } else {
        alert(`Вы были близки к победе!`);
    }

}