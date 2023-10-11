var bop = document.getElementById("bop");
var audio = new Audio("bop.mp3");

bop.addEventListener("mouseenter", function() {
  audio.play();
});