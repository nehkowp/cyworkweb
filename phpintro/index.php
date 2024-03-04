<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
<h2>Tableau de joueurs</h2>

<table>
  <tr>
    <th>Nom</th>
    <th>Prénom</th>
    <th>Date de Naissance</th>
    <th>Poste</th>
  </tr>
  <tr>
    <td>Giroud</td>
    <td>Olivier</td>
    <td>30/09/1986</td>
    <td>Attaquant</td>
  </tr>
  <tr>
    <td>Griezmann</td>
    <td>Antoine</td>
    <td>21/03/1991</td>
    <td>Attaquant</td>
  </tr>
  <tr>
    <td>MBappé</td>
    <td>Kylian</td>
    <td>20/11/1998</td>
    <td>Attaquant</td>
  </tr>
  <tr>
    <td>Nobbs</td>
    <td>Jordan</td>
    <td>08/12/1992</td>
    <td>Milieu</td>
  </tr>
  <tr>
    <td>Williamson</td>
    <td>Leah</td>
    <td>29/03/1997</td>
    <td>Défense</td>
  </tr>
  <tr>
    <td>Earps</td>
    <td>Mary</td>
    <td>07/03/1993</td>
    <td>Gardien</td>
  </tr>
</table>

<?php
  function calculerAge($dateNaissance) {
    // Convertir la date de naissance en objet DateTime
    $dateNaissance = DateTime::createFromFormat('d/m/Y', $dateNaissance);
    // Obtenir la date actuelle
    $dateActuelle = new DateTime();
    // Calculer la différence entre les deux dates
    $difference = $dateActuelle->diff($dateNaissance);
    // Retourner l'âge calculé
    return $difference->y;
  }
  function initTab($tab) {
    for ($i = 0; $i < 100; $i++) {
    $nouvelle_valeur = rand(1, 100);
    array_push($tab, $nouvelle_valeur);
    }
    return $tab;
  }

  function affTab($tab){
    $length = count($tab); 
    echo "|";
    for($i = 0; $i < $length; $i++){
      echo " $tab[$i] |";
    }

  }

  function bubbleSort($tab){
    $length = count($tab);
    $nbchangement = -1;
    while($nbchangement != 0) {
      $i = 0;
      $nbchangement = 0;
      while($i < $length){
        if($tab[$i+1]<$tab[$i]){
          $temp = $tab[$i+1];
          $tab[$i+1] = $tab[$i];
          $tab[$i] = $temp;
          $nbchangement++;
        }
        $i++;
      }
    }
    return $tab;
  }


    echo "hello world :3<br>";
    // $joueurs = array(
    //     array("Nom" => "Giroud", "Prénom" => "Olivier", "Date de Naissance" => "30/09/1986", "Poste" => "Attaquant"),
    //     array("Nom" => "Griezmann", "Prénom" => "Antoine", "Date de Naissance" => "21/03/1991", "Poste" => "Attaquant"),
    //     array("Nom" => "Mbappé", "Prénom" => "Kylian", "Date de Naissance" => "20/11/1998", "Poste" => "Attaquant"),
    //     array("Nom" => "Nobbs", "Prénom" => "Jordan", "Date de Naissance" => "08/12/1992", "Poste" => "Milieu"),
    //     array("Nom" => "Williamson", "Prénom" => "Leah", "Date de Naissance" => "29/03/1997", "Poste" => "Défense"),
    //     array("Nom" => "Earps", "Prénom" => "Mary", "Date de Naissance" => "07/03/1993", "Poste" => "Gardien")
    // );
    // // Exemple d'utilisation de la fonction
    // foreach($joueurs as $joueur) {
    //   $prenom = $joueur['Prénom'];
    //   $nom = $joueur['Nom'];
    //   echo "L'âge de $prenom $nom est : " . calculerAge($joueur['Date de Naissance']) . " ans <br>";
    
    // }

    $tab = [];
    $tab = initTab($tab);
    $tab = bubbleSort($tab);
    affTab($tab);
    // var_dump($tab);
    // print_r($tab);

?>
</body>
</html>