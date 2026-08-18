let makeButton = document.getElementById("make-button");
let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let cardText = document.getElementById("card-text");


function makeCard() {
	let friendName = nameInput.value;
	let adjective = adjectiveInput.value;
	let noun = nounInput.value;
	cardText.textContent = "Dear " + friendName + ", you are always as " + adjective + " as a " + noun + "Happy birthday to you from the generator.";

}

makeButton.addEventListener("click",makeCard);

