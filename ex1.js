alert("lets start by generating the number!");
const min = prompt("what's the lowest number ?",0);
const max = prompt("what's the Max number ?",10);
let Number = randomNumber(min, max);
const diff = prompt("what level of difficulty you can handle? ",3);

let gameStatus = false;
let restart = document.querySelectorAll(".restart");
restart[0].addEventListener("click", restartGame);
const home = document.querySelectorAll(".home");
home[0].addEventListener("click", function () {
    window.location = "Game.html";
});
const submit = document.querySelector(".submit");
submit.addEventListener("click", submitAttempt);
let attemptsLeft = diff;
let attemptsUsed = 0;
let attemptsLeftHtml = document.getElementById("counter");
let attemptsUsedHtml = document.getElementById("lastnum");
let result = document.getElementById("result");
setLevel(diff);
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function setLevel(diff) {
    attemptsLeftHtml.innerHTML = diff;
    attemptsUsedHtml.innerHTML = "No entry";
}

function restartGame() {
    window.location = window.location;

}

function submitAttempt() {

    if (gameStatus == true) {
        alert("You already got it right ");
        document.querySelector(".btn-success").style.backgroundColor = "Gray";
        changeButtons();
    }
    else if ((attemptsLeft > 0) && (gameStatus == false)) {
        let value = promptCheck("What's your Guess?")
        attemptsLeft--;
        attemptsUsed = value;
        attemptsLeftHtml.innerHTML = attemptsLeft;
        attemptsUsedHtml.innerHTML = attemptsUsed;
        if (value == Number) {
            alert("You won");
            document.getElementById("result").innerHTML = "Great work! You won!";
            gameStatus = true;
        }
        else {
            alert("Wrong Guess better luck next time!");
            document.getElementById("result").innerHTML = "Don't give up! try another guess ";
        }
    }
    else {
        alert("You used all of your attempts. Better luck next time ");
        var text = "You lost! The number was : ";
        document.getElementById("result").innerHTML = text + Number;
        document.querySelector(".btn-success").style.backgroundColor = "Gray";
        changeButtons();
    }
}
function changeButtons() {
    document.querySelector("#buttons2").removeAttribute("hidden");
    document.querySelector("#buttons1").toggleAttribute("hidden");
    index = 1;
    restart[1].addEventListener("click", restartGame);
    home[1].addEventListener("click", function () {
        window.location = "Game.html";});
}
function promptCheck(string){
    do{
        var answer= prompt(string);
    }while(isNaN(answer))
    return(answer);    
}

