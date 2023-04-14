"use strict";
// Global VARS
var difficultyWindowActive = false;
var difficultyActive = 1;
var settingWindowActive = false;
// ElementsById
let easyBox = document.getElementById("easyBox");
let normalBox = document.getElementById("normalBox");
let impossibleBox = document.getElementById("impossibleBox");
let twoPlayer = document.getElementById("twoPlayer");
//difficulty Stuff
function difficultyMenuActive() {
    if (difficultyWindowActive)
        difficultyWindowActive = false;
    else if (!difficultyWindowActive)
        difficultyWindowActive = true;
    if (difficultyWindowActive) {
        setDifficultyMenuActive(easyBox);
        setDifficultyMenuActive(normalBox);
        setDifficultyMenuActive(impossibleBox);
        setDifficultyMenuActive(twoPlayer);
        easyBox === null || easyBox === void 0 ? void 0 : easyBox.classList.remove('top1');
        normalBox === null || normalBox === void 0 ? void 0 : normalBox.classList.remove('top1');
        impossibleBox === null || impossibleBox === void 0 ? void 0 : impossibleBox.classList.remove('top1');
        twoPlayer === null || twoPlayer === void 0 ? void 0 : twoPlayer.classList.remove('top1');
        setDifficultyArrow();
    }
    delDifficultyArrow();
}
function setDifficultyMenuActive(value) {
    if (value === null || value === void 0 ? void 0 : value.classList.contains('hide'))
        value.classList.remove('hide');
}
function setDifficultyMenuInactive(value) {
    if (!(value === null || value === void 0 ? void 0 : value.classList.contains('hide')))
        value.classList.add('hide');
}
function difficultySetActive(value) {
    difficultyActive = value; //without validation !!!
    clearField();
    if (difficultyActive != 1)
        setDifficultyMenuInactive(easyBox);
    if (difficultyActive != 2)
        setDifficultyMenuInactive(normalBox);
    if (difficultyActive != 3)
        setDifficultyMenuInactive(impossibleBox);
    if (difficultyActive != 4)
        setDifficultyMenuInactive(twoPlayer);
    easyBox === null || easyBox === void 0 ? void 0 : easyBox.classList.add('top1');
    normalBox === null || normalBox === void 0 ? void 0 : normalBox.classList.add('top1');
    impossibleBox === null || impossibleBox === void 0 ? void 0 : impossibleBox.classList.add('top1');
    twoPlayer === null || twoPlayer === void 0 ? void 0 : twoPlayer.classList.add('top1');
}
function setDifficultyArrow() {
    let tmp = document.getElementById("difficultyIco");
    if (difficultyActive == 2)
        tmp === null || tmp === void 0 ? void 0 : tmp.classList.add('top2');
    else if (difficultyActive == 3)
        tmp === null || tmp === void 0 ? void 0 : tmp.classList.add('top3');
    else if (difficultyActive == 4)
        tmp === null || tmp === void 0 ? void 0 : tmp.classList.add('top4');
}
function delDifficultyArrow() {
    let tmp = document.getElementById("difficultyIco");
    if (difficultyActive == 2)
        tmp === null || tmp === void 0 ? void 0 : tmp.classList.remove('top2');
    else if (difficultyActive == 3)
        tmp === null || tmp === void 0 ? void 0 : tmp.classList.remove('top3');
    else if (difficultyActive == 4)
        tmp === null || tmp === void 0 ? void 0 : tmp.classList.remove('top4');
}
//setting Stuff
function settingMenuActive() {
    if (settingWindowActive)
        settingWindowActive = false;
    else if (!settingWindowActive)
        settingWindowActive = true;
    let settingMenu = document.getElementById("setting");
    let settingIco = document.getElementById("settingIco");
    let settingLabel = document.getElementById("settingLabel");
    let settingOptions = document.getElementById("settingOptions");
    settingMenu === null || settingMenu === void 0 ? void 0 : settingMenu.classList.toggle("settingBoxOpen");
    settingIco === null || settingIco === void 0 ? void 0 : settingIco.classList.toggle("settingIcoOpen");
    settingLabel === null || settingLabel === void 0 ? void 0 : settingLabel.classList.toggle("hide");
    settingOptions === null || settingOptions === void 0 ? void 0 : settingOptions.classList.toggle("hide");
}
//TicTacToe Stuff
var turnCounter = 0;
var difficulty = difficultyActive;
var tField = new Array(5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var pSkip = false;
var gameOver = false;
function tKlick(sender) {
    if (tField[sender.id] == 0 && !gameOver) {
        console.log("es gibt kein gewinner");
        if (pSkip) {
            turnPlayer(sender.id, false);
            pSkip = false;
        }
        else if (!pSkip) {
            console.log(gameOver);
            turnPlayer(sender.id, true);
            if (difficultyActive != 4)
                turnAI();
            //else pSkip = true;
        }
    }
    if (turnCounter >= 4)
        getWinner();
    btnStatusUpdate();
}
function turnPlayer(id, normal) {
    if (normal) {
        createSVG(false, id);
        tField[id] = 1;
    }
    else if (!normal) {
        createSVG(true, id);
        tField[id] = 2;
    }
    turnCounter++;
}
function turnAI() {
    if (difficultyActive == 1 && turnCounter != 9) {
        let tmp = countingEmptyFields();
        let tmpId = getRandom(tmp[0]);
        createSVG(true, tmp[1][(tmpId)]);
        tField[tmp[1][(tmpId)]] = 2;
        turnCounter++;
    }
    if (difficultyActive == 2) { /*...*/ }
    if (difficultyActive == 3) { /*...*/ }
}
function countingEmptyFields() {
    let counter = 0;
    let fieldCounter = 0;
    let fieldNumber = new Array();
    let returnArray = new Array();
    for (let field of tField) {
        if (field == 0) {
            counter++;
            fieldNumber.push(fieldCounter);
        }
        fieldCounter++;
    }
    ;
    returnArray.push(counter);
    returnArray.push(fieldNumber);
    return returnArray;
}
function getWinner() {
    let locationForWinLine = "";
    if (tField[1] == tField[2] && tField[1] == tField[3] && tField[1] != 0) {
        locationForWinLine = "column1";
    }
    else if (tField[4] == tField[5] && tField[4] == tField[6] && tField[4] != 0) {
        locationForWinLine = "column2";
    }
    else if (tField[7] == tField[8] && tField[7] == tField[9] && tField[7] != 0) {
        locationForWinLine = "column3";
    }
    else if (tField[1] == tField[4] && tField[1] == tField[7] && tField[1] != 0) {
        locationForWinLine = "row1";
    }
    else if (tField[2] == tField[5] && tField[2] == tField[8] && tField[2] != 0) {
        locationForWinLine = "row2";
    }
    else if (tField[3] == tField[6] && tField[3] == tField[9] && tField[3] != 0) {
        locationForWinLine = "row3";
    }
    else if (tField[1] == tField[5] && tField[1] == tField[9] && tField[1] != 0) {
        locationForWinLine = "diagonal1";
    }
    else if (tField[3] == tField[5] && tField[3] == tField[7] && tField[3] != 0) {
        locationForWinLine = "diagonal2";
    }
    if (locationForWinLine != "")
        setWinner(locationForWinLine);
}
function clearField() {
    document.querySelectorAll(".generatedSVG").forEach(e => e.remove());
    let winBar = document.getElementById("10");
    winBar ? winBar.className = 'winnLine' : null;
    tField = [5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    turnCounter = 0;
    gameOver = false;
    btnStatusUpdate();
}
function createSVG(type, id) {
    var _a;
    let linkCircle = "./svg/circle.svg#circleSVG1";
    let linkCross = "./svg/cross.svg#crossSVG1";
    let link = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(link, "svg");
    let use = document.createElementNS(link, "use");
    if (type)
        use.setAttribute('href', linkCircle);
    else if (!type)
        use.setAttribute('href', linkCross);
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('class', 'generatedSVG');
    svg.appendChild(use);
    (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.appendChild(svg);
}
function getRandom(max) {
    return (Math.floor(Math.random() * max));
}
function setWinner(winLine) {
    gameOver = true;
    let winBar = document.getElementById("10");
    winBar === null || winBar === void 0 ? void 0 : winBar.classList.toggle(winLine);
}
function btnStatusUpdate() {
    let btnEvent = document.getElementById("btnEvent");
    if (btnEvent && turnCounter == 0) {
        btnEvent.innerHTML = 'Klicke auf ein Feld, um zu beginnen';
    }
    if (btnEvent && turnCounter >= 1) {
        btnEvent.innerHTML = 'Spiel läuft';
    }
    if (gameOver) {
        btnEvent.innerHTML = 'Klicke hier für ein Neustart';
    }
}
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=TicTacToe.js.map