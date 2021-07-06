//Script for Adventure Game

//Sections
const titleScreen = document.getElementById("titleScreen");
const characterCreator = document.getElementById("characterCreator");
const startButton = document.getElementById("startGame");
const finishCharacter = document.getElementById("finishCharacter");
const characterSummary = document.getElementById("characterSummary");
const characterSummerized = document.getElementById("characterSummerized");
let userName = document.getElementById("userName").value;

//Start game script
function startGame() {
    titleScreen.style.display = "none";
    characterCreator.style.display = "block";
}

startButton.addEventListener("click", startGame);



//Race checkbox...
let orc = document.getElementById("orc");
let nord = document.getElementById("nord");
let peke = document.getElementById("peke");

let attackStat = document.getElementById("defaultAttack");
let defenceStat = document.getElementById("defaultDefence");
let charismaStat = document.getElementById("defaultCharisma");
let raceDescription = document.getElementById("briefDescription");


//Race default abilities:
let orcStats = {
    race: "Orc",
    attack: 3,
    defence: 2,
    charisma: 1
};

let nordStats = {
    race: "Nord",
    attack: 2,
    defence: 2,
    charisma: 2
};

let pekeStats = {
    race: "Peke",
    attack: 2,
    defece: 1,
    charisma: 3
};

let playerStats = {
    name: "no name chosen yet",
    race: "no race chosen yet",
    attack: 0,
    defence: 0,
    charisma: 0
};

//Default Stats: 
orc.addEventListener("change", function() {
    if (this.checked) {
        attackStat.innerHTML = 3;
        defenceStat.innerHTML = 2;
        charismaStat.innerHTML = 1;
        raceDescription.innerHTML = "Orcs are large, muscular creatures that are vile and intimidating.  Very good at combat, however, many fear to interact with them."
        playerStats = orcStats;
        userRace = orcStats;
    }
});

nord.addEventListener("change", function() {
    if (this.checked) {
        attackStat.innerHTML = 2;
        defenceStat.innerHTML = 2;
        charismaStat.innerHTML = 2;
        raceDescription.innerHTML = "Nords are normal humans, used to the harsh winter conditions of the north.  A very balanced race."
        playerStats = nordStats;
        userRace = nordStats;
    }
});

peke.addEventListener("change", function() {
    if (this.checked) {
        attackStat.innerHTML = 2;
        defenceStat.innerHTML = 1;
        charismaStat.innerHTML = 3;
        raceDescription.innerHTML = "Pekes are a strange race, named after the dog breed for their close resemblance.  They perform poorly in combat, however, they make up for it in their ability to persuede people."
        playerStats = pekeStats;
        userRace = pekeStats;
    }
});


//Finish Character
function completeCharacter() {
        let userName = document.getElementById("userName").value.toUpperCase();
        playerStats = {
            name: userName,
            race: userRace.race,
            attack: userRace.attack,
            defence: userRace.defence,
            charisma: userRace.charisma
        }
        characterCreator.style.display = "none";
        characterSummary.style.display = "block";
        characterSummerized.innerHTML = `Your name is ${playerStats.name}, you are from the race of the ${playerStats.race}s. Your stats are the following. <br>Attack: ${playerStats.attack}<br>Defence: ${playerStats.defence}<br>Charisma: ${playerStats.charisma}`
    }

finishCharacter.addEventListener("click", completeCharacter);

//Character Summary:

