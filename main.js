document.addEventListener("DOMContentLoaded", function () {
  // Ce code sera exécuté une fois la page complètement chargée
  console.log("La page est chargée !");
});

function changerStyle() {
  var stylesheet = document.getElementById('stylesheet');
  if (stylesheet.getAttribute('href') === 'main_dark.css') {
      stylesheet.setAttribute('href', 'main_light.css'); // Remplacez 'style2.css' par le nom de votre deuxième feuille de style.
  } else {
      stylesheet.setAttribute('href', 'main_dark.css'); // Remplacez 'style1.css' par le nom de votre première feuille de style.
  }
}

window.addEventListener('load', function () {
  var styleSheets = document.styleSheets;
  for (var i = 0; i < styleSheets.length; i++) {
    console.log('Feuille de style CSS chargée : ' + styleSheets[i].href);
  }
  // Vous pouvez ajouter ici d'autres vérifications
});


window.addEventListener('load', function () {
  var scripts = document.querySelectorAll('script');
  for (var i = 0; i < scripts.length; i++) {
    console.log('Fichier JavaScript chargé : ' + scripts[i].src);
  }
  // Vous pouvez ajouter ici d'autres vérifications
});



