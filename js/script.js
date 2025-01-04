console.log("tictactoe");
let music = new Audio("music.mp3");
let Audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";

const changeturn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=> {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            Audioturn.play();
            checkWin();
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
        }
    })
})