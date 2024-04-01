document.addEventListener("DOMContentLoaded", () => {
  let searchResults = JSON.parse(localStorage.getItem("searchResults"));

  let searchResultsContainer = document.getElementById("search-results-container");

  let cardTemplate = document.querySelector("[data-card-template]");

  if (searchResults && searchResults.length > 0) {
    searchResults.forEach((result) => {
      const card = cardTemplate.content.cloneNode(true).children[0];
    })
  }
})