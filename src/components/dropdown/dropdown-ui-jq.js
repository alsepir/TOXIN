import './dropdown.scss';
import 'jquery-ui/ui/position.js'
import 'jquery-ui/ui/keycode.js';
import 'jquery-ui/ui/unique-id.js';

(function(factory) {
		factory( jQuery );
}(function($) {
  return $.widget('custom.dropdown', {
    options: {
      placeholder: 'text...',
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      data: ['спальни', 'кровати', 'ванные комнаты']
    },

    _create() {
      let selectmenuId = this.element.uniqueId().attr('id');
      this.ids = {
        element: selectmenuId,
        button: selectmenuId + "-button",
        menu: selectmenuId + "-menu"
      };

      this._drawButton();

      this._rendered = false;
      this.items = $();

      // About items amount
      this.state = {};
    },

    _drawButton() {
      let head = this.options.placeholder;

      this.button = $('<div>');
      this._addClass( this.button, "dropdown__button dropdown__button_closed");
      this.button.attr('tabindex', 0);
     
      this.buttonHead = this._renderButtonText(head).appendTo(this.button);
      
      this._on( this.button, this._buttonEvents );

      this.button.appendTo(this.element);
    },

    _refresh() {
      this.items.empty();
      this._renderItems();

      this._rendered = true;
    },

    open() {
      // If this is the first time the menu is being opened, render the items
      if (!this._rendered) {
        this._refresh();
      } else {
        this.items.show();
      }

      this.isOpen = true;
      this._toggleAttr();
      this._position();

      this._on( this.document, this._documentClick );
    },

    _position() {
      this.items.position( $.extend( { of: this.element }, this.options.position ) );
    },

    close() {
      if(!this.isOpen) {
        return;
      }

      this.isOpen = false;
      this._toggleAttr();

      this.items.hide();

      this._off( this.document );
    },

    _renderButtonText(text) {
      let item = $('<span>', {
        id: this.ids.button,
        title: this.element.attr('title')
      });

      item.text(text);
      this._addClass(item, 'dropdown__head');

      return item;
    },
  
    _renderItems() {
      let items = '<ul>';

      let addDiv = (selector, data) => `<div class="${selector}">${data}</div>`;

      let addInteraction = () => `<div class='dropdown__item-interaction'>
          ${addDiv('dropdown__item-dec dropdown__item-dec_disable', '-')}
          ${addDiv('dropdown__item-amount', '0')}
          ${addDiv('dropdown__item-inc', '+')}
        </div>`;

      this.options.data.forEach(function(data) {
        let item = '<li class="dropdown__item">'
            + addDiv('dropdown__item-name', data)
            + addInteraction()
          + '</li>';

        items += item;
      });
      items += '</ul>';

      this.items = $(items);
      this._addClass(this.items, 'dropdown__items');
      this._on( this.items, this._ItemsEvents );
      this.button.after(this.items);
    },

    _toggle( event ) {
      this[ this.isOpen ? "close" : "open" ]();
    },

    _toggleAttr() {
      this._removeClass( this.button, "dropdown__button_" +
        ( this.isOpen ? "closed" : "open" ) )
        ._addClass( this.button, "dropdown__button_" +
          ( this.isOpen ? "open" : "closed" ) );
    },

    _changeState(amount, itemName) {
      if(!amount) {
        let newState = {};

        for(let i in this.state) {
          if(i != itemName) {
            $.extend(newState,{[i]: this.state[i]});
          }
        }

        this.state = newState;
      } else {
        $.extend(this.state,{[itemName]: amount});
      }
      
      this.button.trigger('changeState');
    },

    _buttonEvents: {
      click(event) {
        if($(event.target).hasClass('dropdown__button')) {
          this._toggle( event );
        }
      },

      changeState() {
        let head = '';

        if(Object.keys(this.state).length) {
          for(let i in this.state) {
            head += `${this.state[i]} ${i}, `;
          }

          this.buttonHead.text(head);
        } else {
          this.buttonHead.text(this.options.placeholder);
        }
      },

      keydown(event) {
        var preventDefault = true;
        switch ( event.keyCode ) {
          case $.ui.keyCode.TAB:
          case $.ui.keyCode.ESCAPE:
          case $.ui.keyCode.SPACE:
            this.close();
            preventDefault = false;
            break;
          default:
            preventDefault = false;
        }
  
        if ( preventDefault ) {
          event.preventDefault();
        }
      }
    },

    _ItemsEvents: {
      click(event) {
        let inc = false,
          dec = false;
        let target = $(event.target);
        
        // Relevant buttons
        inc = target.hasClass('dropdown__item-inc');
        dec = target.hasClass('dropdown__item-dec');
        
        if(inc || dec) {
          let parent = target.parents('.dropdown__item');
          let item = parent.find('div.dropdown__item-amount');
          let itemName = parent.find('div.dropdown__item-name').text();
          let amount = parseInt(item.text(), 10);

          if(amount && dec) {
            item.text(--amount);
            this._changeState(amount, itemName);

            if(!amount) {
              target.addClass('dropdown__item-dec_disable');
            }
          } else if(inc) {
            if(!amount) {
              $(target.siblings()[0]).removeClass('dropdown__item-dec_disable');
            }

            item.text(++amount);
            this._changeState(amount, itemName);
          }
        }
      }
    },

    _documentClick: {
      mousedown: function( event ) {
        if ( !this.isOpen ) {
          return;
        }

        if (!$( event.target ).closest('.dropdown').length) {
          this.close();
        }
      }
    },

    _destroy() {
      this.button.remove();
      this.items.remove();
      this.element.removeUniqueId();
    }
  })
}))
