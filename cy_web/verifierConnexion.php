<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>verification</title>
</head>
<body>
<?php
session_start();


if(isset($_POST["formenvoi"])){
    $pseudo =$_POST['pseudo'];
    $password=$_POST['password'];
    // echo "Vous avez essayé de vous connecter en tant que ".$pseudo." ".$password;
    echo "<br>";
 
 $pseudo_a_verifier = $pseudo;

if (($handle = fopen("infoProfesseur.csv", "r"))) {
    // Initialiser le tableau associatif
    $utilisateurs_prof = array();
    $array_prof = array();


    // Parcourir chaque ligne du fichier CSV
    while (($dataprof = fgetcsv($handle, 1000, ","))) {

        foreach ($dataprof as $element) {
            $array_data = explode(";", $element);

            // echo $array_data[3] . "<br>";
            // echo $array_data[4] . "<br>";
            $array_prof[$array_data[3]][0] = $array_data[4];
            $array_prof[$array_data[3]][1] = $array_data;
            
        }
        // echo "---- Fin de la ligne ----<br>";
    }
    fclose($handle);

    // Afficher le tableau associatif
    // print_r($array_prof);
}

if (($handle = fopen("monFichier.csv", "r"))) {
    // Initialiser le tableau associatif
    $utilisateurs_eleve = array();
    $array_eleve = array();

    // Parcourir chaque ligne du fichier CSV
    while (($dataeleves = fgetcsv($handle, 1000, ","))) {
        // Récupérer le dernier élément (mot de passe)
        foreach ($dataeleves as $element) {
            $array_data = explode(";", $element);

            // echo $array_data[5] . "<br>";
            // echo $array_data[6] . "<br>";
            $array_eleve[$array_data[5]][0] = $array_data[6];
            $array_eleve[$array_data[5]][1] = $array_data;


        }
        // echo "---- Fin de la ligne ----<br>";

    }
    fclose($handle);

    // Afficher le tableau associatif
    // print_r($array_eleve);
}

    

$_SESSION["connectedeleve"] = false;
$_SESSION["connectedprof"] = false;


// echo "Pseudo à vérifier: " . $pseudo_a_verifier . "<br>";
// echo "Mot de passe à vérifier: " . $password . "<br>";
// echo "array prof : <br>";
// print_r($array_prof);
// echo "array eleve : <br>";
// print_r($array_eleve);

// Vérification pour les élèves
foreach ($array_eleve as $pseudoeleve => $info_eleve) {
    $mot_de_passe = $info_eleve[0];
    if($pseudoeleve === $pseudo_a_verifier && $mot_de_passe === $password) {
        echo "Bravo vous êtes connecté en tant qu'élève.";
        $_SESSION["connectedeleve"] = true;
        $_SESSION["array_data"] = $info_eleve[1];
        header('Location: accueil.php');
        break;
    }
}



// Vérification pour les professeurs
foreach ($array_prof as $pseudoprof => $info_prof) {
    $mot_de_passe = $info_prof[0];
    if ($pseudoprof === $pseudo_a_verifier && $mot_de_passe === $password) {
        echo "Bravo vous êtes connecté en tant que professeur.";
        $_SESSION["connectedprof"] = true;
        $_SESSION["array_data"] = $info_prof[1];
        header('Location: accueil.php');
        break;
    }
}

if (!$_SESSION["connectedeleve"] && !$_SESSION["connectedprof"]) {
    echo "Pseudo ou mot de passe incorrect.";
    header('Location: accueil.php');

}
}

?>

</body>
</html>