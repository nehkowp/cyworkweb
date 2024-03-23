<?php
	$mediatheque = file_get_contents('mediatheque.json');  
	$array_data = json_decode($mediatheque, true);  
	$film=$_GET['film'];
	$array_data[] = json_decode($film);  
	$final_data = json_encode($array_data);  
	file_put_contents('mediatheque.json', $final_data);
?>



