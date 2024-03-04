// Récupération de l'URL actuelle
let params = new URLSearchParams(window.location.search);

// Récupération des valeurs des paramètres
let food1 = params.get("food1");
let food2 = params.get("food2");
let food3 = params.get("food3");

// Affichage des valeurs
console.log("Food1:", food1);
console.log("Food2:", food2);
console.log("Food3:", food3);

// Récupération de la référence de la div
let commandefoodDiv = document.getElementById("commandefood");

// Création du contenu HTML avec les valeurs récupérées
let content = "<p>Ingrédient 1: " + food1 + "</p>";
content += "<p>Ingrédient 2: " + food2 + "</p>";
content += "<p>Ingrédient 3: " + food3 + "</p>";



// Insertion du contenu HTML dans la div
commandefoodDiv.innerHTML = content;