let gamecards = [
  // order od right/left/ButtonEffect is [stress, health, social, study]
  {
    title: "Classes stopped at 19h. What should I do next?",
    lefttext: "Keep studying until midnight",
    rigthtext: "Go play online videogames",
    rightButtonEffect: [-5, 0, 5, -10],
    leftButtonEffect: [5, 0, -5, 10],
  },
  {
    title: "Woke up early still have time before classes start",
    lefttext: "Go for a walk",
    rigthtext: "Study the contend prior to classes",
    rightButtonEffect: [5, 0, 0, 5],
    leftButtonEffect: [-5, 5, 0, 0],
  },
  {
    title: "It is sunday, what should I do today?",
    lefttext: "Study harder!",
    rigthtext: "Forget your problems, Carpe Dien",
    rightButtonEffect: [-10, 5, 5, -10],
    leftButtonEffect: [10, -5, -5, 10],
  },
  {
    title: "Arrrghh another kata :(",
    lefttext: "Pull-stacker copy from Google",
    rigthtext: "Work hard and solve it",
    rightButtonEffect: [5, 0, 0, 10],
    leftButtonEffect: [0, 0, 0, -5],
  },
  {
    title: "Today lab is here! Wow such clever! Nice!",
    lefttext: "I will finish now!!!!!",
    rigthtext: "The bonus are not that important",
    rightButtonEffect: [10, -5, -10, 10],
    leftButtonEffect: [20, -10, -15, 20],
  },
  {
    title: "Wait there are self guided content??? Jesus!!!!",
    lefttext: "Sure I need to learn everything!!!!",
    rigthtext: "Perhaps no one will know if I skipped",
    rightButtonEffect: [0, 0, 0, -5],
    leftButtonEffect: [5, 0, 0, 5],
  },
  {
    title: "Need to clear my head!",
    lefttext: "Just die on a couch",
    rigthtext: "Go for a run",
    rightButtonEffect: [-5, 10, 0, 0],
    leftButtonEffect: [-5, -10, 0, 0],
  },
  {
    title: "Urra! I was just invated for a party during the week",
    lefttext: "Got wasted",
    rigthtext: " I have to study",
    rightButtonEffect: [0, 0, -10, 5],
    leftButtonEffect: [-20, -20, 20, -20],
  },
  {
    title: "Look there is a fly on my desk!",
    lefttext: "Pass one hour staring it",
    rigthtext: "Shuh, fly away little fly",
    rightButtonEffect: [5, 0, 0, 5],
    leftButtonEffect: [-5, 0, 0, -5],
  },
  {
    title: "Have no time to cook :/ i will order:",
    lefttext: "Junk Food!!!!",
    rigthtext: "A sad salad :(",
    rightButtonEffect: [0, 5, 0, 0],
    leftButtonEffect: [-5, -10, 0, 0],
  },
  {
    title:
      "On the intro they reccomended for a second monitor. When clearly they wanted to say get a very confy chair.",
    lefttext: "Sell your second monitor",
    rigthtext: "Neck disconfort in 3, 2 ,1, GO!!",
    rightButtonEffect: [0, -10, 0, 0],
    leftButtonEffect: [0, 10, 0, 0],
  },
  {
    title: "MIND SO FULL error NULL zzzzzz. pszz",
    lefttext: "Meditate",
    rigthtext: "Fight to regain control",
    rightButtonEffect: [10, -10, 0, 0],
    leftButtonEffect: [-10, 10, 0, 0],
  },
  {
    title: "I dream about code every night",
    lefttext: "Yeah!!",
    rigthtext: "Argh",
    rightButtonEffect: [5, 0, 0, 0],
    leftButtonEffect: [-5, 0, 0, 0],
  },
  {
    title: "Sleepy... zzz where coffee zzz coffzzz",
    lefttext: "Hmm so much  coffee",
    rigthtext: "Do small exercises to mantain focus",
    rightButtonEffect: [-5, 5, 0, 5],
    leftButtonEffect: [5, -10, 0, 5],
  },
  {
    title: "It`s 20h  fammily dinner is on ",
    lefttext: "Join dinner",
    rigthtext: "NO! Just a few more lines",
    rightButtonEffect: [5, 0, -10, 5],
    leftButtonEffect: [-5, 5, 10, 0],
  },
  {
    title: "Your soulmate is complaining the lack of attention",
    lefttext: "Just ignore it",
    rigthtext: "Why not watch netflix and chill?",
    rightButtonEffect: [-5, 0, 10, 0],
    leftButtonEffect: [5, 0, -10, 0],
  },
  {
    title: "What is that smell?? Disgusting! ",
    lefttext: "That is not relevant for my code",
    rigthtext: "Christ! I really need to take a shower",
    rightButtonEffect: [0, 5, 5, 0],
    leftButtonEffect: [0, -10, -10, 0],
  },
  {
    title:
      "Wait dont press run!! Too late that while is going to run forever Muahahahaa! :(",
    lefttext: "Nooo....ooo...ooo",
    rigthtext: "Nooo....ooo...ooo",
    rightButtonEffect: [5, 0, 0, 0],
    leftButtonEffect: [5, 0, 0, 0],
  },
  {
    title: "Sure just commit it in the master no problems ",
    lefttext: "Two days latter... WTF??",
    rigthtext: "Two days latter... WHYYYYY!",
    rightButtonEffect: [5, 0, 0, -5],
    leftButtonEffect: [5, 5, 0, -5],
  },
  {
    title: "My dogs are whining",
    lefttext: "Go out and play with them",
    rigthtext: "Hug and pet them",
    rightButtonEffect: [-10, 5, 5, 0],
    leftButtonEffect: [-10, 5, 5, 0],
  },
  {
    title: "I know there are a video about that on youtube",
    lefttext: "Cat videos ara awesome",
    rigthtext: "After 3 dozens I found",
    rightButtonEffect: [5, 0, 0, 5],
    leftButtonEffect: [-5, 0, 0, -5],
  },
  {
    title: "Stack overflow is?",
    lefttext: "My friend",
    rigthtext: "Nothing to me",
    rightButtonEffect: [10, 0, 5, 5],
    leftButtonEffect: [0, 0, 0, -5],
  },
  {
    title: "Should I buy a mechanical keyboard?",
    lefttext: "Clap clap clap!! looks like a typemachine!",
    rigthtext: "Why my keys feel so bad?",
    rightButtonEffect: [5, 0, 0, 0],
    leftButtonEffect: [-5, 0, 0, 0],
  },
  {
    title: "Look a mouse that doesn`t make clicking noises!",
    lefttext: "So glad that I bougth, such silence",
    rigthtext: "clik clik clik clik clik",
    rightButtonEffect: [5, 0, 0, 0],
    leftButtonEffect: [-5, 0, 0, 0],
  },
  {
    title: "Look the sun is out! What a beautiful day",
    lefttext: "NOOOO my skin I am a Vampire now",
    rigthtext: "It is time take a sunbath",
    rightButtonEffect: [0, 5, 0, 0],
    leftButtonEffect: [0, -5, 0, 0],
  },
  {
    title: "it is Friday",
    lefttext: "It's Friday, Friday Gotta get down on Friday",
    rigthtext: "Dont know who is Rebecca Black",
    rightButtonEffect: [0, 0, 0, 0],
    leftButtonEffect: [-10, 0, 10, 0],
  },
  {
    title: "Sure I know how to animate in Canvas",
    lefttext: "Wait why is everything blinking?",
    rigthtext: "WOW such nice graphics",
    rightButtonEffect: [0, 0, 0, 5],
    leftButtonEffect: [5, 0, 0, 5],
  },
  {
    title: "It`s my birthday. One more translation arounds the sun!",
    lefttext: "Yeah birthday cake",
    rigthtext: "There is no cake. The cake is a lie",
    rightButtonEffect: [20, -20, -20, -20],
    leftButtonEffect: [-10, 10, 10, 0],
  },
  {
    title: "My dogs are whining",
    lefttext: "Go out and play with them",
    rigthtext: "Hug and pet them",
    rightButtonEffect: [-10, 5, 5, 0],
    leftButtonEffect: [-10, 5, 5, 0],
  },
  {
    title: "My dogs are whining",
    lefttext: "Go out and play with them",
    rigthtext: "Hug and pet them",
    rightButtonEffect: [-10, 5, 5, 0],
    leftButtonEffect: [-10, 5, 5, 0],
  },
];
