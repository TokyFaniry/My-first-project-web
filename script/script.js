let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function changerCouleur(elm) {
  elm.setAttribute('style', 'border: 2px solid rgb(58, 207, 28);;');
}
function remettreNormalement(elm) {
  elm.setAttribute('style', 'border: 2px solid rgb(2, 92, 10);');   
} 
function go(loc) {
  document.getElementById('ici').src = loc;
}
function go2(loc) {
  document.getElementById('ici2').src = loc;
}
function go3(loc) {
  document.getElementById('icito').src = loc;
}