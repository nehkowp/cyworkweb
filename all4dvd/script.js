
document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector(".container");
  const cardsContainerShop = document.querySelector(".container-shop");
  let cardsButton = document.querySelectorAll(".profile-image");
  let prix = 0;
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
        const priceDisplay = document.getElementById('price');
        prix=prix+1.5;
        priceDisplay.textContent = `Panier : ${prix} €`;
        console.log("click sur button");
        target.classList.remove("active");
        const removeButtonSvg = target.querySelector('.bi.bi-heart');
        if (removeButtonSvg) {
          removeButtonSvg.setAttribute('width', '15');
          removeButtonSvg.setAttribute('height', '15');
          removeButtonSvg.setAttribute('viewBox', '0 0 15 15');
          removeButtonSvg.setAttribute('fill', 'none');
          
          // Find the path element inside removeButtonSvg
          const removeButtonPath = removeButtonSvg.querySelector('path');
          if (removeButtonPath) {
              // Update the attributes of the path element
              removeButtonPath.setAttribute('fill-rule', 'evenodd');
              removeButtonPath.setAttribute('clip-rule', 'evenodd');
              removeButtonPath.setAttribute('d', 'M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z');
              removeButtonPath.setAttribute('fill', 'currentColor');
          }
      }
        
        cardsContainerShop.appendChild(target);
        cardsButton = document.querySelectorAll(".profile-image");
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
            removeButtonSvg.classList.add('bi', 'bi-heart'); // Ajoutez les classes nécessaires
            removeButtonSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            removeButtonSvg.setAttribute('width', '16');
            removeButtonSvg.setAttribute('height', '16');
            removeButtonSvg.setAttribute('fill', 'currentColor');
            removeButtonSvg.setAttribute('viewBox', '0 0 16 16');

            // Création du chemin
            const removeButtonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            removeButtonPath.setAttribute('d', 'M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.176a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z');
            removeButtonSvg.appendChild(removeButtonPath);

            // Ajout de l'icône de suppression à la div parente
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
  
            // Insérer la nouvelle carte à la position avant-dernière (si le conteneur a des enfants)
            if (childCount > 0) {
                  const beforeCard = container.children[0];
                  container.insertBefore(newCard, beforeCard);
                  cardsButton = document.querySelectorAll(".profile-image");
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

  cardsContainerShop.addEventListener("click", (e) => {
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
  
      // Si le clic est sur l'une des div précises ou l'un de leurs enfants, ne pas effectuer l'action
      if (isClickOncardsButton) {
        const priceDisplay = document.getElementById('price');
        prix=prix-1.5;
        priceDisplay.textContent = `Panier : ${prix} €`;
        console.log("click sur delete");
        target.classList.remove("active");
        const removeButtonSvg = target.querySelector('.bi.bi-heart');
        if (removeButtonSvg) {
          removeButtonSvg.setAttribute('width', '16');
          removeButtonSvg.setAttribute('height', '16');
          removeButtonSvg.setAttribute('viewBox', '0 0 16 16');
          removeButtonSvg.setAttribute('fill', 'none');
          
          // Find the path element inside removeButtonSvg
          const removeButtonPath = removeButtonSvg.querySelector('path');
          if (removeButtonPath) {
              // Update the attributes of the path element
              removeButtonPath.setAttribute('fill-rule', 'evenodd');
              removeButtonPath.setAttribute('clip-rule', 'evenodd');
              removeButtonPath.setAttribute('d', 'M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.176a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z');
              removeButtonPath.setAttribute('fill', 'currentColor');
          }
      }
        
      const childCount = cardsContainer.children.length;
  
            // Insérer la nouvelle carte à la position avant-dernière (si le conteneur a des enfants)
            if (childCount > 0) {
                  const beforeCard = cardsContainer.children[0];
                  cardsContainer.insertBefore(target, beforeCard);
                  cardsButton = document.querySelectorAll(".profile-image");
            } else {
                // Si aucune carte n'est trouvée, ajoutez simplement la nouvelle carte au conteneur
                cardsContainer.appendChild(target);
                cardsButton = document.querySelectorAll(".profile-image");

            }  
        cardsButton = document.querySelectorAll(".profile-image");
        return;
      }

      if (!target) return;
      console.log("click sur image");
    
      cardsContainerShop.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("active");
      });
    
      target.classList.add("active");
    });

  
});
})
