import './assets/scss/style.scss';
import Logo from './logo.svg';
import Emotion from './advantage-emoticon.svg';
import City from './advantage-city.svg';
import './Logo-grad.svg'

import './pages/list-items/list-items.scss'

import './jquery-plugin.js'


$(".test").css("background", "yellow");
$(".test").datepicker();
$('#speed').selectmenu();

$( "#speed" ).selectmenu( "open" );
let speed = $( "#speed" ).selectmenu( "menuWidget" );
console.log(speed);

function component() {
  const element = document.createElement('div');
  element.classList.add('square');
  return element;
}
