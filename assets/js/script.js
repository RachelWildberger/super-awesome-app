var cocktailBtnEl = document.getElementById("drink-btn");
var chooseBtnEl = document.getElementById("choose-btn");
var mealBtnEl = document.getElementById("meal-btn");
var recipeCardEl = document.getElementById("recipe-card");
var newCocktailBtnEl = document.getElementById("new-cocktail");
var liquorOptionsEl = document.getElementById("liquor-options");
var formEl = document.getElementById("drink-form");
var recipeDisplay = document.getElementById("recipe-container");

// Display the Choose cocktail information
var getChooseCocktail = function () {
    var liquorType = document.getElementById("drop-down").value;
    var theCocktailUrl = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${liquorType}`;

    console.log(liquorType);
    fetch(theCocktailUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (response){
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + response.drinks[0].idDrink)
    })
    .then(function (response){
        return response.json();
    })
        .then(function (data) {

            console.log(data);
            displayCocktail(data);

        })
        .catch(function (error) {

            console.log(error);
            alert('Please choose a liquor type from the drop-down menu.');
        });
};

// Get data from Search by ingredient cocktail API
var chooseCocktail = function (liquorType) {

    var theCocktailUrl = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${liquorType}`;

    fetch(theCocktailUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
};

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
    var measurements = [];

    for (var i = 0; i < mealIngredients.length; i++) {
        if (mealIngredients[i][0].includes("strIngredient") && mealIngredients[i][1]) {
            ingredients.push(mealIngredients[i][1])
        }
        if (mealIngredients[i][0].includes("strMeasure") && mealIngredients[i][1]) {
            measurements.push(mealIngredients[i][1]);
        }
    }

    var ingredientsEl = document.getElementById("meal-ingredients");
    var mealNameEl = document.getElementById("meal-name");
    var cookingInstructionsEl = document.getElementById("cooking-instructions");
    var mealImageEl = document.getElementById("meal-image");
    mealImageEl.src = data.meals[0].strMealThumb;
    ingredientsEl.innerHTML = "";

    var mealName = data.meals[0].strMeal;
    var cookingInstructions = data.meals[0].strInstructions;

    mealNameEl.textContent = `${mealName}`;
    for (var i = 0; i < ingredients.length; i++) {
        ingredientsEl.innerHTML += "<li>" + measurements[i] + " " + ingredients[i] + "</li>"; 
    }
    cookingInstructionsEl.textContent = `Cooking Instructions: ${cookingInstructions}`;

    // saving recipe into local storage
    localStorage.setItem("meal-name", mealName); 
    localStorage.setItem("meal-measurements", measurements); 
    localStorage.setItem("meal-ingredients", ingredients);  
    localStorage.setItem("meal-instructions", cookingInstructions);  
    localStorage.setItem("meal-image", mealImageEl.src); 

}


//Display the cocktail information 
var displayCocktail = function (data) {

    var recipe = data.drinks[0];

    var recipeIngredients = Object.entries(recipe);
    var ingredients = [];
    var measurements = [];

    for (var i = 0; i < recipeIngredients.length; i++) {
        if (recipeIngredients[i][0].includes("strIngredient") && recipeIngredients[i][1]) {
            ingredients.push(recipeIngredients[i][1]);

        }
        if (recipeIngredients[i][0].includes("strMeasure") && recipeIngredients[i][1]) {
            measurements.push(recipeIngredients[i][1]);
        }
    }

    var ingredientsEl = document.getElementById("ingredients");
    var cocktailNameEl = document.getElementById("cocktail-name");
    var instructionsEl = document.getElementById("instructions");
    var imageEl = document.getElementById("image");
    imageEl.src = data.drinks[0].strDrinkThumb;
    ingredientsEl.innerHTML = "";

    var name = data.drinks[0].strDrink;
    var instructions = data.drinks[0].strInstructions;

    cocktailNameEl.textContent = `${name}`;
    for (var i = 0; i < ingredients.length; i++) {

        ingredientsEl.innerHTML += "<li>" + measurements[i] + " " + ingredients[i] + "</li>"; 
        
    }
         instructionsEl.textContent = `Instructions: ${instructions}`;

    // saving recipe into local storage
        localStorage.setItem("drink-name", name); 
        localStorage.setItem("drink-measurements", measurements); 
        localStorage.setItem("drink-ingredients", ingredients);  
        localStorage.setItem("drink-instructions", instructions);  
        localStorage.setItem("drink-image", imageEl.src);  

      }


//Get data from random cocktail API
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

chooseBtnEl.addEventListener("click", getChooseCocktail);
// console.log(chooseBtnEl);
