var shuffleBtnEl = document.querySelector("#shuffle-btn");
var chooseBtnEl = document.querySelector("#choose-btn");
var recipeCardEl = document.querySelector("#recipe-card");
var liquorOptionsEl = document.querySelector("#liquor-options");
var formEl = document.getElementById("drink-form");
var recipeDisplay = document.getElementById("recipe-container");
var liquorType = ["whisky", "vodka", "rum", "tequila", "gin", "brandy" ];


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

