/*
Mając do dyspozycji tablicę z latami, stwórz nową tablicę, która będzie zawierała wiek osoby urodzonej danego roku. Wyświetl nową tablicę w konsoli.
*/

const years = [1995, 1856, 2014, 1987];
const age = years.map(function (element) {
	return new Date().getFullYear() - element;
});
console.log(age);
