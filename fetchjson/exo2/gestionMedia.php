<!DOCTYPE html>
<html>
<head>
    <title>Mes DVDs</title>
</head>
<body>
	<h1>Mes DVDs</h1>
	<table id="media">
		<tr>
			<th>Titre</th>
			<th>Realisateur</th>
			<th>Date de realisation</th>
			<th>Duree</th>
		</tr>
	<?php
		$lire = file_get_contents("mediatheque.json");
		$json_tab = json_decode($lire, true);
		
		foreach($json_tab as $key => $value){
			echo "<tr>";
			echo "<td>".$value["titre"]."</td>";
			echo "<td>".$value["realisateur"]."</td>";
			echo "<td>".$value["date de realisation"]."</td>";
			echo "<td>".$value["duree"]."</td>";
			echo "</tr>";
		}
	?>
	</table>
	<div id="res"></div>
	<h2>Ajouter un film</h2>
	<p>Titre<input type="text" id="titre"></p>
	<p>Realisateur<input type="text" id="realisateur"></p>
	<p>Date de realisation<input type="text" id="date"></p>
	<p>Duree<input type="text" id="duree"></p>
	<p><input type="button" value="ajouter" onclick="ajouter()"></p>
	<script>
	function ajouter(){
		/* on recupere les informations */ 
		titre = document.getElementById("titre").value;
		realisateur = document.getElementById("realisateur").value;
		date = document.getElementById("date").value;
		duree = document.getElementById("duree").value;
		
		/* Creer mon film au format json*/ 
		monFilm={"titre":titre,"realisateur":realisateur,"date de realisation":date,"duree":duree};
		mesParams= JSON.stringify(monFilm);
		
		/* AJAX */
		xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange=function(){
		if (this.readyState==4 && this.status==200){
				/* ecrire le film a bien ete rajoute */
				document.getElementById("res").innerHTML="Le titre a bien ete rajoute";
				//Création d ' une ligne
				tr = document.createElement('tr');
				//Création de 2 colonnes
				tr.appendChild(document.createElement('td'));
				tr.appendChild(document.createElement('td'));
				tr.appendChild(document.createElement('td'));
				tr.appendChild(document.createElement('td'));
				//Remplissage des colonnes
				tr.cells[0].appendChild(document.createTextNode(titre));
				tr.cells[1].appendChild(document.createTextNode(realisateur));
				tr.cells[2].appendChild(document.createTextNode(date));
				tr.cells[3].appendChild(document.createTextNode(duree));
				//Récupération du tableau dont l ' id est biblio
				var element = document.getElementById("media");
				//Ajout de la ligne contenant les colonnes à l'élément dont l'id est biblio
				element.appendChild(tr);
			}
	    };
		
		/* Envoyer des informations au serveur pour un traitement */
		xhttp.open("GET", "ajouter.php?film="+mesParams, true);

		/* Ne pas oublier l'encodage des caractères */
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		/* Format de la donnee lorsque l'on envoi avec la methode post */
		xhttp.send();
	}
	</script>
</body>
</html>
