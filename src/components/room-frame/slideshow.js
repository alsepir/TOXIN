import './image/888/image-min.png';
import './image/888/image-2.png';
import './image/888/image-3.png';
import './image/840.jpg';
import './image/980.jpg';
import './image/856.jpg';
import './image/740.jpg';
import './image/982.jpg';
import './image/678.jpg';
import './image/450.jpg';
import './image/350.jpg';
import './image/666.jpg';
import './image/444.jpg';
import './image/352.jpg';

import './star_border.svg';
import './star.svg';

import './room-frame.scss';

(function(){
  let slideshowList = document.querySelectorAll(".slideshow");

  for(let i = 0; i < slideshowList.length; i++) {
    slideshowList[i].dataset.index = 1;
    console.dir(slideshowList[i])
    showSlides.call(slideshowList[i]);

    let prev = slideshowList[i].querySelector(".prev");
    prev.onclick = function() {
      this.parentElement.dataset.index--;
      showSlides.call(this.parentElement);
    }

    let next = slideshowList[i].querySelector(".next");
    next.onclick = function() {
      this.parentElement.dataset.index++;
      showSlides.call(this.parentElement);
    }

    let dots = slideshowList[i].querySelectorAll(".dot");
    for(let i = 0; i < dots.length; i++) {
      dots[i].indexDot = i+1;
      dots[i].onclick = function() {
        this.parentElement.parentElement.dataset.index = this.indexDot;
        showSlides.call(this.parentElement.parentElement);
      }
    }
  }
  
  function showSlides() {
    let slides = this.querySelectorAll(".slide");
    let dots = this.querySelectorAll(".dot");
    
    if (this.dataset.index > slides.length) {this.dataset.index = 1}
    if (this.dataset.index < 1) {this.dataset.index = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.dataset.index-1].style.display = "block";
    dots[this.dataset.index-1].className += " active";
  }
})();
