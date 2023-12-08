// main.js
import "bootstrap"

// Sample wildlife photos
import antlersPhotos from './antlers'
import bearPhotos from "./bears";
import birdPhotos from "./birds";
import hornPhotos from "./horns";
import wolfPhotos from "./wolfs";
// Function to create a photo card
function createPhotoCard(photo) {
  const cardHtml = `
  <div class="col-md-6 col-lg-4 col-sm-12 mb-4">
  <div class="card">
    <img src="${photo.imageUrl}" class="card-img-top" alt="${photo.name}" style="max-height: 600px; width: 100%; object-fit: cover;">
    <div class="card-body">
      <h5 class="card-title">${photo.name}</h5>  
      <p class="card-text"><small class="text-muted">${photo.location}</small></p>
    </div>
  </div>
</div>

  `;
  return cardHtml;
}

// Function to render photo cards
function renderPhotoCards(photoSelection) {
  const photoCardsContainer = document.getElementById("photo-cards-container");
  if (photoCardsContainer) {
    photoSelection.forEach((photo) => {
      const cardHtml = createPhotoCard(photo);
      photoCardsContainer.innerHTML += cardHtml;
    });
  }
}


window.addEventListener("DOMContentLoaded", function () {
  console.log("Current Pathname:", window.location.pathname);

  if (window.location.pathname === "/antlers.html") {
    console.log("Pathname Matched for Antlers! Rendering photo cards.");
    renderPhotoCards(antlersPhotos);
  } else if (window.location.pathname === "/bears.html") {
    console.log("Pathname Matched for Bears! Rendering photo cards.");
    renderPhotoCards(bearPhotos);
  } else if (window.location.pathname === "/Birds.html") {
    console.log("Pathname Matched for Birds! Rendering photo cards.");
    renderPhotoCards(birdPhotos);
  } else if (window.location.pathname === "/horns.html") {
    console.log("Pathname Matched for Horns! Rendering photo cards.");
    renderPhotoCards(hornPhotos);
  } else if (window.location.pathname === "/wolfs.html") {
    console.log("Pathname Matched for Wolfs! Rendering photo cards.");
    renderPhotoCards(wolfPhotos);
  } else {
    console.log("Pathname did not match.");
  }
});

