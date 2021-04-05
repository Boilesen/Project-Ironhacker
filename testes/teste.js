var gamecards = [
  {
    title: "thomas",
    img: 0,
    uppertext: 0,
    bodytext: 0,
    stressLeft: 10,
    healthLeft: 10,
    socialLeft: 10,
    studyLeft: 10,
    stressRight: -10,
    healthRight: -10,
    socialRight: -10,
    studyRight: -10,
  },
  {
    title: "poloo",
    img: 0,
    uppertext: 0,
    bodytext: 0,
    stressLeft: -10,
    healthLeft: -10,
    socialLeft: -10,
    studyLeft: -10,
    stressRight: 10,
    healthRight: 10,
    socialRight: 10,
    studyRight: 10,
  },
];

let stress = 50;
let health = 50;
let social = 50;
let study = 50;

// while (
//   stress < 100 &&
//   health < 100 &&
//   social < 100 &&
//   sudy < 100 &&
//   stress > 100 &&
//   health > 100 &&
//   social > 100 &&
//   sudy > 100
// ) {

while (i < 45) {
  i++;

  let x = Math.floor(Math.random() * 2);

  var card = gamecards[x];
  console.log(card);
  console.log(gamecards);
  document.getElementById("texto").innerHTML = card.title;

  let r = 1;
  if ((r = 1)) {
    stress += card.stressRight;
    health += card.healthRight;
    social += card.socialRight;
    study += card.studyRight;
  } else {
    stress += card.stressLeft;
    health += card.healthLeft;
    social += card.socialLeft;
    study += card.studyLeft;
  }

  document.getElementById("stress").innerHTML = stress;
  document.getElementById("health").innerHTML = health;
  document.getElementById("social").innerHTML = social;
  document.getElementById("study").innerHTML = study;
}
