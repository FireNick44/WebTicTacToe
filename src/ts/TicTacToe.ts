// Global VARS
var difficultyWindowActive:boolean = false;
var difficultyActive:number = 1;

// ElementsById
let easyBox = document.getElementById("easyBox");
let normalBox = document.getElementById("normalBox");
let hardBox = document.getElementById("hardBox");
let impossibleBox = document.getElementById("impossibleBox");
let twoPlayerBox = document.getElementById("twoPlayerBox");

//difficulty Stuff
function difficultyMenuActive(){
   
   if(difficultyWindowActive) difficultyWindowActive = false;
   else if(!difficultyWindowActive) difficultyWindowActive = true;

   if(difficultyWindowActive){
      setDifficultyMenuActive(easyBox);
      setDifficultyMenuActive(normalBox);
      setDifficultyMenuActive(hardBox);
      setDifficultyMenuActive(impossibleBox);
      setDifficultyMenuActive(twoPlayerBox);
   
      easyBox?.classList.remove('top1')
      normalBox?.classList.remove('top1')
      hardBox?.classList.remove('top1')
      impossibleBox?.classList.remove('top1')
      twoPlayerBox?.classList.remove('top1')
      
      setDifficultyArrow();
   }

   delDifficultyArrow();
}

function setDifficultyMenuActive(value){
   if(value?.classList.contains('hide')) value.classList.remove('hide');
}

function setDifficultyMenuInactive(value){
   if(!value?.classList.contains('hide')) value.classList.add('hide');
}


function difficultySetActive(value){

   difficultyActive = value; //without validation !!!

   if(difficultyActive != 1) setDifficultyMenuInactive(easyBox);
   if(difficultyActive != 2) setDifficultyMenuInactive(normalBox);
   if(difficultyActive != 3) setDifficultyMenuInactive(hardBox);
   if(difficultyActive != 4) setDifficultyMenuInactive(impossibleBox);
   if(difficultyActive != 5) setDifficultyMenuInactive(twoPlayerBox);

   easyBox?.classList.add('top1')
   normalBox?.classList.add('top1')
   hardBox?.classList.add('top1')
   impossibleBox?.classList.add('top1')
   twoPlayerBox?.classList.add('top1')
}

function setDifficultyArrow(){
   let tmp = document.getElementById("difficultyIco")
   if(difficultyActive == 2) tmp?.classList.add('top2');
   else if(difficultyActive == 3) tmp?.classList.add('top3');
   else if(difficultyActive == 4) tmp?.classList.add('top4');
   else if(difficultyActive == 5) tmp?.classList.add('top5');
}

function delDifficultyArrow(){
   let tmp = document.getElementById("difficultyIco")
   if(difficultyActive == 2) tmp?.classList.remove('top2');
   else if(difficultyActive == 3) tmp?.classList.remove('top3');
   else if(difficultyActive == 4) tmp?.classList.remove('top4');
   else if(difficultyActive == 5) tmp?.classList.remove('top5');
}

//TicTacToe Stuff
