const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(`#ingredients`)
const liArr = []
ingredients.forEach(ingridient => {
  const item = document.createElement(`li`)
  item.className = `item`
  item.textContent = ingridient
  liArr.push(item)
})
list.append(...liArr)