import './assets/scss/style.scss';
import Logo from './logo.svg';
import Emotion from './advantage-emoticon.svg';
import City from './advantage-city.svg';
import './Logo-grad.svg'

// require('jquery');
// //require('jquery-ui/ui/widgets/draggable');
// require('jquery-ui/ui/widgets/datepicker.js');
// require('jquery-ui/themes/base/datepicker.css');
// import 'jquery-ui/ui/widgets/selectmenu.js';
// //import 'jquery-ui/themes/base/selectmenu.css';
import './jquery-plugin.js'


$(".test").css("background", "yellow");
$(".test").datepicker();
$('#speed').selectmenu();

$( "#speed" ).selectmenu( "open" );
let speed = $( "#speed" ).selectmenu( "menuWidget" );
console.log(speed);

//$(".test").draggable(); // эта строка кода, которая делает элемент перетаскиваемым

// Зададим плагин cDialog, наследуемый от dialog
// $.widget("my.cDialog", $.ui.dialog, {

//   // настройки dialog автоматически перейдут cDialog,
//   // дополнительные настройки зададим позже
//   options: {

//   },

//   // конструктор плагина.
//   _create: function() {
//     // вызовем в нем конструктор родительского плагина
//     $.ui.dialog.prototype._create.call(this);

//     // в дальнейшем, мы разместим здесь и свои манипуляции
//   },

//   // деструктор плагина
//   destroy: function() {
//     // вызовем в нем деструктор родительского плагина
//     $.ui.dialog.prototype.destroy.call(this);
//   },

//   // обработка изменения свойств
//   _setOption: function() {
//     $.ui.dialog.prototype._setOption.apply( this, arguments );
//   }  

// });

// // установим плагин cDialog на элемент с id = wnd
// $("#wnd").cDialog();

function component() {
  const element = document.createElement('div');
  element.classList.add('square');
  return element;
}

// for(let i = 0; i < 7; i++) {
//   document.body.appendChild(component());
// }