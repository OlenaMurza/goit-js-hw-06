const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('ul');
const fragment = new DocumentFragment();

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  fragment.append(li);
}

ul.append(fragment);



// let li = document.createElement('li');
// li.className = "item";
// li.append(Potatoes,
//   Mushrooms,
//   Garlic,
//   Tomatos,
//   Herbs,
//   Condiments);
// li.push(ul);
// console.log(li);
// document.body.append(li);
