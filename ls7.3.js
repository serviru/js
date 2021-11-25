'use strict';
let totalString = "";

/* Задание.
Дописывайте в строку totalString с помощью цикла и конкатенации строки,
так, чтобы итоговое значение в totalString получилось: слово1слово2слово3
*/

for (let i = 1; i <= 3; i++) {
    totalString += `слово${i}`;
}

console.log(totalString);
