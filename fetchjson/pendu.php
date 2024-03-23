<?php
session_start();

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Pendu</title>
    <meta charset="utf-8">
    </head>
  <body onload="alea()">
		<h1> Le jeu du Pendu</h1>
	    <p><input type="button" value="Commencer" onclick="recommencer()"></p>
		<div id="motRecherche"></div>
		<div id="motTrouve"></div>
		<div id="resultat">
		<p> nb coups restants <span id="coups"> 10 </span></p>
		</div>
		<div id="mesLettres">
		<?php
			for ($i=97;$i<123;$i++){
				echo "<input type='button' name='lettresBoutons' value='".chr($i)."' id='".$i."' onclick='verifier(this)'>"; 
		    }
		?>
		</div>
  <script> 
	aGagner=0;
	function alea(){
		/* AJAX */
		xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange=function(){
		if (this.readyState==4 && this.status==200){
				document.getElementById("motRecherche").innerHTML=this.responseText;
				
			}
	    };
		
		/* Envoyer des informations au serveur pour un traitement */
		xhttp.open("GET", "rechercher.php?Recherche=ok", true);

		/* Ne pas oublier l'encodage des caractères */
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		/* Format de la donnee lorsque l'on envoi avec la methode post */
		xhttp.send();
	}
	function verifier(e){
		/* AJAX */
		xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange=function(){
			if (this.readyState==4 && this.status==200){
				e.disabled=true;
				if (this.responseText==="w"){
					alert("winner");
					for (i=0;i<26;i++){
						document.getElementsByName("lettresBoutons")[i].disabled=true;
					}
				}
				else if(this.responseText==="l"){
					alert("looser");
					for (i=0;i<26;i++){
						document.getElementsByName("lettresBoutons")[i].disabled=true;
					}
				}
				else{
					document.getElementById('coups').innerHTML=this.responseText;			
				}
			}
				
	    };
		
		/* Envoyer des informations au serveur pour un traitement */
		xhttp.open("GET", "rechercher.php?verifier="+e.value, true);

		/* Ne pas oublier l'encodage des caractères */
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		/* Format de la donnee lorsque l'on envoi avec la methode post */
		xhttp.send();
	}
	
	function recommencer(){
		/* AJAX */
		xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange=function(){
		if (this.readyState==4 && this.status==200){
				/* reactiver tout les boutons lettres */ 
				/* for (i=0;i<26;i++){
					document.getElementsByName("lettresBoutons")[i].disabled=false;
				}
				document.getElementById('coups').innerHTML=this.responseText;
				*/ 
				window.location.reload();
			}
	    };
		
		/* Envoyer des informations au serveur pour un traitement */
		xhttp.open("GET", "rechercher.php?recommencer=ok", true);

		/* Ne pas oublier l'encodage des caractères */
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		/* Format de la donnee lorsque l'on envoi avec la methode post */
		xhttp.send();
	}
  </script>
  </body>
</html>
