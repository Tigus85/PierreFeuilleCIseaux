

let player; // variable qui deterninera le resultat du joueur

let stone = document.getElementById('stone'); // recuperer le bouton Pierre
let paper = document.getElementById('paper'); // recuperer le bouton Papier
let chisel = document.getElementById('chisel'); // recuperer le bouton Ciseaux
let result = document.getElementById('result'); // recuperer l'affichage resultat


let win; // variable qui stockera le vainqueur 


// fonction qui determine le gagnant 
function winner( winPlayer , winComputer){

if(winPlayer === "stone" && winComputer === "stone"){
  win = "«Joueur : Pierre / Ordinateur : Pierre ! EGALITER »";
}
if(winPlayer === "stone" && winComputer === "paper"){
  win = " « Joueur : Pierre / Ordinateur : Papier  ! PERDU »";
}
if(winPlayer === "stone" && winComputer === "chisel"){
  win = " « Joueur : Pierre / Ordinateur : Ciseaux  ! GAGNER »";
}
if(winPlayer === "paper" && winComputer === "stone"){
  win =  " « Joueur : Papier / Ordinateur : Pierre  ! GAGNER »";
}
if(winPlayer === "paper" && winComputer === "paper"){
  win = "«Joueur : Papier / Ordinateur : Papier ! EGALITER »";
}
if(winPlayer === "paper" && winComputer === "chisel"){
  win = " « Joueur : Papier / Ordinateur : Ciseaux  ! PERDU »";
}
if(winPlayer === "chisel" && winComputer === "stone"){
  win = " « Joueur : Ciseaux / Ordinateur : Pierre  ! PERDU »";
}
if(winPlayer === "chisel" && winComputer === "paper"){
  win = " « Joueur : Ciseaux / Ordinateur : Pierre  ! GAGNER »";
}
if(winPlayer === "chisel" && winComputer === "chisel"){
  win = "«Joueur : Ciseaux / Ordinateur : Ciseaux ! EGALITER »";
}
return win;

}


// fonction qui determine le choix de l'ordinateur 

function computeur(){
  let random =  Math.floor(Math.random() * 3)

  if(random === 0 ){
    random = "paper";
  }
  if(random === 1){
    random = "stone";
  }
  if(random === 2){
    random = "chisel"
  }
  return random
}

// click sur le bonton pierre 
stone.addEventListener('click', function(){
  player = "stone";
  console.log(player);
  winner(player, computeur() );
  result.innerHTML = win;
} )

// click sur le bonton ciseaux  
chisel.addEventListener('click', function(){
  player = "chisel";
  console.log(player);
  winner(player, computeur() );
  result.innerHTML = win;
} )

// click sur le bonton papier  
paper.addEventListener('click', function(){
  player = "paper";
  console.log(player);
  winner(player, computeur() );
  result.innerHTML = win;
} )
