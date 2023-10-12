var bop = document.getElementById("bop");
var audio = new Audio("bop.mp3");

bop.addEventListener("mouseenter", function() {
  audio.play();
});



function changerStyle() {
  var stylesheet = document.getElementById('stylesheet');
  if (stylesheet.getAttribute('href') === 'main_dark.css') {
      stylesheet.setAttribute('href', 'main_light.css'); // Remplacez 'style2.css' par le nom de votre deuxième feuille de style.
  } else {
      stylesheet.setAttribute('href', 'main_dark.css'); // Remplacez 'style1.css' par le nom de votre première feuille de style.
  }
}