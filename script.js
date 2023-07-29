let firstInput = document.querySelector('.first-input');
let secondInput = document.querySelector('.second-input');
let threeInput = document.querySelector('.three-input');
let fourInput = document.querySelector('.four-input');

let firstButton = document.querySelector('.first-button');
let secondButton = document.querySelector('.second-button');
let threeButton = document.querySelector('.three-button');
let fourButton = document.querySelector('.four-button');

let gameTitleOne = document.querySelector('.game-title');

let error = document.querySelector('.error');
let errorTwo = document.querySelector('.error-two');
let errorThree = document.querySelector('.error-three');
let errorFour = document.querySelector('.error-four');

firstButton.addEventListener('click', function(){
    
    if(firstInput.value == ''){
        error.style.display = "block";
    }else{
        
        
        firstInput.value;
        error.style.display = "none";
        
        secondInput.style.display = "inline";
        secondButton.style.display = "inline";
        
        firstInput.style.display = "none";
        firstButton.style.display = "none";
        gameTitleOne.innerHTML = "["+ firstInput.value +"]"+ " You are player one ";
    }
})

secondButton.addEventListener('click', function(){
    if(secondInput.value == ''){
        errorTwo.innerHTML = firstInput.value + ' Please give a number';
        errorTwo.style.display = "block";  

        
    }else{
        
        secondInput.value
        secondInput.style.display = "none";
        secondButton.style.display = "none";
        
        threeInput.style.display = "inline";
        threeButton.style.display = "inline";
        
        errorTwo.style.display = "none";
        gameTitleOne.innerHTML = " You are player Two ";
    }
})

threeButton.addEventListener('click', function(){
    if(threeInput.value == ''){
        errorThree.innerHTML = 'Please enter your name';
        errorThree.style.display = "block";  
    }else{

        threeInput.value
        threeInput.style.display = "none"
        threeButton.style.display = "none"
        
        fourInput.style.display = "inline"
        fourButton.style.display = "inline"
        errorThree.style.display = "none";
        gameTitleOne.innerHTML = threeInput.value + " Please Guess a number" + "<br>" + "You have to 5 Chance";
    }
})

fourButton.addEventListener('click', function(){

    if(fourInput.value == ''){
        errorFour.innerHTML = threeInput.value + ' Please give a number';
        errorFour.style.display = "block"
        
    }else{
        fourInput.value
        errorFour.style.display = "none"

    }
})
