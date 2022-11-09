
let reponse1= prompt("Saisir votre Nom");
let reponse2= prompt("Saisir votre Prénom");


if (confirm("Etes-vous un homme?") == true )
 {
    alert("Bonjour Monsieur " + reponse1 + " " + reponse2);
 }
 else {
    alert("Bonjour Madame " + reponse1 +  " " + reponse2);
 }