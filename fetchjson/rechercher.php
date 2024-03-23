<?php
session_start();

if(isset($_GET["Recherche"])){
	
	/* initialisation du tableau de lettres trouvees */
	$_SESSION["lettresTrouvees"]=array();
	/* initialisation du nombre de coup */
	$_SESSION["nbcoups"]=10;
	/* initialisation des lettres utilisees par l'utilisateur */ 
	$_SESSION["lettres"]="";
	/* tirer un mot aléatoire */
	$_SESSION["rechercher"]=trim(trouverAlea());
	/* taille du mot a trouver */
	$_SESSION["tailleMot"]=strlen(trim($_SESSION["rechercher"]));	
	/* mot en cours d'ajout */ 
	$_SESSION["motTrouve"]=array();

	
	for ($i=0;$i<$_SESSION["tailleMot"];$i++){
		$_SESSION["motTrouve"][$i]="_";
	}
	
}

if(isset($_GET["verifier"])){
	$_SESSION["lettres"].=$_GET["verifier"];
	
	if (strpbrk($_SESSION["rechercher"],$_GET["verifier"])){
		array_push($_SESSION["lettresTrouvees"],$_GET["verifier"]);
		miseAjour($_GET["verifier"]);

	}
	else{	
		$_SESSION["nbcoups"]=$_SESSION["nbcoups"]-1;
	}
	if (aGagner()){
		echo "w";
	}
	else if ($_SESSION["nbcoups"]<0){
		echo "l";
	}
	else {
		echo $_SESSION["nbcoups"]." : ";
		for ($i=0;$i<$_SESSION["tailleMot"];$i++){
			echo $_SESSION["motTrouve"][$i]." ";
		}
	}
	

}

if(isset($_GET["recommencer"])){
	/* initialisation du tableau de lettres trouvees */
	$_SESSION["lettresTrouvees"]=array();
	/* initialisation du nombre de coup */
	$_SESSION["nbcoups"]=10;
	/* initialisation des lettres utilisees par l'utilisateur */ 
	$_SESSION["lettres"]="";
	/* tirer un mot aléatoire */
	$_SESSION["rechercher"]=trim(trouverAlea());
	/* taille du mot a trouver */
	$_SESSION["tailleMot"]=strlen(trim($_SESSION["rechercher"]));	
	/* mot en cours d'ajout */ 
	$_SESSION["motTrouve"]=array();
	echo $_SESSION["nbcoups"];
}

function miseAjour($lettre){
	$i=0;
	$temp = str_split($_SESSION["rechercher"]);
	for ($i=0;$i<$_SESSION["tailleMot"];$i++){
		if ($temp[$i]==$lettre){
			$_SESSION["motTrouve"][$i]=$lettre;
		}
	}
}

function aGagner(){
	$res=0;
	$temp = str_split($_SESSION["rechercher"]);
	$result = array_diff($temp, $_SESSION["motTrouve"]);
	if (sizeof($result)==0){
		$res=1;
	}
	else{
		$res=0;
	}
	return $res;
}


    mt_srand(123456);
function trouverAlea(){
	$fichier=file("mots.txt");
	$rand=count($fichier);
	
    
	// initialise et prend un nombre aléatoire entre 0 et $rand
	$id = mt_rand(0,$rand);
	
	// affiche la ligne
    return($fichier[$id]);
}


?>
