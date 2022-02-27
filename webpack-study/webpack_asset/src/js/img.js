import '../css/img.css'

function createImg() {
    const ele = document.createElement('div');
    const Oimg = document.createElement('img');
    Oimg.width = 400;
    Oimg.src = require('../img/1.jpg');
    ele.appendChild(Oimg);

    const Otimg = document.createElement('div');
    Otimg.className = 'imgstext';
    ele.appendChild(Otimg);
    return ele;
}

document.body.appendChild(createImg())