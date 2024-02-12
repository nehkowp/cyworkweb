


// FONCTION FiboT(n : entier, acc1 : entier, acc2 : entier) : entier
// DEBUT
//     SI (n = 0) ALORS
//         RETOURNER acc2
//     SINON
//         RETOURNER FiboT(n - 1, acc1, acc1+acc2)
//     FIN SI
// FIN

function fibo(n, acc1, acc2) {
  if(n == 0){
    return acc1;
  }else{
    return fibo(n-1,acc2,acc1+acc2);
  }
}

// n = prompt("saisissez un rang");



d = new Date();
console.log(d.getHours());
console.log(d.getMinutes());

document.write("<div id='maDiv',class='test'>");
document.write("A "+d.getHours().toString()+"h "+d.getMinutes().toString()+"min");
// document.write("<br />");
// document.write("Le "+n.toString()+"e terme de la suite de Fibonacci est "+fibo(n,0,1).toString());
document.write("</div'>");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("idbouton").addEventListener("click", async function(event) {
    console.log("Tets");
  }
  )
})

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("dvd1").addEventListener("mouseover", async function(event) {
    console.log("new test");
    document.querySelector("#dvd1").setAttribute("hidden","");
    document.querySelector("#dvd2").removeAttribute("hidden");
  }
  )
  document.querySelector("#dvd2").setAttribute("hidden","");
  document.querySelector("#dvd1").removeAttribute("hidden");
})

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("dvd2").addEventListener("mouseout", async function(event) {
    console.log("new test");
    document.querySelector("#dvd2").setAttribute("hidden","");
    document.querySelector("#dvd1").removeAttribute("hidden");
  }
  )
  document.querySelector("#dvd1").setAttribute("hidden","");
  document.querySelector("#dvd2").removeAttribute("hidden");
})
