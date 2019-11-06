// Ouverture après chargement de la page
$(function(){
  // Variable qui prend en valeur 0 qui signifie le début du nombre de click
  var numberClick = 0;
  // Fonction pour activé le click du bouton
  $('button').click(function(){
    // Incrémentation pour qu'a chaque click on augmente de 1
    numberClick ++;
    /* Fonction qui récupére l'ID et la value de l'input pour pouvoir
    afficher le resultat dans l'input*/
    $('#number').val(numberClick);
  });
});
