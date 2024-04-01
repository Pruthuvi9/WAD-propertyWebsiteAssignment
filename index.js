document.addEventListener("DOMContentLoaded", function () {
	let form = document.getElementById("form");
	let container = document.getElementById("recent-properties");
	let cardTemplate = document.querySelector("[data-card-template]");
	let propJson = document.getElementById('property-data');
	var propString = propJson.textContent.trim();

	let properties = JSON.parse(propString);

	let favouritePropsTitle = document.getElementById("recent-properties-title");

	let favouritePropsCount = 0;

	properties.map(prop => {
		if (prop.favourite) {
			favouritePropsCount++;
		}
	});

	if (favouritePropsCount > 0) {
		favouritePropsTitle.innerText = "Your favourite properties";
	}

	const propertyTileCreator = (prop) => {

		const card = cardTemplate.content.cloneNode(true).children[0];

		// create the link
		let linkElm = card.querySelector("[data-card-link]");
		linkElm.setAttribute("href", prop.url || "#");
		console.log(linkElm);

		//create title
		let propTitle = card.querySelector(".property-description");
		propTitle.innerText = prop.description.substring(0, 100).trim() + "...";

		// create favourite selector icon and add to the container
		let favouriteIcon = card.querySelector("favourite-icon");
		favouriteIcon.classList.add("fa");
		favouriteIcon.classList.add("fa-heart");

		// create image and add to the container
		let propImage = card.querySelector(".property-image");
		propImage.src = prop.pictures[0];

		container.appendChild(card);
	}

	properties.map(prop => {
		if (prop.favourite) {
			propertyTileCreator(prop);
		}
	});
})

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let results = [];

	for (let i = 0; i < 3; i++) {
		results.push(properties[i]);
	}

	localStorage.setItem("searchResults", JSON.stringify(results));

	window.location.href = "./search-results.html";
})