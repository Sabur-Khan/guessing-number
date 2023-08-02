let firstInput = document.querySelector('.first-input');
let secondInput = document.querySelector('.second-input');
let threeInput = document.querySelector('.three-input');
let fourInput = document.querySelector('.four-input');

let banner = document.querySelector('.banner')

let winner = document.querySelector('.winner')

let firstButton = document.querySelector('.first-button');
let secondButton = document.querySelector('.second-button');
let threeButton = document.querySelector('.three-button');
let fourButton = document.querySelector('.four-button');

let gameTitleOne = document.querySelector('.game-title');
let gameTitleTwo = document.querySelector('.game-title-two');
let gameTitleThree = document.querySelector('.game-title-three');
let gameTitleFour = document.querySelector('.game-title-four');

let error = document.querySelector('.error');
let errorTwo = document.querySelector('.error-two');
let errorThree = document.querySelector('.error-three');
let errorFour = document.querySelector('.error-four');

firstButton.addEventListener('click', function(){
    if(firstInput.value == ''){
        error.innerHTML = "Please enter your name";
        error.style.display = "block";
    }else{
        if(firstInput.value > 0){
            error.innerHTML = "Wrong input";
            error.style.display = "block";
        }else{
            firstButton.style.display = "none";
            firstInput.style.display = "none";
            error.style.display = "none";
            gameTitleOne.style.display = "none";
            secondInput.style.display = "inline";
            secondButton.style.display = "inline";
            gameTitleTwo.style.display = "block";
            gameTitleTwo.innerHTML = firstInput.value +"<br>"+"please guess a number";
            
        }
    }
})

secondButton.addEventListener('click', function(){
    if(secondInput.value == ''){

        errorTwo.innerHTML = "Input a number";
        errorTwo.style.display = "block";
        
    }else{
        if(isNaN(secondInput.value))
            errorTwo.innerHTML = "Wrong input";

        else if(secondInput.value < 1 ){
            errorTwo.innerHTML = "too low number";

        }else if(secondInput.value > 10){
            errorTwo.innerHTML = "Too high number";
        }
        else{
            secondButton.style.display = "none";
            secondInput.style.display = "none";
            errorTwo.style.display = "none";
            gameTitleTwo.style.display = "none";

            threeInput.style.display = "inline";
            threeButton.style.display = "inline";
            gameTitleThree.style.display = "block";
            gameTitleThree.innerHTML = "Hey! you are a player two";
        }
    }
})

threeButton.addEventListener('click', function() {
    if(threeInput.value == ''){
        errorThree.innerHTML = "Please enter your name";
        errorThree.style.display = "block";
    }else{
        if (threeInput.value > 0) {
            errorThree.innerHTML = "Wrong input!";
        }else{
            threeInput.style.display = "none";
            threeButton.style.display = "none";
            errorThree.style.display = "none";
            gameTitleThree.style.display = "none";

            fourInput.style.display = "inline";
            fourButton.style.display = "inline";
            gameTitleFour.style.display = "block"
            gameTitleFour.innerHTML = threeInput.value+ "<br>" +"Please guess a number";
        }
    }
})

fourButton.addEventListener('click', function(){
    if(fourInput.value == ''){
        errorFour.innerHTML = "Fill in the box";
        errorFour.style.display = "block";
    }else{
        if(isNaN(fourInput.value)){
            errorFour.innerHTML = "Please input a number";
        }else if(fourInput.value < 1 ){
            errorFour.innerHTML = "too low number!";
        }else if(fourInput.value > 10){
            errorFour.innerHTML = "Too high number!";
        }else{
            fourInput.style.display = "none";
            fourButton.style.display = "none";
            gameTitleFour.style.display = "none";
            errorFour.style.display = "none";
            
            if (secondInput.value == fourInput.value) {
                winner.innerHTML = threeInput.value + "You are winner";
            }else{
                banner.style.display = "block"
                winner.innerHTML = "Game is over" + "<br>" + firstInput.value + " You are winner";
            }
        }
    }
})