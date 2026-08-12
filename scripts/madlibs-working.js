let name = prompt("A name:");
let adjective = prompt("A adjective:");
let noun = prompt("A noun:");
let place = prompt("A place:");
let verb = prompt("An action:");
let noun1 = prompt("A noun:");

function makeCard () {
	console.log("Dear " + name + ",");
	console.log("You are as " + adjective + " as an " + noun + ".");
	console.log("I hope " + place + " is everything you expected.");
	console.log(verb + " my baby girl for me.");
	console.log("Happy birthday from the generator.");
}

makeCard ();
makeCard ();

function thankYou () {
	console.log("I love you and thank you for all the " + noun1 + " we shared.");
}	

thankYou();
thankYou();
thankYou();
thankYou();
	

