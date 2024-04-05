document.addEventListener("DOMContentLoaded", () => {
  let properties = JSON.parse(localStorage.getItem("properties"));
  let searchResults = JSON.parse(localStorage.getItem("searchResults"));

  let searchResultsContainer = document.getElementById("search-results-container");

  let favouritesContainer = document.getElementById("recent-properties-container");
  let favouritePropsTitle = document.getElementById("recent-properties-title");

  let cardTemplate = document.getElementById("card-template");

  let favouritePropsCount = 0;

  properties.map(prop => {
    if (prop.favourite) {
      favouritePropsCount++;
      propertyTileCreator(prop, favouritesContainer);
    }
  });

  if (favouritePropsCount > 0) {
    favouritePropsTitle.innerText = "Your favourite properties";
  }

  if (searchResults && searchResults.length > 0) {
    searchResults.map((result) => {
      propertyTileCreator(result, searchResultsContainer);
    });
  } else {
    let error = document.createElement("p");
    error.textContent = "No properties found.";
    searchResultsContainer.appendChild(error);
  }

  function propertyTileCreator(prop, container) {
    const card = cardTemplate.content.cloneNode(true);

    // create the link
    const linkElm = card.querySelector("[data-card-link]");
    linkElm.setAttribute("href", prop.url || "#");

    //create title
    let propTitle = card.querySelector(".property-description");
    propTitle.innerText = prop.description.substring(0, 100).trim() + "...";

    // create image and add to the container
    let propImage = card.querySelector(".property-image");
    propImage.src = prop.pictures[0];

    container.appendChild(card);
  }
});