'use strict';
for (let i = 0; i < document.links.length; i++) {
    if (document.links[i].innerText !== 'ссылка') {
        document.links[i].innerText = 'ссылка';
    }
}

