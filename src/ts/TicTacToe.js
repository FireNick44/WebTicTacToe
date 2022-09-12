// Global VARS
var difficultyWindowActive = false;
var difficultyActive = 1;
var settingWindowActive = false;
// ElementsById
var easyBox = document.getElementById("easyBox");
var normalBox = document.getElementById("normalBox");
var impossibleBox = document.getElementById("impossibleBox");
var twoPlayer = document.getElementById("twoPlayer");
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
    var tmp = document.getElementById("difficultyIco");
    if (difficultyActive == 2)
        tmp === null || tmp === void 0 ? void 0 : tmp.classList.add('top2');
    else if (difficultyActive == 3)
        tmp === null || tmp === void 0 ? void 0 : tmp.classList.add('top3');
    else if (difficultyActive == 4)
        tmp === null || tmp === void 0 ? void 0 : tmp.classList.add('top4');
}
function delDifficultyArrow() {
    var tmp = document.getElementById("difficultyIco");
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
    var settingMenu = document.getElementById("setting");
    var settingIco = document.getElementById("settingIco");
    var settingLabel = document.getElementById("settingLabel");
    var settingOptions = document.getElementById("settingOptions");
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
function tKlick(sender) {
    if (tField[sender.id] == null) {
        if (pSkip) {
            turnPlayer(sender.id, false);
            pSkip = false;
        }
        else if (!pSkip) {
            turnPlayer(sender.id, true);
            if (difficultyActive != 4)
                turnAI();
            else
                pSkip = true;
        }
    }
    if (turnCounter == 5)
        getWinner();
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
        var tmp = countLeftFields();
        var tmpId = getRandom(tmp[0]);
        //sleep function? or animation for AI?
        createSVG(true, tmp[1][(tmpId)]);
        tField[tmp[1][(tmpId)]] = 2;
        turnCounter++;
    }
    if (difficultyActive == 2) { /*...*/ }
    if (difficultyActive == 3) { /*...*/ }
}
function countLeftFields() {
    var counter = 0;
    var fieldCounter = 0;
    var fieldNumber = new Array();
    var returnArray = new Array();
    for (var _i = 0, tField_1 = tField; _i < tField_1.length; _i++) {
        var field = tField_1[_i];
        if (field == 0) {
            counter++;
            fieldNumber.push(fieldCounter);
        }
        fieldCounter++;
    }
    ;
    console.log("countLeftFields:");
    console.log(returnArray);
    returnArray.push(counter);
    returnArray.push(fieldNumber);
    return returnArray;
}
function getWinner() {
    if (tField[1] == tField[2] && tField[1] == tField[3] ||
        tField[4] == tField[5] && tField[4] == tField[6] ||
        tField[7] == tField[8] && tField[7] == tField[9] ||
        tField[1] == tField[4] && tField[1] == tField[7] ||
        tField[2] == tField[5] && tField[2] == tField[8] ||
        tField[3] == tField[6] && tField[3] == tField[9] ||
        tField[1] == tField[5] && tField[1] == tField[9] ||
        tField[3] == tField[5] && tField[3] == tField[7]) {
        //won = true; 
    }
}
function clearField() {
    document.querySelectorAll(".generatedSVG").forEach(function (e) { return e.remove(); });
    tField = [5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
function createSVG(type, id) {
    var linkCircle = "./svg/circle.svg#circleSVG1";
    var linkCross = "./svg/cross.svg#crossSVG1";
    var link = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(link, "svg");
    var use = document.createElementNS(link, "use");
    if (type)
        use.setAttribute('href', linkCircle);
    else if (!type)
        use.setAttribute('href', linkCross);
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('class', 'generatedSVG');
    svg.appendChild(use);
    document.getElementById(id).appendChild(svg);
}
function getRandom(max) {
    return (Math.floor(Math.random() * max));
}
