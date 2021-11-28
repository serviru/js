/*
Задание.
С помощью цилка for добавьте в body 6 картинок, по примеру тех, что закомментированы
выше. Картинки вставляйте со помощью insertAdjacentHTML. При генерации разметки
пользуйтесь шаблонным литералом. Куда должен вставляться счетчик цилка смотрите
ниже:
<img src="https://picsum.photos/200/300?random=${счетчик_цикла_здесь}" alt="pic${счетчик_цикла_здесь}">
*/

for (let i = 0; i < 6; i++) {
    let markup = `<img src="https://picsum.photos/200/300?random=${i}" alt="pic${i}">`;
    document.body.insertAdjacentHTML('afterbegin', markup);
}
