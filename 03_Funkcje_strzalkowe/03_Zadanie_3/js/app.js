/*
Napisz funkcję strzałkową runInterval(n), która jako parametr (n) przyjmie liczbę całkowitą od 1 - 10.
Zmienna n ma mieć domyślną wartość 8 w razie wywołania funkcji bez żadnej wartości.
Wewnątrz funkcji uruchom interwał (setInterval) który ma wyświetlać napis "Hello" w konsoli co 500 ms.
Napis ten powinien pojawić się określoną ilość razy - ustaloną przez parametr przesłany do funkcji.
Po osiągnięciu, np. 8 powtórzeń interwału, zostaje wyczyszczony. */

const runInterval = (n = 8) => {
	if (n > 10 || n < 1) return;

	let counter = 0;

	const interval = setInterval(() => {
		counter++;
		console.log("Hello");

		if (counter === n) {
			clearInterval(interval);
		}
	}, 500);
};

runInterval(5);
