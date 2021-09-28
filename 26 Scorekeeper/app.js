const rangeInput = document.querySelector("#rangeInput")
const inputValueDisplay = document.querySelector("#inputValueDisplay")
const resetBtn = document.querySelector("#resetBtn")
const deuce = document.querySelector("#deuce")

deuce.classList.add("deuceHide")

let player1 = {
    score : 0,
    button : document.querySelector("#playerOneBtn"),
    display : document.querySelector("#playerOneScore")
}

let player2 = {
    score : 0,
    button : document.querySelector("#playerTwoBtn"),
    display : document.querySelector("#playerTwoScore")
}

const players = [player1, player2]

inputValueDisplay.innerText = rangeInput.value;
let inProgress = true;
let winAmt = parseInt(rangeInput.value);

rangeInput.addEventListener("input", (e) =>{
    inputValueDisplay.innerText = rangeInput.value;
    winAmt = parseInt(rangeInput.value);

    resetValues();
})

playerOneBtn.addEventListener("click", (e) =>{
    updateValues(player1, player2);
})

playerTwoBtn.addEventListener("click", (e) =>{
    updateValues(player2, player1);
})

resetBtn.addEventListener("click", (e) =>{
    resetValues();
})


const checkWinner = (player, otherPlayer) => {
    if(player.score >= winAmt){
        if(player.score - otherPlayer.score < 2){
            console.log("here");
            winAmt += 1;
            deuce.innerText = `DEUCE: Score ${winAmt} to win!`;
            deuce.classList.remove("deuceHide");
            deuce.classList.add("deuceDisplay");
        }
        else{
            player.display.style.color = "green"
            otherPlayer.display.style.color = "red"
            inProgress = false;
            player.button.disabled = true;
            otherPlayer.button.disabled = true;
        }
    }
}

const updateValues = (player, otherPlayer) => {
    player.score += 1;
    if(inProgress){
        for(let player of players){
            player.display.innerHTML = player.score
        }
        checkWinner(player, otherPlayer);
    }
}

const resetValues = () => {
    for(let player of players){
        player.score = 0;
        player.display.innerHTML = player.score;
        player.display.style.color = ""
        player.button.disabled = false;
    }
    deuce.classList.add("deuceHide");
    deuce.classList.remove("deuceDisplay");
    winAmt = parseInt(rangeInput.value);
    inProgress = true;
}