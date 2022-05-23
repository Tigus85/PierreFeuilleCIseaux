

let player; // variable qui deterninera le resultat du joueur

let stone = document.getElementById('stone'); // recuperer le bouton Pierre
let paper = document.getElementById('paper'); // recuperer le bouton Papier
let chisel = document.getElementById('chisel'); // recuperer le bouton Ciseaux
let result = document.getElementById('result'); // recuperer l'affichage resultat

let selectPlayer =  document.getElementById('selectPlayer');
let selectComputer = document.getElementById('selectComputer');


let win; // variable qui stockera le vainqueur 


// fonction qui determine le gagnant 
function winner( winPlayer , winComputer){

if(winPlayer === "stone" && winComputer === "stone"){
  win = "EGALITER";
}
if(winPlayer === "stone" && winComputer === "paper"){
  win = "PERDU";
}
if(winPlayer === "stone" && winComputer === "chisel"){
  win = "GAGNER";
}
if(winPlayer === "paper" && winComputer === "stone"){
  win =  "GAGNER";
}
if(winPlayer === "paper" && winComputer === "paper"){
  win = "EGALITER";
}
if(winPlayer === "paper" && winComputer === "chisel"){
  win = "PERDU";
}
if(winPlayer === "chisel" && winComputer === "stone"){
  win = "PERDU";
}
if(winPlayer === "chisel" && winComputer === "paper"){
  win = "GAGNER";
}
if(winPlayer === "chisel" && winComputer === "chisel"){
  win = "EGALITER";
}
return win;

}


// fonction qui determine le choix de l'ordinateur 

function computeur(){
  let random =  Math.floor(Math.random() * 3)

  if(random === 0 ){
    random = "paper";
    selectComputer.innerHTML =  "<i class='fa-solid fa-hand'></i>";
  }
  if(random === 1){
    random = "stone";
    selectComputer.innerHTML =  "<i class='fa-solid fa-hand-fist'></i>";
  }
  if(random === 2){
    random = "chisel";
    selectComputer.innerHTML =  "<i class='fa-solid fa-hand-scissors'></i>";
  }
  
  return random
}

// click sur le bonton pierre 
stone.addEventListener('click', function(){
  player = "stone";
  console.log(player);
  winner(player, computeur() );
  result.innerHTML = win;
  selectPlayer.innerHTML = "<i class='fa-solid fa-hand-fist'></i>"
} )

// click sur le bonton ciseaux  
chisel.addEventListener('click', function(){
  player = "chisel";
  console.log(player);
  winner(player, computeur() );
  result.innerHTML = win;
  selectPlayer.innerHTML = "<i class='fa-solid fa-hand-scissors'></i>"
} )

// click sur le bonton papier  
paper.addEventListener('click', function(){
  player = "paper";
  console.log(player);
  winner(player, computeur() );
  result.innerHTML = win;
  selectPlayer.innerHTML = "<i class='fa-solid fa-hand'></i>"
} )
