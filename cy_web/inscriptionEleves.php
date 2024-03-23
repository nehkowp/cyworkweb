<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Inscription</title>
</head>
<body>
    
<form method="post" action="./enregistrerEleves.php">
	<div class="container">
		<h2>Inscription</h2>
		<div class="row100">
		<div class="col">
				<div class="inputBox">
					<input type="text" name="prenom" id="prenom"required="required">
					<span class="text">Prénom</span>
					<span class="line"></span>
				</div>
			</div>
			<div class="col">
				<div class="inputBox">
					<input type="text" name="nom" id="nom"required="required">
					<span class="text">Nom</span>
					<span class="line"></span>
				</div>
			</div>
			<div class="col">
				<div class="inputBox">
					<input type="password" name="password" id="password"required="required">
					<span class="text">Mot de passe</span>
					<span class="line"></span>
				</div>
			</div>
			<div class="col">
				<div class="inputBox">
					<input type="text" name="pseudo" id="pseudo"required="required">
					<span class="text">Pseudo</span>
					<span class="line"></span>
				</div>
			</div>

			<div class="col">
				<div class="inputBox">
					<input type="text" name="maison" id="maison"required="required">
					<span class="text">Maison</span>
					<span class="line"></span>
				</div>
			</div>
			<div class="col">
				<div class="inputBox">
					<input type="date" name="date" id="date"required="required">
					<span class="text">Date de naissance</span>
					<span class="line"></span>
				</div>
			</div>
			<div class="col">
				<div class="inputBox">
					<input type="number" name="pts" id="pts"required="required">
					<span class="text">Points</span>
					<span class="line"></span>
				</div>
			</div>

		<div class="row100">
			<div class="col">
				<input type="submit" id="formenvoi" name="formenvoi"value="Envoyer" class="bouton_submit">
			</div>
		</div>
	</div>

	</form>
</body>
</html>