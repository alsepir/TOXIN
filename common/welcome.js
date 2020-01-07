'use strict';

export function welcome(message) {

  // Если хотим иметь доп. средства для отладки кода в самих модулях
  if(NODE_ENV == 'development') {
    console.log(message);
  }

  alert(`Welcome ${message}`);
}
