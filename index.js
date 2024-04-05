document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");
	const postcodeField = document.getElementById("postcode");
	const postcodeError = document.getElementById("postcode-error");

	const propTypeField = document.getElementById("property-type");
	const propTypeError = document.getElementById("propType-error");

	const minBedRoomsField = document.getElementById("min-bedrooms-field");
	const minBedroomsError = document.getElementById("min-bedroom-error");

	const maxBedRoomsField = document.getElementById("max-bedrooms-field");
	const maxBedroomsError = document.getElementById("max-bedroom-error");

	const minPriceField = document.getElementById("min-price");
	const minPriceError = document.getElementById("min-price-error");

	const maxPriceField = document.getElementById("max-price");
	const maxPriceError = document.getElementById("max-price-error");

	const dateField = document.getElementById("date-added");
	const dateError = document.getElementById("date-error");

	const submitbtn = document.querySelector("button[type=submit]");
	const postCodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]?/;

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	let container = document.getElementById("recent-properties");
	let cardTemplate = document.getElementById("card-template");

	let properties;

	if (localStorage.getItem("properties") === null) {
		let propJson = document.getElementById('property-data');
		let propString = propJson.textContent.trim();
		properties = JSON.parse(propString);
	} else {
		properties = JSON.parse(localStorage.getItem("properties"));
	}

	// Start -- form validation            
	postcodeField.addEventListener("change", () => {
		validatePostCode();
	});

	propTypeField.addEventListener("change", () => {
		validatePropType();
	});

	minBedRoomsField.addEventListener("change", () => {
		validateBedrooms();
	});

	maxBedRoomsField.addEventListener("change", () => {
		validateBedrooms();
	});

	minPriceField.addEventListener("change", () => {
		validatePriceRange();
	})

	maxPriceField.addEventListener("change", () => {
		validatePriceRange();
	})

	dateField.addEventListener("change", () => {
		validateDate();
	})

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		if (formValidator()) {
			let formData = new FormData(form, submitbtn);

			let formDataObj = {
				postcode: "",
				propType: "",
				minBedrooms: "",
				maxBedrooms: "",
				minPrice: "",
				maxPrice: "",
				dateAdded: "1970-01-01"
			}

			for (const [key, value] of formData) {
				if (key === "postcode") {
					formDataObj.postcode = value.toUpperCase();
				}

				if (key === "property-type") {
					formDataObj.propType = value.toLowerCase();
				}

				if (key === "min-bedrooms-field") {
					formDataObj.minBedrooms = parseInt(value);
				}

				if (key === "max-bedrooms-field") {
					formDataObj.maxBedrooms = parseInt(value);
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

			let results = properties.filter(prop => searchFunc(prop, formDataObj));

			// console.log(results);

			localStorage.setItem("searchResults", JSON.stringify(results));

			window.location.href = "./search-results.html";
		}
	});

	// Save properties object to local storage before navigating away
	window.addEventListener("beforeunload", () => {
		localStorage.setItem("properties", JSON.stringify(properties));
	})

	function searchFunc(prop, dataObj) {
		let propDate = new Date(`${prop.added.year}-${months.indexOf(prop.added.month) + 1}-${prop.added.day}`);
		let propDateTimestamp = propDate.getTime();
		let selectedDate = new Date(dataObj.dateAdded);
		let selectedDateTimestamp = selectedDate.getTime();

		return (
			(prop.postcode === dataObj.postcode || dataObj.postcode === "ALL")
			&& (dataObj.propType.toLowerCase() === "any" ? true : prop.type.toLowerCase() === dataObj.propType.toLowerCase())
			&& (prop.bedrooms >= dataObj.minBedrooms)
			&& (prop.bedrooms <= dataObj.maxBedrooms)
			&& (prop.price >= dataObj.minPrice)
			&& (prop.price <= dataObj.maxPrice)
			&& (propDateTimestamp >= selectedDateTimestamp)
		)
	}

	function formValidator() {
		if (validatePostCode() && validatePropType() && validateBedrooms()) {
			return true;
		}
		return false;
	}

	function validatePostCode() {
		let val = postcodeField.value.toUpperCase();
		if (val.match(postCodeRegex) || (val === "ALL")) {
			remErrorMessage(postcodeField, postcodeError);
			postcodeError.classList.remove("invalid-feedback");
			postcodeError.classList.add("valid-feedback");
			return true;
		} else {
			addErrorMessage(postcodeField, postcodeError, "Please enter the first part of a valid postal code (e.g. BR6) or type \"All\" to match all postal codes.");
			postcodeError.classList.add("invalid-feedback");
			postcodeError.classList.remove("valid-feedback");
			return false;
		}
	}

	function validatePropType() {
		let val = propTypeField.value;

		if (val) {
			remErrorMessage(propTypeField, propTypeError);
			propTypeError.classList.remove("invalid-feedback");
			propTypeError.classList.add("valid-feedback");
			return true;
		} else {
			addErrorMessage(propTypeField, propTypeError, "Please select a property type.")
			propTypeError.classList.remove("valid-feedback");
			propTypeError.classList.add("invalid-feedback");
			return false;
		}
	}

	function validateBedrooms() {
		let minBedVal = parseInt(minBedRoomsField.value);
		let maxBedVal = parseInt(maxBedRoomsField.value);

		if (typeof (minBedVal) === 'number' && typeof (maxBedVal) === 'number') {
			if (minBedVal < 0) {
				minBedRoomsField.value = 0;
				minBedVal = parseInt(minBedRoomsField.value);
			}

			if (maxBedVal < 0) {
				maxBedRoomsField.value = 0;
				maxBedVal = parseInt(maxBedRoomsField.value);
			}

			if (minBedVal < maxBedVal) {
				minBedRoomsField.classList.remove("is-invalid");
				minBedroomsError.classList.remove("invalid-feedback");
				minBedRoomsField.classList.add("is-valid");
				minBedroomsError.classList.add("valid-feedback");

				maxBedRoomsField.classList.remove("is-invalid");
				maxBedRoomsField.classList.add("is-valid");

				minBedroomsError.textContent = "";
				return true;
			} else {
				minBedRoomsField.classList.remove("is-valid");
				minBedroomsError.classList.remove("valid-feedback");
				minBedRoomsField.classList.add("is-invalid");
				minBedroomsError.classList.add("invalid-feedback");

				maxBedRoomsField.classList.remove("is-valid");
				maxBedRoomsField.classList.add("is-invalid");

				minBedroomsError.textContent = "Max. bedrooms should be greater than Min. bedrooms.";
				return false;
			}
		}
	}

	function validatePriceRange() {
		let minPriceVal = parseInt(minPriceField.value);
		let maxPriceVal = parseInt(maxPriceField.value);

		if (typeof (minPriceVal) === 'number' && typeof (maxPriceVal) === 'number') {
			if (minPriceVal < 0) {
				minPriceField.value = 0;
				minPriceVal = parseInt(minPriceField.value);
			}

			if (maxPriceVal < 0) {
				maxPriceField.value = 0;
				maxPriceVal = parseInt(maxPriceField.value);
			}

			if (minPriceVal < maxPriceVal) {
				minPriceField.classList.remove("is-invalid");
				minPriceError.classList.remove("invalid-feedback");
				minPriceField.classList.add("is-valid");
				minPriceError.classList.add("valid-feedback");

				maxPriceField.classList.remove("is-invalid");
				maxPriceField.classList.add("is-valid");

				minPriceError.textContent = "";
				return true;
			} else {
				minPriceField.classList.remove("is-valid");
				minPriceError.classList.remove("valid-feedback");
				minPriceField.classList.add("is-invalid");
				minPriceError.classList.add("invalid-feedback");

				maxPriceField.classList.remove("is-valid");
				maxPriceField.classList.add("is-invalid");

				minPriceError.textContent = "Max. bedrooms should be greater than Min. bedrooms.";
				return false;
			}
		}
	}

	function validateDate() {
		let selectedDateStamp = new Date(dateField.value) || new Date(0);
		let today = new Date();

		if (today <= selectedDateStamp) {
			addErrorMessage(dateField, dateError, "Please enter an earlier date.")
			dateError.classList.remove("valid-feedback");
			dateError.classList.add("invalid-feedback");
			return true;
		} else {
			remErrorMessage(dateField, dateError);
			dateError.classList.remove("invalid-feedback");
			dateError.classList.add("valid-feedback");
			return false;
		}
	}

	function addErrorMessage(el, errEl, errText) {
		el.classList.remove("is-valid");
		el.classList.add("is-invalid");
		errEl.textContent = errText;
	}

	function remErrorMessage(el, errEl) {
		el.classList.remove("is-invalid");
		el.classList.add("is-valid");
		errEl.textContent = "";
	}

	// End -- form validation
});