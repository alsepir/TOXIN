let checkboxs = document.querySelectorAll(".checkbox-list .item");
console.log(checkboxs)

for(let square of checkboxs) {
  square.onclick = function() {
    console.log(square)
    square.classList.toggle("active");
  }
}