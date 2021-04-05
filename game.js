const titles = [
  "Noob",
  "Gamer",
  "Computer-Vampire",
  "Pull stacker",
  "Front-ender",
  "Back-ender",
  "Magician",
  "Full-Stacker",
  "Obnoxious ",
  "Little Know All Bastard",
];

const intro =
  "You want to became a full-stack developer and own the next Unicorn StartUp. With that in mind you choose tho ingress in a bootcamp for learn the necessary skills. Little did you know how scruciating that would be";
const demon = [
  "You applied and enroll at the IronHack bootcamp after the initial test and zero module. Now your torturing journey begins.",
  "...",
  "...",
  "...",
];

const end = [];

let nameVariable = "";
let day = 1;
let ageVariable = `Day ${day} of Ironhacker ${nameVariable}`;

const textContainer = document.getElementById("main-text");
textContainer.innerText = intro;

const buttonsContainer = document.getElementById("buttons-container");
let singleButton = document.getElementById("single-choice-button");

const playerId = document.getElementById("player-id");
const nameHolder = document.getElementById("name-holder");
const ageHolder = document.getElementById("age-holder");

const playerNameHolder = document.getElementById("input-text-holder");

let clickCounter = 0;
let yearCounter = 0;

let player = new Player();

function startGame() {
  singleButton.innerText = "I am Ironhacker...";
  textContainer.innerText = demon[0];
  playerNameHolder.innerHTML =
    '<input  type="input" id="name"  class="form__field" placeholder="Write thy name!" name="Write thy name!" required/>';
}

function printPlayerName() {
  const playerName = document.getElementById("name");
  nameVariable = playerName.value;
  nameHolder.innerText =
    "Ironhacker " +
    nameVariable +
    ", the " +
    titles[Math.floor(Math.random() * titles.length)];
  ageVariable = `Day ${day} of Ironhacker ${nameVariable}`;
  ageHolder.innerText = ageVariable;
  playerNameHolder.parentElement.removeChild(playerNameHolder);
}

function gameInitialLoop() {
  player.stress = 50;
  player.health = 50;
  player.social = 50;
  player.study = 50;
  textContainer.innerText = demon[1];
  singleButton.classList.add("single-choice-fade");
  singleButton.classList.add("multiple-choice-transition");
  singleButton.parentElement.removeChild(singleButton);
  buttonsContainer.innerHTML +=
    '<button id="right-choice-button" class="choice-buttons"></button>';
  buttonsContainer.innerHTML +=
    '<button id="left-choice-button" class="choice-buttons"></button>';
  leftButton = document.getElementById("right-choice-button");
  rigthButton = document.getElementById("left-choice-button");
  leftButton.innerText = "Gave up codding it is to difficult.";
  rigthButton.innerText = "Accept your destiny as a coder.";
  leftButton.onclick = () => {
    leftButton.addEventListener("click", () => {
      gameLoop();
    });
  };
  rigthButton.addEventListener("click", () => {
    gameLoop();
  });
}

function gameLoop() {
  day++;
  ageVariable = `Day ${day} of Ironhacker ${nameVariable}`;
  ageHolder.innerText = ageVariable;
  player.printCurrentStatus();
  const theKingWillDie = player.isPlayerOver();

  if (day > 62) {
    textContainer.innerText = "Congratulations!!! You finish the bootcamp!";
    won();
  }

  if (theKingWillDie[0] == -1 && theKingWillDie[1] == -1) {
    let x = Math.floor(Math.random() * gamecards.length);
    const card = gamecards[x];

    textContainer.innerText = card.title;
    leftButton.innerText = card.lefttext;
    rigthButton.innerText = card.rigthtext;
    leftButton.onclick = () => {
      player.updatePlayer(card.leftButtonEffect);
      player.printCurrentStatus();
      gameLoop();
    };
    rigthButton.onclick = () => {
      player.updatePlayer(card.rightButtonEffect);
      player.printCurrentStatus();
      gameLoop();
    };
  } else {
    theKingWillDie[0] != -1
      ? gameOver(theKingWillDie[0])
      : gameOver(theKingWillDie[1]);
  }
}

function gameOver(death) {
  switch (death) {
    case 0:
      if (player.stress == 0) {
        textContainer.innerText =
          "Your stress is so low that you got incosequent and stopped studying. ";
        day = 1;
      } else {
        textContainer.innerText =
          "Your stress got so High that you bacame disfunctional e got arrested for running naked across the streets";
        day = 1;
      }
      break;
    case 1:
      if (player.health == 0) {
        textContainer.innerText =
          "You neglect your health so much that you had a heart atack and went into a coma for months.";
        day = 1;
      } else {
        textContainer.innerText =
          "You focused so much on your health that you decided to change careers and participate in the next Olympics";
        day = 1;
      }
      break;
    case 2:
      if (player.Social == 0) {
        textContainer.innerText =
          "You became such a reclusive that you retreat to a cave far from civilization";
        day = 1;
      } else {
        textContainer.innerText =
          "Whow so social! You choose to became a politician and forgot about code";
        day = 1;
      }
      break;
    case 3:
      if (player.study == 0) {
        textContainer.innerText =
          "You learned nothing! Why expend time and effort towards a bootcamp";
        day = 1;
      } else {
        textContainer.innerText =
          "After a few days of the bootcamp you where alredy teaching the professors Why expend time and effort towards a bootcamp. ";
        day = 1;
      }
      break;

    case 4:
      if (day > 10) {
        textContainer.innerText = "Congratulations!!! You finish the bootcamp!";
      }
      break;
  }
  buttonsContainer.innerHTML =
    '<button id="single-choice-button" class="choice-buttons">Start Over!</button';
  singleButton = document.getElementById("single-choice-button");
  singleButton.addEventListener("click", () => {
    textContainer.innerText =
      "You wake up, in the darkness, just as before. Something is wrong.";
    continueGame();
  });

  if (day > 10) {
    won;
  }
}

function continueGame() {
  gameInitialLoop();
}

singleButton.addEventListener("click", () => {
  clickCounter++;

  if (clickCounter == 1) {
    startGame();
  } else if (clickCounter == 2) {
    printPlayerName();
    textContainer.innerText = demon[1];
    singleButton.innerText = "I want to became an Ironhacker";
  } else {
    gameInitialLoop();
  }
});

function won() {
  buttonsContainer.innerHTML =
    '<button id="single-choice-button" class="choice-buttons">"Congratulations!!! You finish the bootcamp after 63 days!"!</button';
  singleButton = document.getElementById("single-choice-button");
  singleButton.addEventListener("click", () => {
    textContainer.innerText =
      "Congratulations!!! You finish the bootcamp after 63 days!";
    continueGame();
    textContainer.innerText =
      "Congratulations!!! You finish the bootcamp after 63 days!";
    day = 0;
  });
}
