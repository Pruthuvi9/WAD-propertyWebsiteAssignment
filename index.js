document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");
	const postcodeField = document.getElementById("postcode");
	const propTypeField = document.getElementById("property-type");
	const bedRoomsField = document.getElementById("bedrooms-field");
	const minPrice = document.getElementById("min-price");
	const maxPrice = document.getElementById("max-price");
	const dateField = document.getElementById("date-added");
	const submitbtn = document.querySelector("button[type=submit]");
	const postCodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]?/;

	let container = document.getElementById("recent-properties");
	let cardTemplate = document.getElementById("card-template");

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

	properties.map(prop => {
		if (prop.favourite) {
			propertyTileCreator(prop);
		}
	});

	// Start -- form validation
	postcodeField.addEventListener("change", (e) => {
		let value = e.target.value.toUpperCase();
		// console.log(value);
		if (!value.match(postCodeRegex)) {
			e.target.classList.remove("is-valid");
			e.target.classList.add("is-invalid");
			e.target.nextElementSibling.textContent = "Enter a valid postal code.";
		} else {
			e.target.classList.remove("is-invalid");
			e.target.classList.add("is-valid");
			e.target.nextElementSibling.textContent = "";
		}
	});

	propTypeField.addEventListener("change", (e) => {
		let value = e.target.value;
		// console.log(value);
		if (!value) {
			e.target.classList.remove("is-valid");
			e.target.classList.add("is-invalid");
			e.target.nextElementSibling.textContent = "Please select a property type.";
		} else {
			e.target.classList.remove("is-invalid");
			e.target.classList.add("is-valid");
			e.target.nextElementSibling.textContent = "";
		}
	});

	bedRoomsField.addEventListener("change", (e) => {
		let value = parseInt(e.target.value);

		if (typeof (value) === 'number' && value > 0) {
			e.target.classList.remove("is-invalid");
			e.target.classList.add("is-valid");
			e.target.nextElementSibling.textContent = "";
		} else {
			e.target.classList.remove("is-valid");
			e.target.classList.add("is-invalid");
			e.target.nextElementSibling.textContent = "Please enter a number greater than 0";
		}
	});

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		let formData = new FormData(form, submitbtn);

		let formDataObj = {
			postcode: "",
			propType: "",
			bedrooms: "",
			minPrice: "",
			maxPrice: "",
			dateAdded: "1970-01-01"
		}

		for (const [key, value] of formData) {
			if (key === "postcode") {
				formDataObj.postcode = value;
			}

			if (key === "property-type") {
				formDataObj.propType = value.toLowerCase();
			}

			if (key === "bedrooms") {
				formDataObj.bedrooms = parseInt(value);
			}

			if (key === "min-price") {
				formDataObj.minPrice = parseInt(value) || 0;
			}

			if (key === "max-price") {
				formDataObj.maxPrice = parseInt(value) || Number.MAX_VALUE;
			}

			if (key === "date-added") {
				formDataObj.dateAdded = value || formDataObj.dateAdded;
			}
		}

		console.log(formDataObj);

		let results = properties.filter(
			prop => prop.postcode === formDataObj.postcode
				&& prop.type.toLowerCase() === formDataObj.propType.toLowerCase()
				&& prop.bedrooms === formDataObj.bedrooms
		);

		console.log(results);

		localStorage.setItem("searchResults", JSON.stringify(results));

		window.location.href = "./search-results.html";
	});

	// End -- form validation

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
		favouriteIcon.classList.add("fa-heart");

		// create image and add to the container
		let propImage = card.querySelector(".property-image");
		propImage.src = prop.pictures[0];

		container.appendChild(card);
	}
});