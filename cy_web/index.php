<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Connection</title>
</head>
<body>
<form method="post" action="./verifierConnexion.php">
	<div class="container">
		<h2>ConnectionPHP</h2>
		<div class="row100">
			<div class="col">
				<div class="inputBox">
					<input type="text" name="pseudo" id="pseudo"required="required">
					<span class="text">Pseudo</span>
					<span class="line"></span>
				</div>
			</div>
			<div class="col">
				<div class="inputBox">
					<input type="password" name="password" id="password"required="required">
					<span class="text">Password</span>
					<span class="line"></span>
				</div>
			</div>
		<div class="row100">
			<div class="col">
				<input type="submit" class="bouton_submit" id="formenvoi" name="formenvoi"value="Envoyer" class="bouton_submit">
			</div>
		</div>
	</div>

	</form>

</body>
</html>