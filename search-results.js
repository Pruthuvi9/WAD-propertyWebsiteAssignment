document.addEventListener("DOMContentLoaded", () => {
  let searchResults = JSON.parse(localStorage.getItem("searchResults"));

  let searchResultsContainer = document.getElementById("search-results-container");

  let cardTemplate = document.getElementById("card-template");

  if (searchResults && searchResults.length > 0) {
    searchResults.forEach((result) => {
      propertyTileCreator(result);
    });
  } else {
    let error = document.createElement("p");
    error.textContent = "No properties found.";
    searchResultsContainer.appendChild(error);
  }

  function propertyTileCreator(prop) {
    const card = cardTemplate.content.cloneNode(true);

    // create the link
    const linkElm = card.querySelector("[data-card-link]");
    linkElm.setAttribute("href", prop.url || "#");

    //create title
    let propTitle = card.querySelector(".property-description");
    propTitle.innerText = prop.description.substring(0, 100).trim() + "...";

    // create favourite selector icon and add to the container
    let favouriteIcon = card.querySelector(".favourite-icon");
    favouriteIcon.classList.add("fa");

    if (prop.favourite) {
      favouriteIcon.classList.add("fa-heart");
    } else {
      favouriteIcon.classList.add("fa-heart-o");
    }

    // create image and add to the container
    let propImage = card.querySelector(".property-image");
    propImage.src = prop.pictures[0];

    searchResultsContainer.appendChild(card);
  }
});