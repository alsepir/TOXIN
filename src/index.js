import './assets/css/style.css';
import './assets/scss/style.scss';
import Logo from './logo.svg';

function component() {
  const element = document.createElement('div');
  element.classList.add('square');
  return element;
}

// for(let i = 0; i < 7; i++) {
//   document.body.appendChild(component());
// }