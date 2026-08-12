let count = 0;

function tick() {
	count = count + 1;
	console.log("Tick " + count);
}

setInterval(tick, 1000);

//it will keep counting up one every second
//the fifth printed line will say Tick 5
