const App = function () {
	this.websites = ["google", "twitter", "facebook"];
	this.links = [];
};

App.prototype.generateLinks = function () {
	this.links = this.websites.map((website) => "https://" + website + ".com");
	// this.links = this.websites.map(website => `https://${website}.com`);
};

App.prototype.insertLinks = function () {
	const menu = document.querySelector("#menu");

	this.links.forEach((link) => {
		const newLi = document.createElement("li");
		const newA = document.createElement("a");
		newA.innerText = link;
		// newA.href = link;
		newA.setAttribute("href", link);

		newLi.appendChild(newA);
		menu.appendChild(newLi);

		// wersja alternatywna - z uzyciem innerHTML
		// const newLi = document.createElement('li');
		// newLi.innerHTML = '<a href="' + link + '">' + link + '</a>';
		// menu.appendChild(newLi);
	});
};

const app = new App();
app.generateLinks();
app.insertLinks();

console.log(app.links);
