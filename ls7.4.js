let url = "https://picsum.photos/200/300";
let targetAttr = "_blank";
let linkText = "ссылка";

document.body.insertAdjacentHTML('afterbegin', `<a href="${url}" target="${targetAttr}">${linkText}</a>`);
