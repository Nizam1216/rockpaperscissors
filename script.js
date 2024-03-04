var userScore = localStorage.getItem("userScore") || 0;
var computerScore = localStorage.getItem("computerScore") || 0;
var lostUserImg = document.getElementById("lostUserImg");
var lostUserImg2 = document.getElementById("lostUserImg2");
var wonUserImg = document.getElementById("wonUserImg");
var wonUserImg2 = document.getElementById("wonUserImg2");
var tieUserImg = document.getElementById("tieUserImg");
var tieUserImg2 = document.getElementById("tieUserImg2");

document.getElementById("userScore").textContent = userScore;
document.getElementById("computerScore").textContent = computerScore;

function openPopup() {
  var gameRulesPopup = document.getElementById("gameRulesPopup");
  if (gameRulesPopup) {
    gameRulesPopup.classList.add("show");
  }
}

function closePopup() {
  var gameRulesPopup = document.getElementById("gameRulesPopup");
  if (gameRulesPopup) {
    gameRulesPopup.classList.remove("show");
  }
}

const handleButtonClick = (userChoice) => {
  var gameDiv = document.getElementById("buttonsDiv");
  var resultsDiv = document.getElementById("resultsDiv");
  var userWin = document.getElementById("userWin");
  var computerWin = document.getElementById("computerWin");
  var tie = document.getElementById("tie");
  var nextBtn = document.getElementById("nextBtn");

  var computerChoices = ["Rock", "Paper", "Scissors"];

  var computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // console.log("User choice:", userChoice);

  // console.log("Computer choice:", computerChoice);

  var winner;
  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    winner = "user";
    userScore++;
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Scissors" && userChoice === "Paper") ||
    (computerChoice === "Paper" && userChoice === "Rock")
  ) {
    winner = "computer";
    computerScore++;
  } else {
    winner = "tie";
  }

  // console.log(winner);

  document.getElementById("userScore").textContent = userScore;
  document.getElementById("computerScore").textContent = computerScore;

  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);
  localStorage.setItem("userChoice", userChoice);
  localStorage.setItem("computerChoice", computerChoice);
  gameDiv.style.display = "none";
  resultsDiv.style.display = "block";
  if (winner == "user") {
    computerWin.style.display = "none";
    tie.style.display = "none";
    userWin.style.display = "block";
    nextBtn.style.display = "block";
  } else if (winner == "computer") {
    userWin.style.display = "none";
    tie.style.display = "none";
    userWin.style.display = "none";
    computerWin.style.display = "block";
  } else if (winner == "tie") {
    userWin.style.display = "none";
    userWin.style.display = "none";
    computerWin.style.display = "none";
    tie.style.display = "block";
  }

  lostUserImg.src = `images/${localStorage.getItem("userChoice")}.svg`;
  lostUserImg2.src = `images/${localStorage.getItem("computerChoice")}.svg`;
  wonUserImg.src = `images/${localStorage.getItem("userChoice")}.svg`;
  wonUserImg2.src = `images/${localStorage.getItem("computerChoice")}.svg`;
  tieUserImg.src = `images/${localStorage.getItem("userChoice")}.svg`;
  tieUserImg2.src = `images/${localStorage.getItem("computerChoice")}.svg`;
  // console.log("User's Image Source:", lostUserImg.src);
  // console.log("Computer's Image Source:", lostUserImg2.src);
};

function playAgain() {
  var gameDiv = document.getElementById("buttonsDiv");
  var resultsDiv = document.getElementById("resultsDiv");
  var nextBtn = document.getElementById("nextBtn");
  resultsDiv.style.display = "none";
  nextBtn.style.display = "none";
  gameDiv.style.display = "block";
}
function playAgain2() {
  var gameDiv = document.getElementById("buttonsDiv");
  var resultsDiv = document.getElementById("resultsDiv");
  var hurray = document.getElementById("hurray");
  var notHurray = document.getElementById("notHurray");
  var nextBtn = document.getElementById("nextBtn");
  resultsDiv.style.display = "none";
  hurray.style.display = "none";
  gameDiv.style.display = "block";
  notHurray.style.display = "block";
  resultsDiv.style.display = "none";
}
function hurray() {
  var nextBtn = document.getElementById("nextBtn");
  var notHurray = document.getElementById("notHurray");
  var hurray = document.getElementById("hurray");
  nextBtn.style.display = "none";
  notHurray.style.display = "none";
  hurray.style.display = "block";
}
