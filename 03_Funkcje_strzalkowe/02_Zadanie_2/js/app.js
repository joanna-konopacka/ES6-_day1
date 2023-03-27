/*Napisz funkcję strzałkową getSecondMaxNumber(array), która jako argument przyjmuje tablicę.

Funkcja ma zwrócić drugą największą liczbę w tablicy. */

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];

const getSecondMaxNumber = (array) => {
	const sortedArray = array.sort(function (a, b) {
		return b - a;
	});
	console.log(sortedArray[1]);
};

getSecondMaxNumber(arr1);

/*const getSecondMaxNumber = (elements) => {
    const sorted = [...elements].sort((a, b) => b - a);
    return sorted[1];
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];
console.log(getSecondMaxNumber(arr1));
*/
// Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
