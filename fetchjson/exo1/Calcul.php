<?php
	/* On récupère les informations $_POST */
	$a=$_POST["a"];
	$b=$_POST["b"];
	$c=$_POST["c"];
	
	/*b^2 - 4ac */
	$delta=pow($b,2)-4*$a*$c;
	
	if ($delta<0){
		echo "il n'y a pas de solution";
	}
	else if ($delta==0){
		$x= -$b/(2*$a);
		echo "il n'y a qu'une solution ".$x; 
	}
	else{
		$x1= (-b+sqrt($delta)) /(2*$a);
		$x2= (-b-sqrt($delta)) /(2*$a);
		echo "il y a 2 solutions : x1=".$x1." et x2=".$x2;
	}
	
?>
