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
var counter = 0;
var difficulty = difficultyActive;
var tField = new Array(5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var round = 0;
function tKlick(sender) {
    if (tField[sender.id] == 0) {
        tField[sender.id] = 1;
        createSVG(false, sender.id);
        round++;
        if (difficulty != 4)
            turnAI();
        else
            turnPlayer();
    }
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
function turnAI() {
    if (difficultyActive == 1) {
        var tmp = countLeftFields();
        var tmpId = getRandom(tmp[0]);
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
function turnPlayer() {
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
function getRandom(max) {
    return (Math.floor(Math.random() * max));
}
function findWinner() {
}
function clearField() {
    document.querySelectorAll(".generatedSVG").forEach(function (e) { return e.remove(); });
    tField = [5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
