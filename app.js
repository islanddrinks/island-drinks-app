const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'


fetch(url)
.then(response => response.json())
.then(data => newDrink(data))

function newDrink(data) {
  console.log(data)
  const imageContainer = document.querySelector('.drink-picture')
  let drinks = data.drinks
  randomNumber = Math.round(Math.random() * (drinks.length - 1) + 1)
  // if (imageContainer.children.length > 0) {
  //   imageContainer.children[0].remove()
  // }
  let image = document.createElement('img')
  image.src = drinks[randomNumber].strDrinkThumb
  return imageContainer.appendChild(image)
}


