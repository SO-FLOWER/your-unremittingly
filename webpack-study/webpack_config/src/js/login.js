import '../css/login.css';
import '../css/login.less';

function login() {
    const H2w = document.createElement('h2');
    H2w.innerHTML = 'fighting chen';
    H2w.className = 'text';
    return H2w;
}

document.body.appendChild(login());