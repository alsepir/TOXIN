let slideshowList = document.querySelectorAll(".slideshow");
for(let i = 0; i < slideshowList.length; i++) {
  slideshowList[i].slideIndex = 1;
  showSlides.call(slideshowList[i]);

  let prev = slideshowList[i].querySelector(".prev");
  prev.onclick = function() {
    this.parentElement.slideIndex--;
    showSlides.call(this.parentElement);
  }

  let next = slideshowList[i].querySelector(".next");
  next.onclick = function() {
    this.parentElement.slideIndex++;
    showSlides.call(this.parentElement);
  }

  let dots = slideshowList[i].querySelectorAll(".dot");
  for(let i = 0; i < dots.length; i++) {
    dots[i].indexDot = i+1;
    dots[i].onclick = function() {
      this.parentElement.parentElement.slideIndex = this.indexDot;
      showSlides.call(this.parentElement.parentElement);
    }
  }
}
 
function showSlides() {
  let slides = this.querySelectorAll(".slide");
  let dots = this.querySelectorAll(".dot");
  
  if (this.slideIndex > slides.length) {this.slideIndex = 1}
  if (this.slideIndex < 1) {this.slideIndex = slides.length}
  
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[this.slideIndex-1].style.display = "block";
  dots[this.slideIndex-1].className += " active";
}
