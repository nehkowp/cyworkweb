
//exo 4 

nb=9;
im="img/fond";
//tableau d'appui
tab = new Array(9);
//joueur en cours
joueur=1;
//coup joués
nbCoups=0;


function aff(){
  var str="";
  var k=0;
  for(k=0;k<nb;k++){
    str += tab[k]+",";
  }
  alert("tab="+str);
}

function init() {
  tab = new Array(9);
  joueur=1, nbCoups=0;
  for(k=0;k<nb;k++){
    tab[k] = 0;
  }
}

function recommence() {
  tab = new Array(9);
  joueur=1, nbCoups=0;
  for(k=0;k<nb;k++){
    tab[k] = 0;
    document.images[k].src = im+".png";  
  }
}

function verifLigne(i,jo) {
   var res;
   res=true;
   for(j=0;j<3;j++){
	res = res && tab[3*i+j] == jo;
   }
   console.log(j +":"+res);

   return res;
}

function verifCol(j,jo) {
   var res;
   res=true;
   for(i=0;i<3;i++){
	res = res && tab[3*i+j] == jo;

   }
   console.log(j +":"+res);

   return res;
}

function verifDiagGch(jo) {
   var res;
   res=true;
   for(i=0;i<=2;i++){
	res = res && tab[4*i] == jo;
   }
   return res;
}

function verifDiagDrt(jo) {
   var res;
   res=true;
   for(i=1;i<=3;i++){
	res = res && tab[2*i] == jo;
   }
   return res;
}


function fin() {
  var res;
  res = false;
  i=0
  while(i<3 && !res){ // pour chq ligne/col on verifie 3 symboles alignes
    res = res || verifLigne(i,joueur)  || verifCol(i,joueur);
    i++;
  }
  if(!res){  //verif sur les 2 diagonales
    res = res || verifDiagGch(joueur) || verifDiagDrt(joueur);
  }
  if(res){ 
    alert("Le joueur "+ joueur +" gagne!");
  }else{
    if(nbCoups == 9)
       alert("Match nul...");
  }
}

function retourne(i) {
  if(tab[i] == 0){
    nbCoups++; // incremente nb de coups
    document.images[i].src = im+joueur+".png";
    tab[i] = joueur; // maj tableau d'appui
    fin(); // verif fin de jeu
    (joueur==1)?joueur=2:joueur=1; // chgmt de joueur

  }
}


