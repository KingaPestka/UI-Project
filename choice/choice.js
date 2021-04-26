
var slideIndex = 1;
Slides(slideIndex);//using an array to store current input

function plusSlides(n) {
  Slides(slideIndex += n);
}

function currentSlide(n) {
  Slides(slideIndex = n);
}

function Slides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
 
}
function FunctionButton(){
 checkimg();
}//button triggered
function checkimg(){
  if(slideIndex == 1){
    window.location="../main/main2.html";
  }
  else if(slideIndex == 2){
    window.location="../main/Main.html";
  }
}