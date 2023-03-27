function randomize(start, end, callback) {
	if (typeof callback !== "function") return;

	const value = Math.round(Math.random() * (end - start) + start);
	callback(value);
}

randomize(1, 10, function (value) {
	console.log(value);
});

randomize(1, 10, 122);
