/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

//liste des actions
var choise = [];
choise1 = ("1 : Lister les contacts");
choise2 = ("2 : Ajouter un contact");
choise3 = ("0 : Quitter");
choise4 = ("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")
choise.push(choise1);
choise.push(choise2);
choise.push(choise3);
choise.push(choise4);

//ouverture de l'API
console.log("Bienvenue dans le gestionnaire des contacts !");
choise.forEach(function (choix){
  console.log(choix);
});
var action = prompt("Choisisez une option :")

//initialiser le tableau de contacts
var list = [];

//initialiser l'objet Contact
var Contact = {
  init: function (nom, prenom){
    this.nom = nom;
    this.prenom = prenom;
    var prenomMin = prenom.toLowerCase();
    var nomMin = nom.toLowerCase();
    this.mail = prenomMin + "." + nomMin + "@boitemail.fr";
  },
  decrire: function(){
    var description = "Nom : " + this.nom + ", Prénom : " + this.prenom + ", Mail : " + this.mail;
    return description;
  }
};

//ajout des contacts initiaux
var levisse = Object.create(Contact);
name = "Levisse";
firstname = "Carole";
levisse.init(name, firstname);
list.push(levisse);

var nelsonne = Object.create(Contact);
name = "Nelsonne";
firstname = "Melodie";
nelsonne.init(name, firstname);
list.push(nelsonne);

//parametrage des actions version switch (version if dans note)
while (action != "0") {
  switch (action) {
    case "1": //afficher les contacts enregistés
      if (list.length > 0) {
        console.log("Voici la liste de tous vos contacts :");
        list.forEach(function(contact){
          console.log(contact.decrire());
        });
        console.log("__________________________________________________________________________________");
      } else {
        console.log("Votre liste est vide. Merci de la remplir avant de l'afficher à nouveau.")
        console.log("__________________________________________________________________________________");
      };
      choise.forEach(function (choix){
        console.log(choix);
      });
    break;
    case "2": //ajouter un contact
      var people = Object.create(Contact);
      name = prompt ("Entrer le nom du nouveau contact :");
      firstname = prompt("Entrer le prénom du nouveau contact :");
      people.init(name, firstname);
      list.push(people);
      console.log("contact ajouté avec succes !")
      console.log("votre liste contient : " + list.length + " contact(s).");
      console.log("__________________________________________________________________________________");
      choise.forEach(function (choix){
        console.log(choix);
      });
    break;
    default:
      choise.forEach(function (choix){
        console.log(choix);
      });
      var action = prompt("Action invalide. Choisisez une option valide :");
    break;
  };
  var action = prompt("Choisisez une option :");
};
console.log("__________________________________________________________________________________");
console.log("__________________________________________________________________________________");
console.log("Au revoir !");
console.log("__________________________________________________________________________________");
console.log("__________________________________________________________________________________");
