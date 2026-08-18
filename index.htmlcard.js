<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width" initial-scale=1">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.1.1/css/pico.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.1.1/css/pico.min.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&amp;display=swap">
	<title>Cardi 🃏 Hardi</title>
</head>
<body>
	<header>
		<h1>Cardi 🃏 Hardi</h1>
	</header>
	<main>
		<section id="order-section">
			<h2>Order a card</h2>
			<label>A name
				<input id="name-input" type="text"/>
			</label>
			<label>An adjective
				<input id="adjective-input" type="text"/>
			</label>
			<label>A noun
				<input id="noun-input" type="text"/>
			</label>
			<button type="button" id="make-button">Make my card</button>
		</section>
		<section id="card-secction">
			<article>
				<p id="card-text">Cards will appear here.</p>
			</article>
		</section>
	</main>
	<footer>
		<p>Created by: Ashanti S. Lemonia(Tsasa)</p>
	</footer>
	
	<script src="card.js"</script>
</body>