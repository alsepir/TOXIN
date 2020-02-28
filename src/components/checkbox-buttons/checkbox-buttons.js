// class CheckboxButtons {
//   bindEventListeners() {
//     stopButton.addEventListener('click', this.handleStopButtonClick);
//   }

//   handleStopButtonClick() {
//     square.classList.toggle("active");
//   }
// }

import './checkbox-buttons.scss';

(function() {
  let checkboxs = document.querySelectorAll(".checkbox-list .item");

  for(let square of checkboxs) {
    square.onclick = function() {
      console.dir(square)
      square.classList.toggle("active");
    }
  }
})();