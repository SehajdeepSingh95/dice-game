let dice1=Math.floor(Math.random()*6)+1;
let diceImage1= `dice${dice1}.png`;

let dice2=Math.floor(Math.random()*6)+1;
let diceImage2= `dice${dice2}.png`;

let imgSource1 = `images/dice${dice1}.png`;
let imgSource2 = `images/dice${dice2}.png`;


document.querySelector(".img1").setAttribute("src",imgSource1);
document.querySelector(".img2").setAttribute("src",imgSource2);


let result;

if (dice1>dice2){
    result=`player 1 Wins!`;
}
else if (dice1<dice2){
    result=`player 2 Wins!`;
}

else{
    result=`Draw!`;
}

document.querySelector("h1").textContent=result;

