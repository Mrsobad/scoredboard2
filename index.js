
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
home = 0;
guest = 0;

// Home scoring
function homeOnePoint(){
    let score = home += 1;
    homeScore.textContent = score;
}
function homeTwoPoint(){
     let score = home += 2;
    homeScore.textContent = score;
}
function homeThreePoint(){
     let score = home += 3;
    homeScore.textContent = score;
}

//Guest scoring
function guestOnePoint(){
    let score = guest += 1;
    guestScore.textContent = score;
}
function guestTwoPoint(){
    let score = guest += 2;
    guestScore.textContent = score;
}
function guestThreePoint(){
    let score = guest += 3;
    guestScore.textContent = score;
}

//New Game
function newGame(){
    home = 0;
    guest = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;   
}