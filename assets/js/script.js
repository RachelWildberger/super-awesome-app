var cocktailBtnEl = document.getElementById("drink-btn");
var mealBtnEl = document.getElementById("meal-btn");
var recipeCardEl = document.querySelector("#recipe-card");
var newCocktailBtnEl = document.getElementById("new-cocktail");
var newMealBtnEl = document.getElementById("new-meal");
var liquorOptionsEl = document.querySelector("#liquor-options");
var formEl = document.getElementById("drink-form");
var recipeDisplay = document.getElementById("recipe-container");

//Get data from meal API
var getMeal = function (data) {

    var theMealUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;

    fetch(theMealUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayMeal(data);
        })

        .catch(function (error) {
            alert('Unable to connect to Meal API');
        });

};

//Display the meal information 
var displayMeal = function (data) {

    var mealRecipe = data.meals[0];

    var mealIngredients = Object.entries(mealRecipe);
    var ingredients = [];

    for (var i = 0; i < mealIngredients.length; i++) {
        if (mealIngredients[i][0].includes("strIngredient") && mealIngredients[i][1]) {
            ingredients.push(mealIngredients[i][1])
        }
    }


    var ingredientsEl = document.getElementById("meal-ingredients");
    var mealNameEl = document.getElementById("meal-name");
    var cookingInstructionsEl = document.getElementById("cooking-instructions");
    var mealImageEl = document.getElementById("meal-image");
    mealImageEl.src = data.meals[0].strMealThumb;

    var mealName = data.meals[0].strMeal;
    var cookingInstructions = data.meals[0].strInstructions;

    mealNameEl.textContent = `${mealName}`;
    ingredientsEl.textContent = `Ingredients: ${ingredients}`;
    cookingInstructionsEl.textContent = `Cooking Instructions: ${cookingInstructions}`;

    console.log(data);

}

//Display the cocktail information 
var displayCocktail = function (data) {

    var recipe = data.drinks[0];

    var recipeIngredients = Object.entries(recipe);
    var ingredients = [];

    for (var i = 0; i < recipeIngredients.length; i++) {
        if (recipeIngredients[i][0].includes("strIngredient") && recipeIngredients[i][1]) {
            ingredients.push(recipeIngredients[i][1])
        }
    }

    var ingredientsEl = document.getElementById("ingredients");
    var cocktailNameEl = document.getElementById("cocktail-name");
    var instructionsEl = document.getElementById("instructions");
    var imageEl = document.getElementById("image");
    imageEl.src = data.drinks[0].strDrinkThumb;
    

    var name = data.drinks[0].strDrink;
    var instructions = data.drinks[0].strInstructions;

    cocktailNameEl.textContent = `${name}`;
    ingredientsEl.textContent = `Ingredients: ${ingredients}`;
    instructionsEl.textContent = `Instructions: ${instructions}`;


    console.log(data);

}

//Get data from cocktail API
var getCocktail = function (data) {

    var theRandomUrl = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

    fetch(theRandomUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCocktail(data);
        })

        .catch(function (error) {
            alert('Unable to connect to Cocktail API');
        });

};


mealBtnEl.addEventListener("click", getMeal);
// console.log(mealBtnEl);

cocktailBtnEl.addEventListener("click", getCocktail);
// console.log(cocktailBtnEl);

newCocktailBtnEl.addEventListener("click", getCocktail);
// console.log(newCocktailBtnEl);

newMealBtnEl.addEventListener("click", getMeal);
// console.log(newMealBntE1);

