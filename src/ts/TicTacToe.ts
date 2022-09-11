// Global VARS
var difficultyWindowActive:boolean = false;
var difficultyActive:number = 1;

var settingWindowActive:boolean = false;

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

//setting Stuff
function settingMenuActive(){

   if(settingWindowActive) settingWindowActive = false;
   else if(!settingWindowActive) settingWindowActive = true;

   let settingMenu = document.getElementById("setting");
   let settingIco = document.getElementById("settingIco");
   let settingLabel = document.getElementById("settingLabel");
   let settingOptions = document.getElementById("settingOptions");

   settingMenu?.classList.toggle("settingBoxOpen");
   settingIco?.classList.toggle("settingIcoOpen");
   settingLabel?.classList.toggle("hide");
   settingOptions?.classList.toggle("hide");



}

//TicTacToe Stuff

var counter:number = 0;
var difficulty:number = difficultyActive;
var tField:number[] = new Array(0,0,0,0,0,0,0,0,0,0);

function tKlick(sender:Element){
   
   
   if(tField[sender.id] == 0) {
      tField[sender.id] = 1;
      createSVG(true, sender);
   }
   
   console.log(tField);
}


function createSVG(type:boolean , sender){
   let linkCircle = "./svg/circle.svg#circle";
   let linkCross = "./svg/cross.svg#crossSVG1";
   let link:string = "http://www.w3.org/2000/svg";

   let svg = document.createElementNS(link, "svg");
   let use = document.createElementNS(link, "use");

   if(type) use.setAttribute('href', linkCircle);
   else if(!type) use.setAttribute('href', linkCross);

   use.setAttribute('href', linkCross);
   svg.setAttribute('viewBox', '0 0 100 100' );
   svg.appendChild(use);

   document.getElementById(sender.id).appendChild(svg);
}