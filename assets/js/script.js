// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
// 		'X-RapidAPI-Host': 'dice-roll.p.rapidapi.com'
// 	}
// };
// fetch('https://dice-roll.p.rapidapi.com/roll/4/d/20', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     var response = diceRoll;

// for(var i = 0; i < diceRoll; i++){
//     if(diceRoll === 1){
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
//                 'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//             }
//         };

//         fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//             .catch(err => console.error(err));
//     }
//     else if(diceRoll === 2){
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
//                 'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//             }
//         };

//         fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=whiskey', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//             .catch(err => console.error(err));
//     }
//     else if(diceRoll === 3){
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
//                 'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//             }
//         };

//         fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=gin', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//             .catch(err => console.error(err));
//     }
//     else if(diceRoll === 4){
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
//                 'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//             }
//         };

//         fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=tequila', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//             .catch(err => console.error(err));
//     }
//     else if(diceRoll === 5){
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
//                 'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//             }
//         };

//         fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=rum', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//             .catch(err => console.error(err));
//     }
//     else if(diceRoll === 6){
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
//                 'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//             }
//         };

//         fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=brandy', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//             .catch(err => console.error(err));
//     }
//     else{
//         return "Not a listed liqour."
//     }
// }

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