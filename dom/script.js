

document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector(".container");
  cardsButton = document.querySelectorAll(".profile-image");
  const addButton = document.querySelectorAll(".add-image");

  cardsContainer.addEventListener("click", (e) => {
    const target = e.target.closest(".card");
  
    let isClickOncardsButton = false;
    let isClickAddButton = false;
  
    cardsButton.forEach(function(cardsButton) {
          if (e.target === cardsButton || cardsButton.contains(e.target)) {
              isClickOncardsButton = true;
          }
      });
      addButton.forEach(function(addButton) {
        if (e.target === addButton || addButton.contains(e.target)) {
            isClickAddButton = true;
        }
    });
  
      // Si le clic est sur l'une des div précises ou l'un de leurs enfants, ne pas effectuer l'action
      if (isClickOncardsButton) {
        console.log("click sur button");
      //   cardsContainer.querySelectorAll(".card").forEach((card) => {
      //   card.classList.remove("active");
      // });
      target.classList.remove("active");
      target.remove();
  
          return;
      }
      
      if(isClickAddButton) {
            const artist_input = document.getElementById("artist_input");
            const image_input = document.getElementById("image_input");
            console.log(artist_input.value); 
            console.log(image_input.value); 

            // Création de la nouvelle div card
            const newCard = document.createElement('div');
            newCard.classList.add('card');
  
            // Création de l'image de fond
            const backgroundImg = document.createElement('img');
            backgroundImg.classList.add('background');
            backgroundImg.src = image_input.value
            backgroundImg.alt = "";
            newCard.appendChild(backgroundImg);
  
            // Création de la div card-content
            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');
  
            // Création de la div profile-image
            const profileImage = document.createElement('div');
            profileImage.classList.add('profile-image');
  
            // Création de l'icône de suppression
            const removeButtonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            removeButtonSvg.classList.add('button_remove');
            removeButtonSvg.setAttribute('width', '15');
            removeButtonSvg.setAttribute('height', '15');
            removeButtonSvg.setAttribute('viewBox', '0 0 15 15');
            removeButtonSvg.setAttribute('fill', 'none');
            const removeButtonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            removeButtonPath.setAttribute('fill-rule', 'evenodd');
            removeButtonPath.setAttribute('clip-rule', 'evenodd');
            removeButtonPath.setAttribute('d', 'M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z');
            removeButtonPath.setAttribute('fill', 'currentColor');
            removeButtonSvg.appendChild(removeButtonPath);
            profileImage.appendChild(removeButtonSvg);
  
            // Ajout de la div profile-image à la div card-content
            cardContent.appendChild(profileImage);
  
            // Création du titre h3
            const title = document.createElement('h3');
            title.classList.add('title');
            title.textContent = artist_input.value;
            cardContent.appendChild(title);
  
            // Ajout de la div card-content à la div card
            newCard.appendChild(cardContent);
            
            const container = document.querySelector('.container');
            const childCount = container.children.length;
            console.log(childCount);
  
            // Insérer la nouvelle carte à la position avant-dernière (si le conteneur a des enfants)
            if (childCount > 0) {
                if (childCount <10){
                  const position = childCount - 2; // avant-dernière position
                  const beforeCard = container.children[position];
                  container.insertBefore(newCard, beforeCard);
                  cardsButton = document.querySelectorAll(".profile-image");

                }
  
            } else {
                // Si aucune carte n'est trouvée, ajoutez simplement la nouvelle carte au conteneur
                container.appendChild(newCard);
                cardsButton = document.querySelectorAll(".profile-image");

            }
      }
  
    if (!target) return;
    console.log("click sur image");
  
    cardsContainer.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("active");
    });
  
    target.classList.add("active");
  });
  
});
