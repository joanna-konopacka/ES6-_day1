const products = [
	{
		name: "Fiat Tipo",
		category: "car",
		price: 29900,
		condition: "new",
	},
	{
		name: "MacBook Pro",
		category: "computer",
		price: 9999,
		condition: "new",
	},
	{
		name: "Xiaomi Redmi Note 8",
		category: "phone",
		price: 2399,
		condition: "new",
	},
	{
		name: "Audi A6",
		category: "car",
		price: 23450,
		condition: "used",
	},
	{
		name: "Samsung Galaxy Note 9",
		category: "phone",
		price: 1899,
		condition: "used",
	},
	{
		name: "Seat Leon",
		category: "car",
		price: 66000,
		condition: "new",
	},
	{
		name: "Nike Sneakers",
		category: "shoes",
		price: 345,
		condition: "new",
	},
	{
		name: "Dacia Logan",
		category: "car",
		price: 33500,
		condition: "new",
	},
];

const cars = products.filter(function (value) {
	return (
		value.category === "car" && value.condition === "new" && value.price < 45000
	);
});
console.log(cars);

//==============

const primaryUl = document.querySelector("#all-products");
const addPrimaryUl = () => {
	products.forEach((element) => {
		primaryUl.innerText = `${element.name} : ${element.category}-${element.price}-${element.condition}`;
	});
};
addPrimaryUl();

const filtredUL = document.querySelector("#filtered-products");
const addFiltredUL = () => {
	cars.forEach((element) => {
		primaryUl.innerText = `${element.name} : ${element.category}-${element.price}-${element.condition}`;
	});
};
addFiltredUL();
