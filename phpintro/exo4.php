<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>verification</title>
</head>
<body>
    
<form action="exo4.php" method="post">

<div class="container">
		<h2>TableLearner</h2>
		<div class="row100">
        <?php

        $tableau = array();
        if(isset($_POST["formenvoi"]) && isset($_POST["nombre"])){
            $nombre = $_POST["nombre"];
        } else {
            // Si le formulaire n'a pas encore été soumis ou si le nombre n'est pas défini, générez un nouveau nombre
            $nombre= rand(1,11);
        }
        
        $tableau = creeTable($tableau,$nombre);

        
    
         for ($i = 1; $i <= 8; $i++): ?>
            <div class="col">
                <div class="inputBox">
                    <input type="text" name="tables[]" id="table<?php echo $i; ?>" >
                    <span class="text"><?php echo $nombre . "x" . $i;  ?></span>
                    <span class="line"></span>
                </div>
            </div>
        <?php endfor; ?>
        <input type="hidden" name="nombre" value="<?php echo $nombre; ?>">
        <div class="col">
            <input type="submit" id="formenvoi" name="formenvoi" value="Envoyer" class="bouton_submit">
            <input type="submit"  id="formenvoi" name="supprimer_nombre" value="Supprimer Nombre" class="bouton_submit">

        </div>
    </div>
</form>

<?php
      function creeTable($tableau,$nombre){
        for ($i = 1; $i <= 10; $i++) {
            $tableau[$i] = $nombre * $i;
        }
        return $tableau;
    }


    if(isset($_POST["formenvoi"])){
        if(isset($_POST["supprimer_nombre"])) {
            unset($_POST["nombre"]);
        }

        $tables = $_POST['tables'];
        $nombre = $_POST['nombre'];
        $i = 0;
        $score = 0;
        foreach ($tables as $table) {
            if($table == $tableau[$i+1]){
                $score++;
            }
            $i++;
        }
        echo "Score : $score";
    }

?>
</body>
</html>