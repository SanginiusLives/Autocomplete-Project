const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	fruit.forEach((fruit) => {
		if(fruit.toLowerCase().includes(str.toLowerCase())){
			results.push(fruit)
		}
	})

	showSuggestions(results)

	return results;
}

function searchHandler(e) {
	
	const value = input.value.toLowerCase();
	
	if (value.length === 0) {suggestions.innerHTML = '';
return;}
	
	search(value);

}

function showSuggestions(results, inputVal) {

	
	suggestions.innerHTML = '';

	results.forEach((fruit) => {
		const listItem = document.createElement("li");
		listItem.innerHTML = fruit;

		suggestions.appendChild(listItem);
	});


	

}

function useSuggestion(e) {
	// TODO
	e.preventDefault();
	const button = e.target;
	input.value = button.innerHTML;

	suggestions.innerHTML = ''
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);