let propJson = document.getElementById('property-data');
var propString = propJson.textContent.trim();

let properties = JSON.parse(propString);

// let properties = [
// 	{
// 		id: 'prop1',
// 		type: 'House',
// 		bedrooms: 3,
// 		price: 750000,
// 		tenure: 'Freehold',
// 		description:
// 			"Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
// 		location: 'Petts Wood Road, Petts Wood, Orpington',
// 		pictures: [
// 			'./assets/images/prop1/4888_FAT160373_IMG_00_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_01_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_02_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_03_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_04_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_05_0000.jpeg',
// 		],
// 		url: './properties/prop1.html',
// 		added: {
// 			month: 'October',
// 			day: 12,
// 			year: 2022,
// 		}
// 	},
// 	{
// 		id: 'prop2',
// 		type: 'Flat',
// 		bedrooms: 2,
// 		price: 399995,
// 		tenure: 'Freehold',
// 		description:
// 			'Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...',
// 		location: 'Crofton Road Orpington BR6',
// 		pictures: [
// 			'./assets/images/prop1/4888_FAT160373_IMG_00_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_01_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_02_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_03_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_04_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_05_0000.jpeg',
// 		],
// 		// url: 'properties/prop2.html',
// 		added: {
// 			month: 'September',
// 			day: 14,
// 			year: 2022,
// 		}
// 	},
// 	{
// 		id: 'prop3',
// 		type: 'House',
// 		bedrooms: 3,
// 		price: 750000,
// 		tenure: 'Freehold',
// 		description:
// 			"Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
// 		location: 'Petts Wood Road, Petts Wood, Orpington',
// 		pictures: [
// 			'./assets/images/prop1/4888_FAT160373_IMG_00_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_01_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_02_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_03_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_04_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_05_0000.jpeg',
// 		],
// 		// url: 'properties/prop1.html',
// 		added: {
// 			month: 'October',
// 			day: 12,
// 			year: 2022,
// 		}
// 	},
// 	{
// 		id: 'prop4',
// 		type: 'Flat',
// 		bedrooms: 2,
// 		price: 399995,
// 		tenure: 'Freehold',
// 		description:
// 			'Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...',
// 		location: 'Crofton Road Orpington BR6',
// 		pictures: [
// 			'./assets/images/prop1/4888_FAT160373_IMG_00_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_01_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_02_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_03_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_04_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_05_0000.jpeg',
// 		],
// 		// url: 'properties/prop2.html',
// 		added: {
// 			month: 'September',
// 			day: 14,
// 			year: 2022,
// 		}
// 	},
// 	{
// 		id: 'prop5',
// 		type: 'House',
// 		bedrooms: 3,
// 		price: 750000,
// 		tenure: 'Freehold',
// 		description:
// 			"Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
// 		location: 'Petts Wood Road, Petts Wood, Orpington',
// 		pictures: [
// 			'./assets/images/prop1/4888_FAT160373_IMG_00_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_01_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_02_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_03_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_04_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_05_0000.jpeg',
// 		],
// 		// url: 'properties/prop1.html',
// 		added: {
// 			month: 'October',
// 			day: 12,
// 			year: 2022,
// 		}
// 	},
// 	{
// 		id: 'prop6',
// 		type: 'Flat',
// 		bedrooms: 2,
// 		price: 399995,
// 		tenure: 'Freehold',
// 		description:
// 			'Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...',
// 		location: 'Crofton Road Orpington BR6',
// 		pictures: [
// 			'./assets/images/prop1/4888_FAT160373_IMG_00_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_01_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_02_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_03_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_04_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_05_0000.jpeg',
// 		],
// 		// url: 'properties/prop2.html',
// 		added: {
// 			month: 'September',
// 			day: 14,
// 			year: 2022,
// 		}
// 	},
// 	{
// 		id: 'prop7',
// 		type: 'House',
// 		bedrooms: 3,
// 		price: 750000,
// 		tenure: 'Freehold',
// 		description:
// 			"Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
// 		location: 'Petts Wood Road, Petts Wood, Orpington',
// 		pictures: [
// 			'./assets/images/prop1/4888_FAT160373_IMG_00_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_01_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_02_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_03_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_04_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_05_0000.jpeg',
// 		],
// 		// url: 'properties/prop1.html',
// 		added: {
// 			month: 'October',
// 			day: 12,
// 			year: 2022,
// 		}
// 	},
// 	{
// 		id: 'prop8',
// 		type: 'Flat',
// 		bedrooms: 2,
// 		price: 399995,
// 		tenure: 'Freehold',
// 		description:
// 			'Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...',
// 		location: 'Crofton Road Orpington BR6',
// 		pictures: [
// 			'./assets/images/prop1/4888_FAT160373_IMG_00_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_01_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_02_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_03_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_04_0000.jpeg',
// 			'./assets/images/prop1/4888_FAT160373_IMG_05_0000.jpeg',
// 		],
// 		url: 'properties/prop8.html',
// 		added: {
// 			month: 'September',
// 			day: 14,
// 			year: 2022,
// 		}
// 	}
// ];

for (let i = properties.length - 1; i > properties.length - 4; i--) {
	let prop = properties[i] || false;

	if (prop) {
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
	}
}

// properties.map(prop => {
// 	let linkElm = document.createElement("a");
// 	linkElm.classList.add("property-link");
// 	linkElm.setAttribute("href", prop.url || "#");

// 	let cardDiv = document.createElement("div");
// 	cardDiv.classList.add("property-card")
// 	let propTitle = document.createElement("p");
// 	let propImage = document.createElement("img");
// 	propImage.src = prop.pictures[0];
// 	propTitle.innerHTML = prop.description.substring(0, 100).trim() + "...";
// 	cardDiv.appendChild(propTitle);
// 	cardDiv.appendChild(propImage);
// 	linkElm.appendChild(cardDiv)
// 	container.appendChild(linkElm);
// });