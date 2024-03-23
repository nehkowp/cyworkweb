<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    
    <title>Accueil</title>
</head>
<body>
    
    <?php
    session_start();
    if($_SESSION["connectedprof"]){
        echo "<div class='container'><h2>ENT Professeurs</h2></div>";
        $array_data = $_SESSION["array_data"];
        echo "<p>Prénom : " . $array_data[0] . "</p>";
        echo "<p>Nom : " . $array_data[1] . "</p>";
        echo "<p>Matière : " . $array_data[2] . "</p>";
        echo "<p>Pseudo : " . $array_data[3] . "</p>";
    }

    if($_SESSION["connectedeleve"]){
        echo "<h2>ENT Eleves</h2>";

        $userData = $_SESSION["array_data"];
        echo "<p>Prénom : " . $userData[0] . "</p>";
        echo "<p>Nom : " . $userData[1] . "</p>";
        echo "<p>Maison : " . $userData[2] . "</p>";
        echo "<p>Date de naissance : " . $userData[3] . "</p>";
        echo "<p>Nombre de points : " . $userData[4] . "</p>";
        echo "<p>Pseudo : " . $userData[5] . "</p>";


    }
    ?>
    <form method="POST">
    <input type="submit" class="bouton_submit" id="formenvoi" name="OUT"value="Déconnexion" class="bouton_submit">
    </form>
    <?php
    if (isset($_POST["OUT"])){
        session_destroy();
        header('Location: index.php');
        
    }
    ?>
</body>
</html>