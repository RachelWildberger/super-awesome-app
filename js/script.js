const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
		'X-RapidAPI-Host': 'dice-roll.p.rapidapi.com'
	}
};
fetch('https://dice-roll.p.rapidapi.com/roll/4/d/20', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    var response = diceRoll;

for(var i = 0; i < diceRoll; i++){
    if(diceRoll === 1){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        };
        
        fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    else if(diceRoll === 2){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        };
        
        fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=whiskey', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    else if(diceRoll === 3){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        };
        
        fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=gin', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    else if(diceRoll === 4){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        };
        
        fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=tequila', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    else if(diceRoll === 5){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        };
        
        fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=rum', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    else if(diceRoll === 6){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b0aeaeddd5mshfa1b33bb190ae12p12bfdfjsnb187015f6fd3',
                'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        };
        
        fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=brandy', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    else{
        return "Not a listed liqour."
    }
}