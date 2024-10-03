let randomNumber1 = 0;
let randomNumber2 = 0;
let dicePlayer1 = document.querySelector(".img1");
let dicePlayer2 = document.querySelector(".img2");
let winner = document.getElementById("winner");
const btnRefresh = document.getElementById("btn-refresh");


btnRefresh.addEventListener("click", raffleDices);


function raffleDices() {
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let dicePathChange1 = "./assets/images/dice" + randomNumber1 + ".png";
    let dicePathChange2 = "./assets/images/dice" + randomNumber2 + ".png";

    dicePlayer1.setAttribute("src", dicePathChange1);
    dicePlayer2.setAttribute("src", dicePathChange2);
    decideWinner();
}

function decideWinner() {
    if(randomNumber1 > randomNumber2) { 
        winner.textContent = "🚩 Player 1 venceu!";
    }
    else if(randomNumber2 > randomNumber1) {
        winner.textContent = "Player 2 venceu! 🚩";
    }
    else {
        winner.textContent = "Empatou!";
    }
}
