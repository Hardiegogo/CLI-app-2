var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log("The big bang theory quiz");
var userName = readlineSync.question('May I have your name? ');
console.log("Hello " + chalk.red(userName) + ", let's start with the game")
var userScore = 0;

var leaderboard = [
  {
    person: "Chirag",
    score: 5
  },
  {
    person: "Anshika",
    score: 3
  },
  {
    person: "Mehak",
    score: 2
  }
]


var questionList = [
  {
    question: "Is Sheldon a scientist or a swimmer? ",
    answer: "Scientist",
  },
  {
    question: "Leonard is attracted to Penny or Amy? ",
    answer: "Penny"
  },
  {
    question: "Who is Sheldon's roommate (Raj or Leonard)? ",
    answer: "Leonard"
  },
  {
    question: "Who goes to the space station (Sheldon or Howard)? ",
    answer: "Howard"
  },
  {
    question:"Who is Howard married to (Bernadette or Amy)?",
    answer:"Bernadette"
  }
]

function play (question,answer){
   var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    userScore += 1;
    console.log(chalk.green("right!"))
  } else {
    console.log(chalk.red("wrong!"))
  }
  console.log(chalk.yellow("--------"))
}

questionList.forEach((data) => {
 play(data.question,data.answer);
})


console.log(chalk.green("Yay your score is ") + userScore);

// var newLeaderboard = [...leaderboard, { person: userName, score: userScore }]

// newLeaderboard.sort((a, b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0))

console.log("Leaderboards : ")

leaderboard.forEach((data, index) => {
  let line = index + 1 + ' ' + data.person + "  " + data.score;
  console.log(line);

})





