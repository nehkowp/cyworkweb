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
 if(isset($_POST["formenvoi"])){
    $pseudo =$_POST['pseudo'];
    $password=$_POST['password'];
    // echo "Vous avez essayé de vous connecter en tant que ".$pseudo." ".$password;
    echo "<br>";
 }
 $pseudo_a_verifier = $pseudo;

 $utilisateurs = array(
    "HarryDu93" => "giny<3",
    "HermioneDu64" => "pattenrond",
    "RonDu33" => "tfcForEver");

    $connected = false;
    
    foreach ($utilisateurs as $pseudo => $mot_de_passe) {
        if ($pseudo === $pseudo_a_verifier) {
            if($mot_de_passe === $password){
                echo "Bravo vous êtes connecté";
                $connected = true;
                break;
            }
        }
    }
    if(!$connected){
    echo "Mauvais mot de passe ou identifiant";
    }
?>
</body>
</html>