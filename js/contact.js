
console.log("Ceci est mon partie de mes contacts")



function envoyerMessage() {
    
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;
    var message = document.getElementById('message').value;

    
    var expressionNomPrenom = /[A-Za-z]/;
    var expressionNumero = /[0-9]/;
 

    
    if (!expressionNomPrenom.test(nom)) {
        alert("Erreur : Le nom ne peut contenir que des lettres.");
        return;
    }

    if (!expressionNomPrenom.test(prenom)) {
        alert("Erreur : Le prénom ne peut contenir que des lettres.");
        return;
    }
    if(numero.length !==8){
        alert("Erreur : le numero doit contenir 8 chiffres .")
        return;
    }

    if (!expressionNumero.test(numero))  {
        alert("Erreur : Le numéro doit contenir 8 chiffres.");
        return;
    }

    if (message.length === 0) {
        alert("Erreur : Le champ de message ne peut pas être vide.");
        return;
    }
    if (email.length === 0) {
        alert("Erreur : Le champ de l'adresse ne peut pas être vide.");
        return;
    }

    else
    alert("Message envoyé avec succès !");
}
