let name = prompt("A name:");
let adjective = prompt("A adjective:");
let noun = prompt("A noun:");
let style = prompt("Fancy or silly");

let closings = [
	"You are a legend.",
	"Stay golden.",
	"Signs point to awesome.",
];

function randomNumber(a, b) {
	return Math.floor(Math.random() * (b - a + 1))+ a;
}

function makeCard() {
	if (style === "fancy") {
		console.log("Dearest " + name + ",");
	} else {
		console.log("YO " + name + "!");
	}
}

makeCard();
makeCard();
makeCard();
makeCard();

