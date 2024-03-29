document.addEventListener("DOMContentLoaded", function () {
	let form = document.getElementById("form");
	let container = document.getElementById("recent-properties")
	let propJson = document.getElementById('property-data');
	var propString = propJson.textContent.trim();

	let properties = JSON.parse(propString);
	// console.log(properties);

	// for (let i = properties.length - 1; i > properties.length - 4; i--) {
	// 	let prop = properties[i] || false;

	// 	if (prop) {
	// 		let linkElm = document.createElement("a");
	// 		linkElm.classList.add("property-link");
	// 		linkElm.setAttribute("href", prop.url || "#");

	// 		let cardDiv = document.createElement("div");
	// 		cardDiv.classList.add("property-card")
	// 		let propTitle = document.createElement("p");
	// 		let propImage = document.createElement("img");
	// 		propImage.src = prop.pictures[0];
	// 		propTitle.innerHTML = prop.description.substring(0, 100).trim() + "...";
	// 		cardDiv.appendChild(propTitle);
	// 		cardDiv.appendChild(propImage);
	// 		linkElm.appendChild(cardDiv)
	// 		container.appendChild(linkElm);
	// 	}
	// }

	properties.map(prop => {
		let linkElm = document.createElement("a");
		linkElm.classList.add("property-link");
		linkElm.setAttribute("href", prop.url || "#");

		let cardDiv = document.createElement("div");
		cardDiv.classList.add("property-card")
		let propTitle = document.createElement("p");
		let propImage = document.createElement("img");
		propImage.src = prop.pictures[0];
		propTitle.innerHTML = prop.description.substring(0, 100).trim() + "...";
		cardDiv.appendChild(propTitle);
		cardDiv.appendChild(propImage);
		linkElm.appendChild(cardDiv)
		container.appendChild(linkElm);
	});
})

document.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("form submit click");
})