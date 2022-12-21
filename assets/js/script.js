var shuffleBtnEl = document.querySelector("#shuffle-btn");
var chooseBtnEl = document.querySelector("#choose-btn");
var recipeCardEl = document.querySelector("#recipe-card");
var apiKey = 1;


// // function userDropdown() {
// //     var liquorOption = document.getElementById("liquor-options").value;
// //     document.getElementById("demo").innerHTML = liquorOption;
// // }

// var buttonClickHandler = function (event) {
//     // What is `event.target` referencing?
//     // TODO: Write your answer here
//     var liquor = event.target.getAttribute("choose-btn");

//     // Why is this `if` block in place?
//     // TODO: Write your answer here
//     if (liquor) {
//         getUserChoice(liquor);

//         repoContainerEl.value = '';
//     }
// };

var displayCocktailData = function (data) {

    var theCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + apiKey;

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

    var theCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + liquorType + apiKey;

    fetch(theCocktailUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
};
;


//   var userOptionsEl= document.getElementById("liquor-options");

//   var displayCocktails = function (cocktail, searchTerm) {

//     recipeCardEl.value = "No drinks found.";
//     if (select.whisky === "SELECT") {
//       console.log("whisky has been selected");
//       } else {
//         console.log("liquor has not been selected");
//       }
//       return;
//     }