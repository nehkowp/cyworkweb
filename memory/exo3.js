let returnCards=0;
var cartesRetournees=[];
var totalCarte = 0;


function generateTable(){
    let i= 0;
    tabEtat = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    tab = new Array(20);
    for(k=1;k<21;k++){
        i = Math.round(k /2);
        tab[k-1] = i;
        // console.log(tab);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function melangerTable(tab){
    let tempCarte;
    let idRandom
    for(k=0;k<20;k++){
        tempCarte = tab[k];
        idRandom = getRandomInt(20);
        tab[k] = tab[idRandom];
        tab[idRandom] = tempCarte;
    }
}

function createTable(){
    let idCard = 0;
    console.log(tab);

    for(k=0;k<4;k++){
        const newContainer = document.createElement('div');
        newContainer.classList.add('card_row');
        for(i=0;i<5;i++){
            const newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.id = tab[idCard];
            const newImage = document.createElement('img');
            newImage.src = "img/fond.png";
            newCard.appendChild(newImage);

            newContainer.appendChild(newCard);
            idCard++;
        }
        document.getElementById("game-board").appendChild(newContainer);
        }
} 

function resetCards(){
    generateTable();
    melangerTable(tab);
    var elementsToRemove = document.querySelectorAll('.card, .card_row');
    elementsToRemove.forEach(function(element) {
        element.remove();
    });
    
    createTable();
    ajouterOnClick();
}

function ajouterOnClick(){
    var allCards = document.querySelectorAll('.card');
    for (var i = 0; i < allCards.length; i++){
        allCards[i].addEventListener('click', function() {
            if(returnCards == 2){
                returnCards = 0;
                console.log("test");
                removeOnClick();
            }
            this.classList.toggle('active');
            var index = Array.from(allCards).indexOf(this);
            var id = this.id;
            var image = this.querySelector('img'); // Define image here
            image.src = "img/carte" + tab[index] + ".png";
            returnCards++;
            cartesRetournees.push([id,index]);
            if(cartesRetournees.length==2){
                console.log(cartesRetournees);
                console.log(cartesRetournees[0][0]);
                console.log(cartesRetournees[1][0]);
                console.log(cartesRetournees[0][1]);
                console.log(cartesRetournees[1][1]);
                if(cartesRetournees[0][0] == cartesRetournees[1][0] && cartesRetournees[0][1] != cartesRetournees[1][1]){
                    totalCarte++;
                    console.log("Cartes Similaires");
                    var elements = document.querySelectorAll('[id="' + cartesRetournees[0][0] + '"]');
                    elements.forEach(function(element) {
                        // Appliquer le style à l'élément
                        element.style.opacity = '0.5'; // Opacité de 50%, changez la valeur selon vos besoins
                        element.style.pointerEvents = 'none'; // Désactive les événements de pointer
                    });
                }else{
                    console.log("Dommmage Pas Similaires");
                }
                cartesRetournees = [];
            }

            if(totalCarte == 10){
                console.log("Bien joué");
                allCards.forEach(function(element) {
                    // Appliquer le style à l'élément
                    element.style.opacity = '0';
                    element.style.pointerEvents = 'none'; // Désactive les événements de pointer
                });
                btn = document.querySelector('#reset-btn')
                btn.classList.toggle('active');
                btn.addEventListener('click', function() {
                    totalCarte = 0;
                    btn.classList.remove('active');
                    resetCards();
                });
            }
        });
        }
    
}

function removeOnClick() {
    var allCards = document.querySelectorAll('.card');
    allCards.forEach(function(card) {
        card.classList.remove('active');
        var image = card.querySelector('img');
        image.src = "img/fond.png";
    });
}
        

generateTable();
melangerTable(tab);
createTable();
ajouterOnClick();


