const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');

const createItemIngredientsEl = ingredients => {
	return ingredients.map(ingredient => {
		const itemEl = document.createElement('li');
		itemEl.classList = 'item';
		itemEl.textContent = ingredient;

		return itemEl;
	});
};

const elements = createItemIngredientsEl(ingredients);
listIngredientsEl.append(...elements);
console.log(elements);
