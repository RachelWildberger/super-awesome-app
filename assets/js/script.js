var shuffleBtnEl = document.getElementById("shuffle-btn");
var chooseBtnEl = document.querySelector("#choose-btn");
var recipeCardEl = document.querySelector("#recipe-card");
var liquorOptionsEl = document.querySelector("#liquor-options");
var formEl = document.getElementById("drink-form");
var recipeDisplay = document.getElementById("recipe-container");
var liquorType = ["whisky", "vodka", "rum", "tequila", "gin", "brandy"];

var displayCocktailData = function (data) {

    var theCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=';

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

var getRandom = function (data) {

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

var displayRandom = function (data) {

    // var imageURL = `https://www.thecocktaildb.com/images/media/drink/${image}.jpg`

    // var ingredientsList = ["strIngredient1", "strIngredient2", "strIngredient3", "strIngredient4", "strIngredient5",
    //     "strIngredient6", "strIngredient7", "strIngredient8", "strIngredient9", "strIngredient10", "strIngredient11",
    //     "strIngredient12", "strIngredient13", "strIngredient14", "strIngredient15"];

    var ingredientsEl = document.getElementById("ingredients");
    // for (var i = 0; i < ingredientsList.length; i++) {
    //     console.log(ingredientsList[i]);

        var cocktailNameEl = document.getElementById("cocktail-name");
        var instructionsEl = document.getElementById("instructions");
        // var imageEl = document.getElementById("image");

        var name = data.drinks[0].strDrink;
        var ingredients = data.drinks[0].strIngredient1;
        var instructions = data.drinks[0].strInstructions;
        // var image = data.drinks[0].strDrinkThumb;

        cocktailNameEl.textContent = `${name}`;
        ingredientsEl.textContent = `Ingredients: ${ingredients}`;
        instructionsEl.textContent = `Instructions: ${instructions}`;
        // imageEl.textContent = '${image}';
    // }

    console.log("Random drink!", data);

}

// function clickBtn(event){
//     console.log('hello');
// }

shuffleBtnEl.addEventListener("click", getRandom);
console.log(shuffleBtnEl);
//getRandom();


// var recipeIngredients = Obj.entries(recipes);
// var ingredients = [];

//  for (var i = 0; i < recipeIngredients.length; i++) {
//    if(recipeIngredients[i][0].includes('ing')) {
//         ingredients.push(recipeIndredients[i][1])
//    }
//  }




















