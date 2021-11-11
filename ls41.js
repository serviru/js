user_number = +prompt('Введи число от 0 до 999: ')
function user_numbers(user_number){
    if(user_number < 0 || user_number > 999 ) {
        console.log('Значение за пределом диапазона вычиления');
        return{};
    }

    return {
        еденицы: user_number % 10,
        десятки: Math.floor(user_number / 100),
        сотни: Math.floor(user_number / 10) % 10,
    }
}
console.log(user_numbers(user_number));
/*
хотел попробовать тоже самое сделать через строки, поясню есть число его переводим в строку,
далее разбиваем по елементно. После этого просто берём элемент и выводи в return с поянением.
По крайней мере в python так получалось, можно здесь так же делать?
*/
