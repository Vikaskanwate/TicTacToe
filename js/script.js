console.log("tictactoe");
let music = new Audio("music.mp3");
let Audioturn = new Audio("ting.mp3");
let isgameover = new Audio("gameover.mp3");
let turn = "X";


const changeturn = () => {
    return turn === "0" ? "X" : "0";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.getElementsByClassName('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true
            document.querySelector('.col-12').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "20vw";
            setTimeout(()=>{
                document.querySelector('.col-12').getElementsByTagName('img')[0].style.width = '0px';
            },3000)
            boxDis();
        }
    })
}


let boxes = document.getElementsByClassName("box");
function boxDis(){
    Array.from(boxes).forEach(e =>{
        e.style.pointerEvents = 'none';
    })
}
function boxAble(){
    Array.from(boxes).forEach(e =>{
        e.style.pointerEvents = 'auto';
        e.style.cursor = 'pointer';
    })
}
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

let btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for" + turn;
    boxAble();
})