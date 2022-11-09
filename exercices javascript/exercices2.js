let nbrChoix= prompt("Choisir un nombre");

if (nbrChoix %2 == 0) 
{
    alert("C'est un nombre pair !");
}
else {
    alert("C'est un nombre impair !");
}

let dateNaissance= prompt("Quelle est votre année de naissance ?");

if (2022 - dateNaissance >= 18) 
{
alert("Vous avez " + (2022 - dateNaissance) + " ans. Vous êtes donc majeur.");
}
else {
alert("Vous avez " + (2022 - dateNaissance) + " ans. Vous êtes donc mineur.");
}

var nbr1= prompt("Choisir un premier nombre");
var nbr2= prompt("Choisir un deuxième nombre");
let operateur = prompt("Choisir un opérateur + , - , * ou /");


switch (operateur)
{
case "+" :
    
    x=parseInt(nbr1, 10);
    y=parseInt(nbr2,10);
    alert( x + y );
    break;

case "-" :
    alert("Le résultat est " + (nbr1 - nbr2));
    break;

case"*" :
    alert("Le résultat est "  + (nbr1 * nbr2));
    break;

case "/" :
    if(nbr2==0) {
        alert("Division par 0 impossible !");
    }
    else {
        alert("Le résultat est " + (nbr1 / nbr2));
    }
    break;
    
default:
    alert("L'opérateur n'est pas correct."); 

}

var prixUnitaire= prompt("Quel est le prix unitaire du produit ?");
var quantité= prompt("Quelle quantité faut-il commander");
var totalProduit = quantité * prixUnitaire;
var port;
var remise;


if (totalProduit > 500)

{ 
   port = parseInt (0, 10);
}

else {
    port= ((totalProduit * 2)/100);
    port = parseInt (port, 10);
    if (port < 6) {
        port=6;
    }
    else {
        port= port;
    }
}


if (totalProduit > 200)
 {
    remise = ((totalProduit * 10)/100);
 }

 else
 {
    if (totalProduit >= 100)
    {
        remise = ((totalProduit * 5)/100);
    }
    else 
    {
        remise = 0;
    }
 }

var totalApayer= (totalProduit + port - remise);

alert("Le prix a payer est de " + totalApayer + "€. Les frais de port s'élève à " + port + "€. La remise est de " + remise + "€.");



var celibataire =confirm("Le salarié est-il célibataire ?");
var enfant= prompt("Combien a t-il d'enfant ?");
var salaire= prompt("Quel est son salaire mensuel ?");
var maxParticipation = 50;
var participation1;
var participation2;


if (celibataire== true)
    {
        if (salaire < 1200) 
        {
           participation1 = 30;
        }
        else 
        {
            participation1 =20;
        }
    }
else {
        if (salaire < 1200) 
        {
            participation1 = 35;
        }
         else 
        {
            participation1 = 25;
        }
    }

participation2 = ((parseInt(enfant, 10)) * 10);

var participationTot = (parseInt(participation1, 10) + parseInt(participation2, 10));

if (participationTot > maxParticipation)

{
    participationTot = maxParticipation;
}

else {
    participationTot = participationTot;
}

alert("La participation est de " + participationTot + "%.");