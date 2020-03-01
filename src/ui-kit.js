import './assets/scss/style.scss';
import './assets/page-layout/ui-kit.scss'
import Logo from './logo.svg';
import Emotion from './components/list-items/advantage-emoticon.svg';
import City from './components/list-items/advantage-city.svg';
import './Logo-grad.svg'

import './components/list-items/list-items.scss'

import './components/comment/comment.scss';

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
