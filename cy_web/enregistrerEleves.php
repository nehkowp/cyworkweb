<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>verification</title>
</head>
<body>
<a href="./index.php">Home</a id="formenvoi">

<?php
 if(isset($_POST["formenvoi"])){
    $prenom =$_POST['prenom'];
    $nom =$_POST['nom'];
    $maison =$_POST['maison'];
    $date =$_POST['date'];
    $pts =$_POST['pts'];
    $pseudo=$_POST['pseudo'];
    $password=$_POST['password'];
    
    $fp = fopen('monFichier.csv', 'a+');
    $monEleve= array(
        array($prenom,$nom,$maison,$date,$pts,$pseudo,$password)
        );
    foreach ($monEleve as $fields) {
        fputcsv($fp, $fields,";");
    }
    fclose($fp);


}
?>
</body>
</html>