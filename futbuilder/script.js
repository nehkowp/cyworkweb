document.addEventListener('DOMContentLoaded', function() {
    let imagesLoaded = false;
    let loadTeamsBool = false
    let firstCardId = null;
    gender_bool = document.getElementById("male").checked;

    
    const searchMenu = document.getElementById("search-menu");


    async function loadImages() {
      try {
        const men_folder = "./assets/imgmen/";   
        const women_folder = "./assets/imgwomen/";
        const all_container = $('.players-container-all');

        $.ajax({
            url: men_folder,
            success: function(data) {
                const men_container = $('.players-container-men');
                const imageMenLinks = $(data).find("a[href$='.png']").map(function() {
                    return $(this).attr("href");
                }).get();
                $.each(imageMenLinks, function(i, fileName) {
                    const imagePath = men_folder + fileName;
                    const card_player = $("<div>").addClass("card-player").append($("<img>").attr("src", imagePath.replace(men_folder, "")));
                    const card_box = $("<div>").addClass("card-box");
                    card_box.append(card_player);
                    men_container.append(card_box);
                    all_container.append(card_player.clone());
                });  
            }
        });

        $.ajax({
          url: women_folder,
          success: function(data) {
            const women_container = $('.players-container-women');
            const imageWomenLinks = $(data).find("a[href$='.png']").map(function() {
                return $(this).attr("href");
            }).get();
            $.each(imageWomenLinks, function(i, fileName) {
                const imagePath = women_folder + fileName;
                const card_player = $("<div>").addClass("card-player").append($("<img>").attr("src", imagePath.replace(women_folder, "")));
                const card_box = $("<div>").addClass("card-box");
                
                card_box.append(card_player);                
                women_container.append(card_box);
                all_container.append(card_box.clone());
            });
          }
      });
      
    } catch (error) {
        console.error("An error occurred:", error);
    }
  }

  const forwards = document.querySelector(".forwards");
  const midfields = document.querySelector(".midfields");
  const defenders =  document.querySelector(".defenders");
  const goalkeeper =  document.querySelector(".goalkeeper");
  const cardsContainer = document.querySelector(".field");
  const addPlayer = document.querySelectorAll(".hexagon");

  placementPlayer();

  function createCard(parentElement, cardId) {
      
    // Création de la nouvelle div avec la classe "card" et l'ID spécifié
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.id = `card-${cardId}`;
      newCard.innerHTML = `
          <div class="hexagon">
              <span class="hex">&#x2B22;</span>
              <div class="plus-sign">
                  <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http
                  ://www.w3.org/2000/svg" xmlns:xlink="http
                  ://www.w3.org/1999/xlink" viewBox="0 0 94.49 94.49" xml:space="preserve" stroke="#ffffff" width="24" height="24">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                          <g>
                              <path d="M92.49,35.284H59.206V2c0-1.104-0.896-2-2-2H37.284c-1.104,0-2,0.896-2,2v33.284H2c-1.104,0-2,0.896-2,2v19.922 c0,1.104,0.896,2,2,2h33.284V92.49c0,1.104,0.896,2,2,2h19.922c1.104,0,2-0.896,2-2V59.206H92.49c1.104,0,2-0.896,2-2V37.284 C94.49,36.18,93.596,35.284,92.49,35.284z"></path>
                          </g>
                      </g>
                  </svg>
              </div>
          </div>
      `;

      const card_box = $("<div>").addClass("card-box");
      card_box.append(newCard)
      $(parentElement).append(card_box);
    }

  function removePlayer(){
    while (forwards.lastElementChild) {
      forwards.removeChild(forwards.lastElementChild);
    }
    while (midfields.lastElementChild) {
      midfields.removeChild(midfields.lastElementChild);
    }
    while (defenders.lastElementChild) {
      defenders.removeChild(defenders.lastElementChild);
    }
    while (goalkeeper.lastElementChild) {
      goalkeeper.removeChild(goalkeeper.lastElementChild);
    }
  }

  function placementPlayer() {
    
    createCard(forwards,1);
    createCard(forwards,2);
    createCard(forwards,3);
    createCard(midfields,4);
    createCard(midfields,5);
    createCard(midfields,6);
    createCard(defenders,7);
    createCard(defenders,8);
    createCard(defenders,9);
    createCard(defenders,10);
    createCard(goalkeeper,11);
    addPlayerField();

  var compo1 = document.getElementById("compo-1");
  compo1.addEventListener("change", () => {
      if (compo1.checked) {
        removePlayer();
        createCard(forwards,1);
        createCard(forwards,2);
        createCard(forwards,3);
        createCard(midfields,4);
        createCard(midfields,5);
        createCard(midfields,6);
        createCard(defenders,7);
        createCard(defenders,8);
        createCard(defenders,9);
        createCard(defenders,10);
        createCard(goalkeeper,11);
        addPlayerField();
      }
  });  

    var compo2 = document.getElementById("compo-2");
    compo2.addEventListener("change", () => {
        if (compo2.checked) {
          removePlayer();
          createCard(forwards,1);
          createCard(forwards,2);
          createCard(midfields,3);
          createCard(midfields,4);
          createCard(midfields,5);
          createCard(defenders,6);
          createCard(defenders,7);
          createCard(defenders,8);
          createCard(defenders,9);
          createCard(defenders,10);
          createCard(goalkeeper,11);
          addPlayerField();
        }
    });
    var compo3 = document.getElementById("compo-3");
    compo3.addEventListener("change", () => {
        if (compo3.checked) {
          removePlayer();
          createCard(forwards,1);
          createCard(forwards,2);
          createCard(forwards,3);
          createCard(midfields,4);
          createCard(midfields,5);
          createCard(midfields,6);
          createCard(midfields,7);
          createCard(defenders,8);
          createCard(defenders,9);
          createCard(defenders,10);
          createCard(goalkeeper,11);
          addPlayerField();
        
        }
    });

    var compo4 = document.getElementById("compo-4");
    compo4.addEventListener("change", () => {
        if (compo4.checked) {
          removePlayer();
          createCard(forwards,1);
          createCard(forwards,2);
          createCard(midfields,3);
          createCard(midfields,4);
          createCard(midfields,5);
          createCard(midfields,6);
          createCard(defenders,7);
          createCard(defenders,8);
          createCard(defenders,9);
          createCard(defenders,10);
          createCard(goalkeeper,11);
          addPlayerField();
        
        }
    });
  }

  function updateBudget(value_player,mode_update){
    const budgetDiv = document.querySelector(".budget-club");
    const budgetText = budgetDiv.textContent;
    let budgetInteger = parseInt(budgetText.replace(/\D/g, ''), 10);
    let newbudget;
    
    if(mode_update == 1){
      newbudget =  budgetInteger - Math.round(value_player);
    }else{
      newbudget =  budgetInteger + Math.round(value_player);
    }
    budgetDiv.textContent = newbudget+ " $";
  }

  function statsJoueurs(imageUrl,mode_update){
    const id = imageUrl.match(/\/(\d+)\.png$/)[1];
    Papa.parse("./assets/players-2024.csv", {
      download: true,
      header: true,
      complete: function(results) {
        // Parcourir chaque ligne du fichier CSV
          for (let i = 0; i < results.data.length; i++) {
              const row = results.data[i];
              if (row["player_id"] === id) {  
                  updateBudget(row["value_eur"],mode_update) 
                  break; 
              }
          }
      }
    });

  }

  function addListenerPlayer(e, cardsContainer, addPlayer){
    console.log(mode_add_player);
    const target = e.target.closest(".card-box");
    const alreadytarget = e.target.closest(".card-player.selected");
      addPlayer.forEach(function(addPlayer) {
        if (e.target === addPlayer || addPlayer.contains(e.target)) {
              isClickaddPlayer = true;
              cardSelected = target;
              document.querySelector(".menu").classList.add("none");
              document.querySelector(".container").classList.add("add");
              document.querySelectorAll(".card-box").forEach(cardBox => {
                cardBox.classList.add('shop');
            });

              searchMenu.classList.add("visible");
              cardsContainer.classList.add("none");

        }
      })
      if(alreadytarget){
        if(alreadytarget.classList.contains('card-player')){
          let box = alreadytarget.parentNode;
          if (mode_add_player){
            if(box.classList.contains("remove")){
              box.classList.remove("remove")
              const newCard = document.createElement('div');
              newCard.classList.add('card');
              newCard.id = alreadytarget.id;
              newCard.innerHTML = `
                  <div class="hexagon">
                      <span class="hex">&#x2B22;</span>
                      <div class="plus-sign">
                          <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http
                          ://www.w3.org/2000/svg" xmlns:xlink="http
                          ://www.w3.org/1999/xlink" viewBox="0 0 94.49 94.49" xml:space="preserve" stroke="#ffffff" width="24" height="24">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                  <g>
                                      <path d="M92.49,35.284H59.206V2c0-1.104-0.896-2-2-2H37.284c-1.104,0-2,0.896-2,2v33.284H2c-1.104,0-2,0.896-2,2v19.922 c0,1.104,0.896,2,2,2h33.284V92.49c0,1.104,0.896,2,2,2h19.922c1.104,0,2-0.896,2-2V59.206H92.49c1.104,0,2-0.896,2-2V37.284 C94.49,36.18,93.596,35.284,92.49,35.284z"></path>
                                  </g>
                              </g>
                          </svg>
                      </div>
                  </div>
                `;
              
              box.append(newCard);
              let image_url = box.firstChild.querySelector('img').src;
              
              const children = cardsPlayerShop.children;
              for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (!child.classList.contains("none")) {
                  child.childNodes.forEach(child => {
                    if (child.firstChild && child.firstChild.classList.contains("card-player")) {
                      const imgElement = child.firstChild.querySelector('img');
                        if (imgElement && child.firstChild.querySelector('img').src === image_url) {  
                          child.firstChild.classList.remove("choosed");
                        }
                    }
                });
                break;
                }
              }
              statsJoueurs(image_url,0);
              box.removeChild(box.firstChild)
              mode_add_player = false;
              addPlayerField(); 
            }else{
            }
          }else{
            if(!box.classList.contains("remove")){
              box.classList.add("remove");
              mode_add_player = true;
            }else{

            }
          }

        }
      }
        
  }
  
  var mode_add_player = false;
  function addPlayerField(){
    const cardsContainer = document.querySelector(".field");
    const addPlayer = document.querySelectorAll(".hexagon");
    isClickaddPlayer = false

    cardsContainer.addEventListener("click", (e) => {
      addListenerPlayer(e, cardsContainer, addPlayer); ;
      });
  }
    const cardsPlayerShop = document.querySelector(".players-container");
    cardsPlayerShop.addEventListener("click", (e) => {
        const player_card = e.target.closest(".card-player");
  
        if (player_card) {
            playerChoice = true;
            if(isClickaddPlayer && !(player_card.classList.contains("choosed"))){
              const send_player_card = player_card.cloneNode(true);
              send_player_card.classList.add("selected");
              player_card.classList.add("choosed");
              const cardId = cardSelected.firstChild.id;
              send_player_card.id = cardId;
              send_player_card.setAttribute('draggable', true);
                
              let image_url = send_player_card.querySelector('img').src;
              statsJoueurs(image_url,1);

              const card_box_send = $("<div>").addClass("card-box");
              card_box_send.append(send_player_card);
              
              $(cardSelected).replaceWith(card_box_send);
              searchMenu.classList.remove("visible");
              cardsContainer.classList.remove("none");

              document.querySelector(".menu").classList.remove("none");
              document.querySelector(".container").classList.remove("add");
              document.querySelectorAll(".card-box").forEach(cardBox => {
                cardBox.classList.remove('shop');
              });
              const item = document.querySelector('.card-player.selected');
              item.addEventListener('dragstart', dragStart);


              const boxes = document.querySelectorAll('.card-box');

              boxes.forEach(box => {
                if (!(box.contains(item))) {
                  box.addEventListener('dragenter', dragEnter);
                  box.addEventListener('dragover', dragOver);
                  box.addEventListener('dragleave', dragLeave);
                  box.addEventListener('drop', drop);
              }
              });

            }  
        }
    });

    var checkbox_men = document.getElementById("male");
    checkbox_men.addEventListener("change", () => {
        if (checkbox_men.checked) {
          document.querySelector(".players-container-women").classList.add("none");
          document.querySelector(".players-container-men").classList.remove("none");
          document.querySelector(".players-container-all").classList.add("none");

        }
    });

    var checkbox_women = document.getElementById("female");
    checkbox_women.addEventListener("change", () => {
        if (checkbox_women.checked) {
          document.querySelector(".players-container-women").classList.remove("none");
          document.querySelector(".players-container-men").classList.add("none");
          document.querySelector(".players-container-all").classList.add("none");
        }
    });
    var checkbox_all = document.getElementById("all");
    checkbox_all.addEventListener("change", () => {
        if (checkbox_all.checked) {
          document.querySelector(".players-container-women").classList.add("none");
          document.querySelector(".players-container-men").classList.add("none");
          document.querySelector(".players-container-all").classList.remove("none");
        }
    });

    
  
  
    const select_club = document.querySelector('.select-club');

function fillSelect(league) {
  if (select_club.children.length !== 0) {
    
    // Parcourir et supprimer chaque élément enfant
    while (select_club.firstChild) {
        select_club.removeChild(select_club.firstChild);
    }
}


    const clubsByLeague = {
        'Ligue 1': ['Paris Saint Germain', 'Olympique de Marseille', 'Lille', 'Olympique Lyonnais', 'Rennes', 'Lens', 'Monaco', 'Nice', 'Montpellier', 'Nantes', 'Lorient', 'Strasbourg', 'Stade de Reims', 'Brest', 'Metz', 'Clermont', 'Toulouse'],
        'La Liga': ['Real Madrid', 'FC Barcelona', 'Atlético Madrid', 'Sevilla', 'Real Sociedad', 'Villarreal', 'Real Betis', 'Valencia', 'Athletic Club', 'Celta de Vigo', 'Getafe', 'Osasuna', 'Mallorca', 'Rayo Vallecano', 'Granada', 'Almería'],
        'Bundesliga': ['FC Bayern München', 'Borussia Dortmund', 'RB Leipzig', 'Bayer 04 Leverkusen', 'Borussia Mönchengladbach', 'VfL Wolfsburg', 'Eintracht Frankfurt', 'SC Freiburg', 'VfB Stuttgart', 'FC Augsburg', 'Hoffenheim', 'Hertha BSC', '1. FC Union Berlin', 'Arminia Bielefeld', '1. FC Köln', 'Bochum', 'Mainz 05', 'Greuther Fürth'],
        'Premier League': ['Manchester City', 'Liverpool', 'Chelsea', 'Manchester United', 'Tottenham Hotspur', 'Arsenal', 'Leicester City', 'West Ham United', 'Wolverhampton Wanderers', 'Everton', 'Crystal Palace', 'Southampton', 'Brighton & Hove Albion', 'Leeds United', 'Newcastle United', 'Brentford', 'Watford', 'Burnley', 'Aston Villa', 'Norwich City'],
        'Serie A': ['Inter', 'Juventus', 'Milan', 'Napoli', 'Lazio', 'Atalanta', 'Roma', 'Fiorentina', 'Sassuolo', 'Sampdoria', 'Udinese', 'Torino', 'Bologna', 'Hellas Verona', 'Spezia', 'Empoli', 'Cagliari', 'Venezia', 'Salernitana', 'Genoa']
    };

    
    const clubs = clubsByLeague[league];
    
    clubs.forEach((club, index) => {
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'club-name';
      input.id = 'opt-club' + (index + 1);
      input.dataset.club = club;
      input.classList.add('selectopt');
      if (index === 0){
        input.checked = true;
      }
      const label = document.createElement('label');
      label.htmlFor = 'opt-club' + (index + 1);
      label.textContent = club;
      label.classList.add('option');

      select_club.appendChild(input);
      select_club.appendChild(label);
  });
}


const leagueButtons = document.querySelectorAll('.select-league input[name="league-name"]');


leagueButtons.forEach(button => {
    button.addEventListener('change', function() {
        
        const selectedLeague = this.dataset.league;
        
        fillSelect(selectedLeague);
        showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);
        selectClub = document.querySelector('.select-club');
        radioButtons = selectClub.querySelectorAll('input[type="radio"]');
        updateRadiosB()
    });
});

function updateRadiosB(){
  radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', () => {
          
        // Code à exécuter lorsque le bouton radio est sélectionné/désélectionné
          showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);
          updateRadiosB();
        });
  });
}


function showBudget(club){
  let selectedClub = club;

    Papa.parse("./assets/teams-squad-builder-final.csv", {
        download: true,
        header: true, 
        complete: function(results) {
            var data = results.data; 
            var clubName = selectedClub;
            var clubData = data.find(function(item) {
                return item.team_name === clubName;
            });
    
            if (clubData) {
                var clubNetWorth = Math.round(clubData.club_worth_eur);
                var budgetClubDiv = document.querySelector('.budget-club');

                
                // Modifier son contenu avec la valeur de clubNetWorth
                budgetClubDiv.textContent = (clubNetWorth/5)+ " $";

            } else {
                console.log("Le club " + clubName + " n'a pas été trouvé dans les données.");
            }
        }
    });
}


fillSelect(document.querySelector('.select-league input[name="league-name"]:checked').dataset.league);
showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);

let selectClub = document.querySelector('.select-club');
let radioButtons = selectClub.querySelectorAll('input[type="radio"]');

updateRadiosB();


    
    if (!imagesLoaded) {
      loadImages();
      imagesLoaded = true; 
  }






/* draggable element */


function dragStart(e) {
    // const targetElement = e.target;
    console.log(e);
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);

  
}


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}



function drop(e) {
    e.target.classList.remove('drag-over');

    
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    let draggable_element = document.getElementById(id);
    let drop_element = e.target.closest(".card");

    console.log(draggable_element);
    console.log(drop_element);


    draggable_element.classList.remove('hide');
}



const link = document.getElementById('send-data');

        // Ajouter un gestionnaire d'événements pour le clic sur le lien
        link.addEventListener('click', function(event) {
            // Empêcher le comportement par défaut du lien
            if(document.querySelectorAll(".card-player.selected").length == 11){
              event.preventDefault();

         
              const fieldContent = document.querySelector('.field').innerHTML;
              const encodedContent = encodeURIComponent(fieldContent);
              const nameclub = document.querySelector('.select-club input[name="club-name"]:checked').dataset.club
              const encodedNameClub = encodeURIComponent(nameclub);
  
              const destinationUrl = `yoursquad.html?content=${encodedContent}&nameclub=${encodedNameClub}`;
  
  
              // Rediriger l'utilisateur vers l'URL de destination avec les paramètres de requête
              window.location.href = destinationUrl;
            }
        });

})