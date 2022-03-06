let startButton = document.querySelector(".start")
let resetButton = document.querySelector(".reset")
let newButton = document.querySelector(".new")
console.log(resetButton)
let button = document.querySelectorAll(".cell")
console.log(button)
let turn = 1;
let input = document.querySelector("#init").value
console.log(input)
let init = input;
let player = init;
let score1 = document.querySelector(".score1")
score1.innerText = 0;
let score2 = document.querySelector(".score2")
score2.innerText = 0;
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let player1Name = document.querySelector(".player1")
let player2Name = document.querySelector(".player2")
let gameover = document.querySelector(".game-over")

let cell1 = document.querySelector("#cell1")
let cell2 = document.querySelector("#cell2")
let cell3 = document.querySelector("#cell3")
let cell4 = document.querySelector("#cell4")
let cell5 = document.querySelector("#cell5")
let cell6 = document.querySelector("#cell6")
let cell7 = document.querySelector("#cell7")
let cell8 = document.querySelector("#cell8")
let cell9 = document.querySelector("#cell9")
console.log(button)
const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]




function playGame(event) {
    console.log(turn)
    console.log(event)
    if (turn % 2 != 0) {
        player = init;
        event.target.innerText = player;
        document.querySelector(".turn").innerText = player
        turn++;
        checkWin();
    }
    else {
        if (player = "X") {
            player = "O"
        }
        else {
            player = "X"
        }
        event.target.innerText = player;
        document.querySelector(".turn").innerText = player
        turn++
        checkWin();
    }
}


function checkWin() {
    const array = Array.from(button).map(element => element.innerText)
    const testArr = winningCombo.map(element => element.map(x => array[x]))

    // console.log(testArr)

    function testCombo(arr) {
        if (arr.includes("")) {
            return false
        }
        return arr[0] == [arr[1]] && arr[1] == arr[2]
    }

    const resultArr = testArr.map(element => testCombo(element))
    console.log(resultArr)

    if (resultArr.some((element) => element === true)) {
        // (((cell1.innerText == cell2.innerText && cell2.innerText== cell3.innerText) && 
        //     cell1.innerText!="" && cell2.innerText!="" && cell3.innerText!="")|| 
        //     ((cell4.innerText == cell5.innerText && cell5.innerText == cell6.innerText) && 
        //     cell4.innerText!="" && cell5.innerText!="" && cell6.innerText!="") || 
        //     ((cell7.innerText == cell8.innerText && cell8.innerText == cell9.innerText) &&
        //     cell7.innerText!="" && cell8.innerText!="" && cell9.innerText!="") ||
        //     ((cell1.innerText == cell4.innerText && cell4.innerText == cell7.innerText) && 
        //     cell1.innerText!="" && cell4.innerText!="" && cell7.innerText!="") ||
        //     ((cell2.innerText == cell5.innerText && cell5.innerText == cell8.innerText) &&
        //     cell2.innerText!="" && cell5.innerText!="" && cell8.innerText!="") ||
        //     ((cell3.innerText == cell6.innerText && cell6.innerText == cell9.innerText) && 
        //     cell3.innerText!="" && cell6.innerText!="" && cell9.innerText!="") ||
        //     ((cell1.innerText == cell5.innerText && cell5.innerText == cell9.innerText) &&
        //     cell1.innerText!="" && cell5.innerText!="" && cell9.innerText!="") ||
        //     ((cell3.innerText == cell5.innerText && cell5.innerText == cell7.innerText) &&
        //     cell3.innerText!="" && cell5.innerText!="" && cell7.innerText!="")) 
        if (player == init) {
            setTimeout(function () {
                console.log(gameover)
                gameover.innerText = `${player1Name.innerText} wins!`
                gameover.style.display = "block"
            }, 200)
            console.log(player1.value)
            console.log(gameover.innerText)
            score1.innerText = (Number(score1.innerText) + 1).toString();
            resetButton.style.display = "inline";
            newButton.style.display = "inline";
        }
        else {
            setTimeout(function () {
                gameover.innerText = `${player2Name.innerText} wins!`
                gameover.style.display = "block"
            }, 200)
            score2.innerText = (Number(score2.innerText) + 1).toString();
            resetButton.style.display = "inline";
            newButton.style.display = "inline";
        }
    }
    else if (turn > 9) {
        setTimeout(function () {
            gameover.innerText = "It's a Tie"
            gameover.style.display = "block"
        }, 200)
        resetButton.style.display = "inline";
        newButton.style.display = "inline";
    }
}

function resetGame() {
    button.forEach(element => {
        element.innerText = ""
    })
    turn = 1;
    player = "init";
    resetButton.style.display = "none";
    score1.innerText = 0;
    score2.innerText = 0;
    gameover.style.display = "none"
}

function newGame() {
    button.forEach(element => {
        element.innerText = ""
    })
    turn = 1;
    player = "init";
    newButton.style.display = "none";
    gameover.style.display = "none"

}

startButton.addEventListener("click", (event) => {
    event.preventDefault();
    player1Name.innerText = player1.value
    player2Name.innerText = player2.value
    if (player1Name.innerText == "") {
        player1Name.innerText = "Player 1"
    }
    if (player2Name.innerText == "") {
        player2Name.innerText = "Player 2"
    }
    document.querySelector(".turns").style.display = "block";
    document.querySelector(".score").style.display = "block";
    document.querySelector(".turn").innerText = player;
})

button.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        // console.log(event)
        if (event.target.innerText == "X" || event.target.innerText == "O") {
            alert("This cell is occupied")
        }
        else {
            playGame(event)
        }
    })
})



resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetGame();
    newButton.style.display = "none";
})

newButton.addEventListener("click", (event) => {
    event.preventDefault();
    newGame();
    resetButton.style.display = "none";
})

