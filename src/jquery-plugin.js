import $ from 'jquery';

// Зададим плагин cDialog, наследуемый от dialog
$.widget("my.cDialog", $.ui.dialog, {

  // настройки dialog автоматически перейдут cDialog,
  // дополнительные настройки зададим позже
  options: {

  },

  // конструктор плагина.
  _create: function() {
    // вызовем в нем конструктор родительского плагина
    $.ui.dialog.prototype._create.call(this);

    // в дальнейшем, мы разместим здесь и свои манипуляции
  },

  // деструктор плагина
  destroy: function() {
    // вызовем в нем деструктор родительского плагина
    $.ui.dialog.prototype.destroy.call(this);
  },

  // обработка изменения свойств
  _setOption: function() {
    $.ui.dialog.prototype._setOption.apply( this, arguments );
  }  

});

// установим плагин cDialog на элемент с id = wnd
$("#wnd").cDialog();