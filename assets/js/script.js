var shuffleBtnEl = document.querySelector("#shuffle-btn");
var chooseBtnEl = document.querySelector("#choose-btn");
var recipeCardEl = document.querySelector("#recipe-card");
var liquorOptionsEl = document.querySelector("#liquor-options");
var formEl = document.getElementById("drink-form");
var recipeDisplay = document.getElementById("recipe-container");
var liquorType = ["whisky", "vodka", "rum", "tequila", "gin", "brandy"];


var displayCocktailData = function (data) {

    var theCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' ;

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

    // var liquorType = "rum";
    var theCocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${liquorType}`;

    fetch(theCocktailUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
};
;

var getRandom = function (data) {

    // var liquorType = "rum";
    var theRandomUrl = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

    fetch(theRandomUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayRandom(data);
        })
        .catch(function (error) {
            alert('Unable to connect to Cocktail API');
          });
};
;

 var displayRandom = function(data) {

    var cocktailNameEl = document.getElementById("cocktail-name");
    var ingredientsEl = document.getElementById("ingredients");
    var instructionsEl = document.getElementById("instructions");
    var imageEl = document.getElementById("image");

    var name = data.drinks[0].strDrink;
    var ingredients = data.drinks[0].strIngredient1;
    var instructions = data.drinks[0].strInstructions;
    var image = data.drinks[0].strDrinkThumb;


    cocktailNameEl.textContent = `${name}`;
    ingredientsEl.textContent = `${ingredients}`;
    instructionsEl.textContent = `${instructions}`;
    imageEl.textContent = `${image}`;

    console.log("Random drink!", data);
    
}
    
