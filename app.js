function cocktail() {
  console.log(liquor)
  if (liquor === 'RUM') {
    var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'
  } else {
    var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila'
  }
fetch(url)
.then(response => response.json())
.then(data => newDrink(data))
}

function newDrink(data) {
  console.log(data)
  const imageContainer = document.querySelector('.drink-picture')
  const name = document.querySelector('.drink-name')
  const image = document.querySelector('.drink-image')
  let drinks = data.drinks
  randomNumber = Math.round(Math.random() * (drinks.length - 1) + 1)

  
  return name.innerText = drinks[randomNumber].strDrink , image.src = drinks[randomNumber].strDrinkThumb

}


