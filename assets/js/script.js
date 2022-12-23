var shuffleBtnEl = document.querySelector("#shuffle-btn");
var chooseBtnEl = document.querySelector("#choose-btn");
var recipeCardEl = document.querySelector("#recipe-card");
var liquorOptionsEl = document.querySelector("#liquor-options");
var formEl = document.getElementById("drink-form");
var recipeDisplay = document.getElementById("recipe-container");
var liquorType = ["whisky", "vodka", "rum", "tequila", "gin", "brandy"];


var displayCocktailData = function (data) {

    var theCocktailUrl = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

    fetch(theCocktailUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    getCocktail(data);
                });
            }
        })
        .catch(function (error) {
            alert('Unable to choose a cocktail.');
        });
};

var getCocktail = function (liquorType) {

    var liquorType = "gin";
    var theCocktailUrl = `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquorType}`;

    fetch(theCocktailUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
};

var getRandom = function (data) {

    var theRandomUrl = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

    fetch(theRandomUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayRandom(data);
        })
        // .catch(function (error) {
        //     alert('Unable to connect to Cocktail API');
        // });
};

var displayRandom = function (data) {

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

}





