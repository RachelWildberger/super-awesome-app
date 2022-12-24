var shuffleBtnEl = document.getElementById("shuffle-btn");
var chooseBtnEl = document.getElementById("choose-btn");
var recipeCardEl = document.querySelector("#recipe-card");
var newCocktailBtnEl = document.getElementById("new-cocktail");
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
            // displayMeal(data);
            console.log(data);
        })

        .catch(function (error) {
            alert('Unable to connect to Meal API');
        });

};

//Display the meal information 

//*Hollie this is the block I need you to work on; using the meal API above to define where the 
//data is coming from & changing names of var's & ID tags(we will need to create these in HTML if the 
//teammates have not done this yet this can now resemble the recipe card we have) 
//
// var displayMeal = function (data) {

//     var recipe = data.drinks[0];

//     var recipeIngredients = Object.entries(recipe);
//     var ingredients = [];

//     for (var i = 0; i < recipeIngredients.length; i++) {
//         if (recipeIngredients[i][0].includes("strIngredient") && recipeIngredients[i][1]) {
//             ingredients.push(recipeIngredients[i][1])
//         }
//     }
    

//     var ingredientsEl = document.getElementById("ingredients");
//     var cocktailNameEl = document.getElementById("cocktail-name");
//     var instructionsEl = document.getElementById("instructions");
//     // var imageEl = document.getElementById("image");

//     var name = data.drinks[0].strDrink;
//     var instructions = data.drinks[0].strInstructions;
//     // var image = data.drinks[0].strDrinkThumb;

//     cocktailNameEl.textContent = `${name}`;
//     ingredientsEl.textContent = `Ingredients: ${ingredients}`;
//     instructionsEl.textContent = `Instructions: ${instructions}`;
//     // imageEl.innerHTML = `${image}`;
    
//     console.log( data);

// }

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
    // var imageEl = document.getElementById("image");

    var name = data.drinks[0].strDrink;
    var instructions = data.drinks[0].strInstructions;
    // var image = data.drinks[0].strDrinkThumb;

    cocktailNameEl.textContent = `${name}`;
    ingredientsEl.textContent = `Ingredients: ${ingredients}`;
    instructionsEl.textContent = `Instructions: ${instructions}`;
    // imageEl.innerHTML = `${image}`;
    
    console.log( data);


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


// chooseBtnEl.addEventListener("click", getCocktail);
// console.log(chooseBtnEl);

shuffleBtnEl.addEventListener("click", getCocktail);
// console.log(shuffleBtnEl);

// newCocktailBtnEl.addEventListener("click", getCocktail);
// console.log(newCocktailBtnEl);

