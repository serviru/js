const products = {
    one: "один",
    two: "два",
    three: "три",
};

/*
Задание.
Используя цикл for in переберите объект products, ведите в консоль
имя свойства, значение свойства.
*/

for (let prop in products) {
    console.log(prop);
    console.log(products[prop]);
}
