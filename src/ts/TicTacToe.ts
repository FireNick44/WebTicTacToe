// Global VARS
var difficultyWindowActive: boolean = false;
var difficultyActive: number = 1;

var settingWindowActive: boolean = false;

// ElementsById
let easyBox = document.getElementById("easyBox");
let normalBox = document.getElementById("normalBox");
let impossibleBox = document.getElementById("impossibleBox");
let twoPlayer = document.getElementById("twoPlayer");

//difficulty Stuff
function difficultyMenuActive() {

   if (difficultyWindowActive) difficultyWindowActive = false;
   else if (!difficultyWindowActive) difficultyWindowActive = true;

   if (difficultyWindowActive) {
      setDifficultyMenuActive(easyBox);
      setDifficultyMenuActive(normalBox);
      setDifficultyMenuActive(impossibleBox);
      setDifficultyMenuActive(twoPlayer);

      easyBox?.classList.remove('top1')
      normalBox?.classList.remove('top1')
      impossibleBox?.classList.remove('top1')
      twoPlayer?.classList.remove('top1')

      setDifficultyArrow();
   }

   delDifficultyArrow();
}

function setDifficultyMenuActive(value) {
   if (value?.classList.contains('hide')) value.classList.remove('hide');
}

function setDifficultyMenuInactive(value) {
   if (!value?.classList.contains('hide')) value.classList.add('hide');
}

function difficultySetActive(value) {

   difficultyActive = value; //without validation !!!

   if (difficultyActive != 1) setDifficultyMenuInactive(easyBox);
   if (difficultyActive != 2) setDifficultyMenuInactive(normalBox);
   if (difficultyActive != 3) setDifficultyMenuInactive(impossibleBox);
   if (difficultyActive != 4) setDifficultyMenuInactive(twoPlayer);

   easyBox?.classList.add('top1')
   normalBox?.classList.add('top1')
   impossibleBox?.classList.add('top1')
   twoPlayer?.classList.add('top1')
}

function setDifficultyArrow() {
   let tmp = document.getElementById("difficultyIco")
   if (difficultyActive == 2) tmp?.classList.add('top2');
   else if (difficultyActive == 3) tmp?.classList.add('top3');
   else if (difficultyActive == 4) tmp?.classList.add('top4');
}

function delDifficultyArrow() {
   let tmp = document.getElementById("difficultyIco")
   if (difficultyActive == 2) tmp?.classList.remove('top2');
   else if (difficultyActive == 3) tmp?.classList.remove('top3');
   else if (difficultyActive == 4) tmp?.classList.remove('top4');
}

//setting Stuff
function settingMenuActive() {

   if (settingWindowActive) settingWindowActive = false;
   else if (!settingWindowActive) settingWindowActive = true;

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

var counter: number = 0;
var difficulty: number = difficultyActive;
var tField: number[] = new Array(5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var round: number = 0;

function tKlick(sender: Element) {

   if (tField[sender.id] == 0) {
      tField[sender.id] = 1;
      createSVG(false, sender.id);
      round++;
      if(difficulty != 4) turnAI();
      else turnPlayer();
   }
}


function createSVG(type: boolean, id) {
   let linkCircle = "./svg/circle.svg#circleSVG1";
   let linkCross = "./svg/cross.svg#crossSVG1";
   let link: string = "http://www.w3.org/2000/svg";

   let svg = document.createElementNS(link, "svg");
   let use = document.createElementNS(link, "use");

   if (type) use.setAttribute('href', linkCircle);
   else if (!type) use.setAttribute('href', linkCross);
   
   
   svg.setAttribute('viewBox', '0 0 100 100');
   svg.setAttribute('class', 'generatedSVG');
   svg.appendChild(use);
   
   document.getElementById(id).appendChild(svg);
}

function turnAI() {

   if (difficultyActive == 1) {

      let tmp = countLeftFields();
      let tmpId = getRandom(tmp[0])
      
      //console.log(tmp[1][tmpId + 1]);
      // console.log("tmp[1][tmpId]");
      // console.log(tmp);
      // console.log(tmp[1][(tmpId)]);
      
      createSVG(true, tmp[1][(tmpId)]);
      
      // console.log("tmpId AND STUFF");
      // console.log(tmpId);
      // console.log(tField[(tmpId)]);
      // console.log(tField);

      tField[tmp[1][(tmpId)]] = 1;

      //console.log(tField);
   }
}

function turnPlayer(){
   
}

function countLeftFields() {
   let counter = 0;
   let fieldCounter = 0;
   let fieldNumber = new Array();
   let returnArray = new Array();

   for (let field of tField) {
      if (field == 0) {
         counter++;
         fieldNumber.push(fieldCounter);
      }
      fieldCounter++
   };

   console.log("countLeftFields:");
   console.log(returnArray);

   returnArray.push(counter);
   returnArray.push(fieldNumber);

   return returnArray;
}


function getRandom(max) {
   return (Math.floor(Math.random() * max));

}

function findWinner() {
   
}

function clearField(){
   document.querySelectorAll(".generatedSVG").forEach(e => e.remove());
   tField = [5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}