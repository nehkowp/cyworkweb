// Récupération de l'URL actuelle
let params = new URLSearchParams(window.location.search);

// Récupération des valeurs des paramètres
let nom = params.get("nom");
let prenom = params.get("prenom");
let email = params.get("email");
let phone = params.get("phone");
let adress = params.get("adress");
let postal = params.get("postal");
let ville = params.get("ville");

// Récupération de la référence de la div
let livraisonInfoDiv = document.getElementById("livraisonInfo");

// Création du contenu HTML avec les valeurs récupérées
let content = "<p>Nom: " + nom + "</p>";
content += "<p>Prénom: " + prenom + "</p>";
content += "<p>Email: " + email + "</p>";
content += "<p>Téléphone: " + phone + "</p>";
content += "<p>Adresse: " + adress + "</p>";
content += "<p>Code Postal: " + postal + "</p>";
content += "<p>Ville: " + ville + "</p>";

// Insertion du contenu HTML dans la div
livraisonInfoDiv.innerHTML = content;
